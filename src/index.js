// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';

ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById("app"));

// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));
// ReactDOM.render(<App />, document.getElementById('app'));