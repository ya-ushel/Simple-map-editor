import React, {Component} from 'react';

export default class Hand extends Component {

    selectItem() {
        this.props.setCurrentItem('hand');
    }

    render() {
        let temp = 'toolsItem hand';
        if (this.props.currentItem === 'hand')
            temp += ' active';
        return (
            <div
                className={temp}
                onClick={this.selectItem.bind(this)}
            />

        );
    }
}