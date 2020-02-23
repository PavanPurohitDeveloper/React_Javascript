import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

//Functional component
const Home = () => {
    return (
        <div>
            <Header />
            <header></header>
            <h1>This is React App Training</h1>
            <h2>This is about our class</h2>
            <p>lorem ipsum is simply dummy text of the printng and typesetting industry.lorem ipsum is simply dummy text of the printng and typesetting industry.lorem ipsum is simply dummy text of the printng and typesetting industry.lorem ipsum is simply dummy text of the printng and typesetting industry.lorem ipsum is simply dummy text of the printng and typesetting industry.lorem ipsum is simply dummy text of the printng and typesetting industry.lorem ipsum is simply dummy text of the printng and typesetting industry.lorem ipsum is simply dummy text of the printng and typesetting industry.</p>
        </div>
    )
}

ReactDOM.render(
    <Home />, document.getElementById('root')
);