import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mapActions from '../../actions/mapActions';
import React, {Component} from 'react';
import Grid from './parts/Grid';


class Map extends Component {
    constructor(props) {
        super(props);

        let clientWidth = document.documentElement.clientWidth;
        let clientHeight = document.documentElement.clientHeight;

        this.state = {
            countColumn: Math.floor(clientWidth / 50),
            countRows: Math.ceil(clientHeight / 50),
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.forceUpdate())
    }

    componentWillMount() {
        this.setState({
            gridArray: this.createGridArray(),
        });
    }

    createGridArray(rows = this.state.countRows, column = this.state.countColumn) {
        let array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = [];
            for (let j = 0; j < column; j++) {

            }
        }
        let {initMap} = this.props.mapActions;
        initMap(array, this.state.countColumn, this.state.countRows);
        return array;
    }


    forceUpdate() {

        let width = Math.floor(document.documentElement.clientWidth / 50);
        let height = Math.ceil(document.documentElement.clientHeight / 50);

        if (width !== this.state.countColumn || height !== this.state.countRows) {
            this.setState({
                countColumn: width,
                countRows: height,
            });

            let {updateMapSize} = this.props.mapActions;
            updateMapSize(width, height);
        }
    }

    render() {
        return (
            <div className="map">
                <Grid
                    map={this.props.map}
                    mapActions={this.props.mapActions}
                    tools={this.props.tools}
                    blocks={this.props.blocks}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        map: state.mapReducer,
        tools: state.toolsReducer,
        blocks: state.blocksReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapActions: bindActionCreators(mapActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Map);