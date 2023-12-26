import React from 'react';
import TitleContainer from './TitleContainer';

function Video({videoData}){

    const renderVideo = (
        <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    );
    return (
        <div>
            {renderVideo}
            <TitleContainer videoData={videoData}/>
        </div>
    );
}

export default Video;