import React, {Component} from 'react';


export default class Create extends Component {
    constructor(props) {
        super(props);

    }

    selectItem() {
        this.props.setCurrentItem('create');
    }

    render() {
        let temp = 'toolsItem create';
        if (this.props.currentItem === 'create')
            temp += ' active noneBorder';

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