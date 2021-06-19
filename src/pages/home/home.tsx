import React from 'react';

type HomeProps = {
    counter: number,
    addValue: () => void,
    test1?: string
}

const Home = ({counter, addValue}: HomeProps) => {
    
    React.useEffect(() => {
        addValue();
    }, [])

    return (
        <div onClick={addValue}>{counter}</div>
    )
}

Home.defaultProps = {
    counter: 0,
    addValue: () => {},
    test1: 'testset'
}

export default Home;