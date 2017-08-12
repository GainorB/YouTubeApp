import React from 'react';
import VideoListItem from './VideoListItem';

// when using a functional component the props we pass down is passed as a parameter
const VideoList = (props) => {

    // map through our videos passed from parent
    const VideoItems = props.videos.map(video => {
        return (
        <VideoListItem
            onVideoSelect={props.onVideoSelect} 
            video={video} 
            key={video.etag} /> 
        );
    });

    return (
        <ul className="col-md-4 list-group">
        {VideoItems}
        </ul>
    );
};

export default VideoList;