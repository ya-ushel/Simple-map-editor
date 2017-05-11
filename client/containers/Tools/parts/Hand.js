import React, {Component} from 'react';

export default class Hand extends Component {

    selectItem() {
        this.props.setCurrentItem('hand');
    }

    render() {
        let className = 'tools-item hand';
        if (this.props.currentItem === 'hand')
            className += ' active';
        return (
            <div
                className={className}
                onClick={this.selectItem.bind(this)}
            />

        );
    }
}