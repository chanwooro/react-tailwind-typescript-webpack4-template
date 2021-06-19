import {Home, IHome} from './home.reducers';

//This will be used to setting data type for state from mapStateToProps
export interface IApplicationState {
    Home: IHome
} 

//Collection of reducers
export const reducers = {
    Home
}