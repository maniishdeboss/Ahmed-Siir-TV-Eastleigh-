import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ streamUrl }) => {
  return (
    <div className="player-wrapper" style={{ width: '100%' }}>
      {/* Waxaan u beddelay magaca file-ka logo.png si uusan khalad u dhicin */}
      <img 
        src="/logo.png" 
        alt="Ahmed Live TV" 
        style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }} 
      />

      <div className="player-container" style={{ 
        width: '100%', 
        height: '400px', 
        backgroundColor: '#000',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <ReactPlayer
          url={streamUrl}
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          config={{
            file: {
              hlsOptions: {
                xhrSetup: (xhr) => {
                  xhr.withCredentials = false;
                },
              },
            },
          }}
          light={false} 
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
