// need to always import react in components that use jsx
import React, { Component } from 'react';

// functional component
// only used when taking in information and spitting out jsx
// const SearchBar = () => {
//     return (
//         <input />
//     );
// };

// class component
// used when you want a component to be aware of itself or "record keeping"
// a class is a plain JS object
// start with functional component, then if you need added functionality make it a class component

// an event handler is a function that is ran when an event occurs
// we pass the event handler to the element we want to monitor
// all html elements emit a change event "onChange"
// whenever we represent a JS variable in JSX we wrap it in {}
// Controlled Field(input): value is set by the state
    // our input changing tells the state to change
    // value = {this.state.}
        // by using value, we turn the input into a Controlled Component by telling it to retreive value from state
            // value is only changed when the state changes
            // when a user types, they didnt change the input value, they trigger an event that changes state then the input is updated from the current state

class SearchBar extends Component {
    // state is a JS object used to record user events
    // each class based component has its own state component
    // whenever it changes it re renders and forces its components to re render
    // this is how we define state in class based components
    // reserved for doing set up, initilizing variables and setting up state
    constructor(props) {
        // we call the parent (Component) by using super
        super(props);

        // this is how we initialize state
        this.state = {
            term: ''
        };
    }

    // every react class must have a render method that returns jsx
    render(){
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={e => this.onInputChange(e.target.value)}
                    />
            </div>
        );
    }

    // all browser events that get triggered by an event handler they pass an event object
    // describes the context in which the event occured
    // defined as a method on the class
    onInputChange = (term) => {
        // this is how we manipulate state
        // causes our component to automatically re render and pushes it to the DOM
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;