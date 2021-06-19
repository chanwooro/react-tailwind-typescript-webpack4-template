import React from 'react';
import {IHomeProps} from './home.d';

const Home = ({counter, addValue, nullableProp, parentString}: IHomeProps) => {

    React.useEffect(() => {
        addValue();
    }, [])

    return (
        <div onClick={addValue}>
            {counter}
            <div>
                {nullableProp}
            </div>
            <div>
                {parentString}
            </div>
        </div>
    )
}

Home.defaultProps = {
    counter: 0,
    addValue: () => {},
    nullableProp: 'Nullable prop string'
}

export default Home;