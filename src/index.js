// JS modules
import React, { Component } from 'react';
// we use ReactDOM to interact with the browser (DOM)
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// components
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// youtube api
const API_KEY = process.env.YOUTUBE_API_KEY;

// React is a JS library
// We are writing individual components/views
// We nest components to make complex applications
// A Component is a collection of JS functions that produce HTML

// JSX looks like HTML but behind the scenes its JS
// JSX can't be interpreted by the browser
// We use JSX because it produces the HTML that gets rendered on the page
// JSX makes our components cleaner and more legible
// Webpack/babel (translates) transpiles it into JS

// the value of "this" changes with fat arrow functions 
    // vs. using "function" keyword when defining a function
// component re renders everytime state is set

// downwards data flow
    // only the most parent component should be responsible for fetching data

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        // whenever the app boots up it will do a youtube search
        this.videoSearch('kanyewest');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term}, videos => {
            this.setState({ 
                videos,
                selectedVideo: videos[0] 
            });
        });
    }

    // passing data like this <VideoList videos={this.state.videos} /> is called passing props
        // "videos" are a prop
    
    render() {

        // throttle searches
        // using lodash to debounce
        // debounch takes the inner function and returns a new function that can be called once every 300 milliseconds
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}

export default App;

// We have to specifically tell React to take this component's HTML and insert it into the DOM
// ReactDOM is used to interact with the DOM
// React is used to create and manage components
// make an instance of component before rendering to the DOM
// to make an instance of a component: <App />
// need to tell React where on the page to render this component
ReactDOM.render(<App />, document.querySelector('.container'));