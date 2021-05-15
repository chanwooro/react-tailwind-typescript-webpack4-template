
import home from './home';
import { connect } from 'react-redux'
import { addValue } from './action';
import { Dispatch } from 'redux';

type ComponentProp ={
    home: number
}

const mapStateToProps = (state: ComponentProp) => ({
    test: state.home
})
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
    addValue: () => dispatch(addValue())
})
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(home);