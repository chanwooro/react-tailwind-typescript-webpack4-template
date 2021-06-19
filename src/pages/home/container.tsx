
import home from './home';
import { connect } from 'react-redux'
import { addValue } from '@actions/home.actions';
import { IApplicationState } from "@reducers/index";
import { Dispatch } from 'redux';

const mapStateToProps = (state: IApplicationState) => ({
    counter: state.Home.counter
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addValue: () => dispatch(addValue())
})

export default connect(mapStateToProps, mapDispatchToProps)(home);