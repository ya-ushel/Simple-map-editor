import React, {Component} from 'react';


export default class contentTool extends Component {

    onClickCreateContent(name) {
        this.props.toolsActions.setCurrentGeneration(name);
    }

    createContent() {
        let {generateObj, currentGeneration} = this.props.tools;
        let content = [];
        generateObj.map((obj) => {
            let className = '';
            if (obj.name === currentGeneration)
                className = 'currentGeneration';
            content.push(
                <div
                    key={obj.id}
                    onClick={this.onClickCreateContent.bind(this, obj.name)}
                    className={className}
                >
                    <img src={obj.img}/>
                </div>
            );
        });
        return content;
    }

    render() {

        let content = [], temp;
        switch (this.props.tools.currentItem) {
            case 'create':
                temp = 'contentToolContainer';
                content = this.createContent();
                break;
        }


        return (
            <div className={temp}>
                {content}
            </div>
        );
    }
}
