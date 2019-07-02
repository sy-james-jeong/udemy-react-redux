// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

// Create a react component
const App = () => {
    const buttonText = ['Hi',123];
    // const buttonTest = {text: 'click test'}; // objs are not valid as a react child
    const style = {backgroundColor: 'blue', color: 'white', border: 'none'};
    const label = 'Enter name: ';


    return (
        <div>
            <label className="label" htmlFor="name">
                {label}     
            </label>
            <input id="name" type="text" />
            {/* <button style="background-color: blue; color: white;">Submit</button> */}
            
            {/* <button style={{ backgroundColor: 'blue', color: 'white', border: 'none'}}> */}
            <button style={style}>
                {getButtonText()}
                {<br/>}
                {buttonText}
                {/* {buttonTest} */}
            </button>
        </div>
    );
}

// Take the react componet and show it on the screen
ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);