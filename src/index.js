// JS modules
import React from 'react';
// we use ReactDOM to interact with the browser
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

// youtube api
const API_KEY = process.env.YOUTUBE_API_KEY;

// React is a JS library
// We are writing individual components/views
// We nest components to make complex applications
// A Component are JS functions that produce HTML

// Create a new component
// This component should produce HTML

// const is an ES6 (2016) syntax
// const "variables" don't change, its called a "constant"
// JSX looks like HTML but behind the scenes its JS
// JSX can't be interpreted by the browser
// We use JSX because it produces the HTML that gets rendered on the page
// JSX makes our components cleaner and more legible
// Webpack/babel (translates) transpiles it to JS
// JSX gets compiled to vanila JS
// the value of "this" changes with fat arrow vs. using "function" keyword when defining a function
const App = () => {
    return (
        <div>
            <SearchBar />
        </div> 
    );
}

// We have to specifically tell React to take this component's HTML and insert it into the DOM
// ReactDOM is used to interact with the DOM
// React is used to create and manage components
// make an instance of component before rendering to the DOM
// to make an instance of a component: <App />
// need to tell React where on the page to render this component
ReactDOM.render(<App />, document.querySelector('.container'));