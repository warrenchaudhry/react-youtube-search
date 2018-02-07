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
    this.videosSearch('surfboards')
  }
  render() {
    return (<div>
      <p>Search Here</p>
      <SearchBar onSearchTermChange={term => this.videosSearch(term)}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={ (selectedVideo) => this.setState({selectedVideo}) }
        videos={this.state.videos}
      />
    </div>);
  }

  videosSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState( { videos: videos, selectedVideo: videos[0] } );
    })
  }

}

ReactDOM.render(<App/>, document.getElementById("root"));