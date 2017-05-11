import React, {Component} from 'react';

export default class  extends Component {

    selectItem() {
        this.props.setCurrentItem('select');
    }

    render() {
        let className = 'tools-item select';
        if (this.props.currentItem === 'select')
            className += ' active';
        return (
            <div
                className={className}
                onClick={this.selectItem.bind(this)}
            />
        );
    }
}