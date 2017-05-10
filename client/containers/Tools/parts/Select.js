import React, {Component} from 'react';

export default class  extends Component {

    selectItem() {
        this.props.setCurrentItem('select');
    }

    render() {
        let temp = 'toolsItem select';
        if (this.props.currentItem === 'select')
            temp += ' active';
        return (
            <div
                className={temp}
                onClick={this.selectItem.bind(this)}
            />
        );
    }
}