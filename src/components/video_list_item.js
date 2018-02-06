import React from 'react';

import VideoDetail from './video_detail';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li style={{cursor: 'pointer'}} onClick={() => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={ imageUrl} className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;