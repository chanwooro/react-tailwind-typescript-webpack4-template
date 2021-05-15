import React from 'react';

type HomeProps = {
    test: number,
    addValue: () => void
}

const Home = ({test, addValue}: HomeProps) => {
    React.useEffect(() => {
        addValue();
    }, [])
    return (
        <div>{test}</div>
    )
}

export default Home;