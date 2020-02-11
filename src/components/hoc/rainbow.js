import React from 'react';

const Rainbow = (WrappedComponent) => {

    let colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'],
        randomColor = colors[Math.floor(Math.random() * 5)],
        className = randomColor + '-text';


        return (props) => { // if the wrapped compoenent recieved any props, it will be available to use here
            return (
                <div className={className}>
                        <WrappedComponent {...props}/>
                </div>
            );
        };

};

export default Rainbow;