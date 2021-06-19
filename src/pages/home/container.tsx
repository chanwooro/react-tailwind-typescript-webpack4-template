
import home from './home';
import { connect } from 'react-redux'
import { addValue } from '@actions/home.actions';
import { IApplicationState } from "@reducers/index";
import { Dispatch } from 'redux';
import {IMapStateToProps, IMapDispatchToProps, IParentProps} from './home.d';

const mapStateToProps = (state: IApplicationState): IMapStateToProps => ({
    counter: state.Home.counter
})

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => ({
    addValue: () => dispatch(addValue())
})

export default connect(mapStateToProps, mapDispatchToProps)(home);