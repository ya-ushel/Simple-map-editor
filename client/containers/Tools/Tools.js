import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as toolsActions from '../../actions/toolsActions';
import Hand from './parts/Hand';
import Delete from './parts/Delete';
import Select from './parts/Select';
import Create from './parts/Create';
import ContentTool from './parts/ContentTool';

class Tools extends Component {

    render() {

        return (
            <div className="toolsContainer">
                <div className="tools">
                    <Hand
                        setCurrentItem={this.props.toolsActions.setCurrentItem}
                        currentItem={this.props.tools.currentItem}
                    />
                    <Delete
                        setCurrentItem={this.props.toolsActions.setCurrentItem}
                        currentItem={this.props.tools.currentItem}
                    />
                    <Select
                        setCurrentItem={this.props.toolsActions.setCurrentItem}
                        currentItem={this.props.tools.currentItem}
                    />
                    <Create
                        setCurrentItem={this.props.toolsActions.setCurrentItem}
                        currentItem={this.props.tools.currentItem}
                    />
                </div>
                <ContentTool
                    tools={this.props.tools}
                    blocks={this.props.blocks}
                    toolsActions={this.props.toolsActions}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tools: state.toolsReducer,
        blocks: state.blocksReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toolsActions: bindActionCreators(toolsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);