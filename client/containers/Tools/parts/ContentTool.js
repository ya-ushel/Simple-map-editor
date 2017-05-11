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
                className = 'current-generation';
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

        let content = [], className;
        switch (this.props.tools.currentItem) {
            case 'create':
                className = 'content-tool-container';
                content = this.createContent();
                break;
        }


        return (
            <div className={className}>
                {content}
            </div>
        );
    }
}
