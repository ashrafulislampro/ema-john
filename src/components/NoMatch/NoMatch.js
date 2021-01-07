import React from 'react';

const NoMatch = () => {
    const styles ={
        textAlign: 'center',
        color: 'red',
        marginTop: '200px'
    }
    return (
        <div style={styles}>
            <h1>sorry, page not found</h1>
            <h2>404 error !!</h2>
        </div>
    );
};

export default NoMatch;