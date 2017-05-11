import React, {Component} from 'react';
import Cell from './Cell';

export default class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            grid: props.map.source,
            mapActions: props.mapActions,
        };

    }


    makeGrid() {
        let grid = [];
        let key = 0;
        for (let i = 0; i < this.props.map.height; i++) {
            for (let j = 0; j < this.props.map.width; j++) {
                key++;
                grid.push(
                    <Cell
                        key={key}
                        serialNumber={this.props.map.source[i][j]}
                        x={i}
                        y={j}
                        mapActions={this.props.mapActions}
                        map={this.props.map}
                        tools={this.props.tools}
                        blocks={this.props.blocks}
                    />
                );
            }
        }


        return grid;
    }


    render() {
        let grid = this.makeGrid();
        return (
            <div className="grid">
                {
                    grid
                }
            </div>
        );
    }
}