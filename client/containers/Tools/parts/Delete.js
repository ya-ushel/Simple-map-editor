import React, {Component} from 'react';

export default class Delete extends Component {

    selectItem() {
        this.props.setCurrentItem('delete');
    }

    render() {
        let className = 'tools-item delete-item';
        if (this.props.currentItem === 'delete')
            className += ' active';
        return (
            <div
                className={className}
                onClick={this.selectItem.bind(this)}
            />
        );
    }
}