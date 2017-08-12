# YouTubeApp

A simple video application with a very clean interface where users can search for videos and instantly see five playable youtube videos.

### TECH STACK
1. React.js

### MISC TECH
1. Babel
2. Webpack
3. Youtube API
4. lodash (module)
5. youtube-api-search (module)
6. dotenv-webpack (module) **VERY COOL module that adds .env support to React Apps!

### WHAT I LEARNED
1. More practice with ES6 destructuring: props can be destructed in functional components parameters'. Below, these two examples are identical:

```javascript
// functional component
const VideoListItem = ({ video, onVideoSelect }) => { 
    // now we can use video or onVideoSelect directly and pull out properties
}
```

```javascript
// functional component
const VideoListItem = (props) => {

    // declared two variables to pull out properties
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;
}
```

2. **Controlled Components:** input fields become controlled when the value is set to that components current state. With this method, you can give input fields default values that are initialized in state. We tell the input field to retreive the value from state, and its only changed when the state changes. **The cycle:** When a user types, they didn't change the input value, they trigger an event that changes state then the input is updated from the current state.
3. ReactDOM is used to interact with the DOM and React is used to create and manage components.
4. To make an instance of an component we use this syntax: <ComponentName />
5. Functional components are only used to take in information and return JSX.
6. When state changes it re-renders the DOM and forces its components to re-render.

### CODE SAMPLE
Using the lodash library, I used a method named **_.debounce** that takes the inner function and returns a new function that will be called once every x milliseconds. In this example, videoSearch will be called once every 300 milliseconds with a new search term, which emulates Google's instant search feature.

```javascript
import _ from 'lodash';
const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
```