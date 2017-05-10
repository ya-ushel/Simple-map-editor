import React, {Component} from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as blocksActions from '../../actions/blocksActions';
import * as toolsActions from '../../actions/toolsActions';

class LeftNavButton extends Component {
    render() {
        return <div onClick={this.props.onClick} className="prevArrow">
            <div/>
        </div>
    }
}
class RightNavButton extends Component {
    render() {
        return <div onClick={this.props.onClick} className="nextArrow">
            <div src="/img/nextArrow.png"/>
        </div>
    }
}

class Blocks extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let {initBlocks} = this.props.blocksActions;
        let arrayBlocks = {};
        let {...mapping} = this.props.map.mapping;
        for (let key in mapping) {
            arrayBlocks[key] = mapping[key];
        }
        initBlocks(arrayBlocks);
    }

    onSelectBlock(num) {
        this.props.blocksActions.setSelectedBlock(num);
        let newArray = this.props.map.source;
        this.props.map.selectedItem.map((item) => {
            newArray[item.x][item.y] = num;
        });
    }

    onWheel(e = window.event) {
        this.setState({eventType: e.type});
        if (e.deltaY > 0)
            this.slider.slickNext();
        else
            this.slider.slickPrev();
    }

    render() {
        let settings = {
            draggable: false,
            initialSlide: 0,
            infinite: false,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 3,
            className: 'blocksCarousel',
            prevArrow: <LeftNavButton/>,
            nextArrow: <RightNavButton/>,
            variableWidth: true,
        };
        let sliderContent = [];
        let {...blocks} = this.props.blocks.blocks;
        let {...mapping} = this.props.map.mapping;
        for (let item in blocks) {
            let temp = mapping[item];
            if (this.props.blocks.selectedBlock === item)
                temp += ' selected';
            temp += ' block';
            sliderContent.push(
                <div
                    className={temp}
                    key={item}
                    onClick={this.onSelectBlock.bind(this, item)}
                />);
        }


        if (!sliderContent.length) {
            sliderContent = (<div className="block">Loading...</div>);
        }

        return (
            <div className="blocksContainer">
                <div className="blocks"
                     // onWheel={this.onWheel.bind(this, event)}
                >
                    <Slider ref={c => this.slider = c } {...settings}>
                        {sliderContent}
                    </Slider>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        blocks: state.blocksReducer,
        map: state.mapReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        blocksActions: bindActionCreators(blocksActions, dispatch),
        toolsActions: bindActionCreators(toolsActions, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Blocks);