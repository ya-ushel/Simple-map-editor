import React, {Component} from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onMoveStart = this.onMoveStart.bind(this);
        this.onUnmove = this.onUnmove.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
    }

    onClick() {
        let {x, y} = this.props;
        let tool = this.props.tools.currentItem;
        if (tool === 'hand') {
            this.props.mapActions.addMapSource(this.props.blocks.selectedBlock, x, y);
        }
        if (tool === 'delete') {
            this.props.mapActions.deleteMapSource(x, y);
        }
        if (tool === 'select') {
            this.props.mapActions.addSelection(x, y);
        }
        if (tool === 'create') {
            let {generateObj} = this.props.tools;
            let structure = {};
            for (let obj of generateObj) {
                if (obj.name === this.props.tools.currentGeneration) {
                    structure = obj.source;
                    break;
                }
            }
            this.props.mapActions.createStructures(structure, x, y);
        }
    }

    onMove() {
        let {x, y} = this.props;
        let tool = this.props.tools.currentItem;
        if (this.props.map.select && tool === 'hand') {
            this.props.mapActions.addMapSource(this.props.blocks.selectedBlock, x, y);
        }
        if (this.props.map.select && tool === 'delete') {
            this.props.mapActions.deleteMapSource(x, y);
        }
    }

    shouldComponentUpdate(nextProps) {
        let cellSelected = false;
        this.props.map.selectedItem.map((item) => {
            if (item.x === this.props.x && item.y === this.props.y)
                cellSelected = true;
        });
        return (this.props.serialNumber !== nextProps.serialNumber)
            || cellSelected
            || this.props.map.width !== nextProps.map.width;
    }

    onMoveStart() {
        let {selectCells} = this.props.mapActions;
        selectCells(true);
    }

    onUnmove() {
        if (this.props.map.select) {
            let {selectCells} = this.props.mapActions;
            selectCells(false);
        }
    }

    onRightClick(e) {
        e.preventDefault();
        if (this.props.tools.currentItem === 'select') {
            this.props.mapActions.resetSelections();
        }
    }

    render() {
        let num = this.props.serialNumber;
        let className = 'cell ';

        className += this.props.map.mapping[num] ? this.props.map.mapping[num] : '';
        this.props.map.selectedItem.map((item) => {
            if (item.x === this.props.x && item.y === this.props.y)
                className += 'selected';
        });
        return (
            <div
                className={className}
                onClick={this.onClick}
                onMouseDown={this.onMoveStart}
                onMouseMove={this.onMove}
                onMouseUp={this.onUnmove}
                onContextMenu={this.onRightClick}
            >

            </div>
        );
    }
}