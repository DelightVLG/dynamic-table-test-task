import React from 'react';
import './VideoFrame.sass';

export const VideoFrame: React.FC = () => {
    return (
        <iframe className="video-frame"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0;&autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
    )
}
