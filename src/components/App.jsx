import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: [],
      videoToPlay: {
        id: {},
        snippet: {}
      },
      value: ''
    };
  }

  // invoked immediately after App is mounted onto DOM
  componentDidMount() {
    var cb = this.assignState.bind(this);
    // render initial list of videos
    this.props.searchYouTube({
      query: 'react tutorials',
      max: 5,
      key: YOUTUBE_API_KEY
    }, cb);
  }

  // assigns state
  assignState(list) {
    this.setState({
      videoList: list,
      videoToPlay: list[0]
    });
  }

  onVideoListEntryClick(video) {
    this.setState({
      videoToPlay: video
    });
  }

  onSearchType(event) {
    this.setState({
      value: event.target.value
    });
    var options = {
      query: this.state.value,
      max: 5,
      key: YOUTUBE_API_KEY
    };
    this.props.searchYouTube(options, function (item) { console.log('item', item); });
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search value={this.state.value} onSearchType={this.onSearchType.bind(this)} /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.videoToPlay} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={this.state.videoList} onVideoListEntryClick={this.onVideoListEntryClick.bind(this)} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
