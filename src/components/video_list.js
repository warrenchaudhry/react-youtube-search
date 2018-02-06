import React, { Component } from 'react';

import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props){
    super(props);
  }
  render() {

    const video_items = this.props.videos.map((video) => {
      return <VideoListItem
              onVideoSelect={this.props.onVideoSelect}
              video={video}
              key={video.etag}
             />
    });

    return (
      <ul className="col-md-4 list-group">
        {video_items}
      </ul> 
    )
  }
}

export default VideoList;