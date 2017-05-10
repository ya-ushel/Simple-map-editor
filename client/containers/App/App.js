import React, {Component} from 'react';
import Map from '../Map/Map';
import Blocks from '../Blocks/Blocks';
import Tools from '../Tools/Tools';


export default class App extends Component {
    render() {

        return (
            <div className="app">
                <Map/>
                <Tools/>
                <Blocks/>
            </div>
        );
    }
}
