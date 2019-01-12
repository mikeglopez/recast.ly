import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      videoToPlay: ''
    };
  }

  onVideoListEntryClick() {
    this.setState({
      done: !this.state.done,
      function() {console.log('test');}
    });

  }

  // on line 32, video should be set to this.state.videoToPlay
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.videoToPlay} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={exampleVideoData} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
