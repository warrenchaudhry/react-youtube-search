import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCSExyygU3BnBCxoquqFpdU7t5YDmi6Ct0';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }
  render() {
    return (<div>
      <p>Search Here</p>
      <SearchBar/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={ (selectedVideo) => this.setState({selectedVideo}) }
        videos={this.state.videos}
      />
    </div>);
  }

  componentDidMount(){
    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
      this.setState( { videos: videos, selectedVideo: videos[0] } );
      // console.log(this.state.videos)
    })
  }

}

ReactDOM.render(<App/>, document.getElementById("root"));