import React, {Component} from 'react';


export default class Create extends Component {
    constructor(props) {
        super(props);

    }

    selectItem() {
        this.props.setCurrentItem('create');
    }

    render() {
        let temp = 'tools-item create';
        if (this.props.currentItem === 'create')
            temp += ' active none-border';

        let context = null;

        return (
            <div
                className={temp}
                onClick={this.selectItem.bind(this)}
            >
                {context}
            </div>

        );
    }
}