import React, {Component} from 'react';
import { connect } from 'react-redux'
import HotelClock from './HotelClock.jsx'
import '../css/App.less'
import {bindActionCreators} from 'redux'
import * as clockActions from '../actions/ClockActions'

class App extends Component{
    render(){
        const { update } = this.props.clockActions;
        update();
        return(
            <div className='App'>
                <HotelClock name="Киев" tz="2" update={update} />
                <HotelClock name="Москва" tz="3" update={update}/>
                <HotelClock name="Токио" tz="9" update={update}/>
                <HotelClock name="Нью-Йорк" tz="-5" update={update}/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        date: state.date
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clockActions: bindActionCreators(clockActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
