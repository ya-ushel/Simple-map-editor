import React, {Component} from 'react';

export default class Delete extends Component {

    selectItem() {
        this.props.setCurrentItem('delete');
    }

    render() {
        let temp = 'toolsItem deleteItem';
        if (this.props.currentItem === 'delete')
            temp += ' active';
        return (
            <div
                className={temp}
                onClick={this.selectItem.bind(this)}
            />
        );
    }
}