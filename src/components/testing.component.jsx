import React from 'react';

const BandcampPlayer = () => {
  return (
    <div>
      <iframe
        style={{ border: 0, width: '30%', height: 42 }}
        src="https://bandcamp.com/EmbeddedPlayer/album=3922198912/size=small/bgcol=ffffff/linkcol=333333/transparent=true/"
        seamless
      >
        <a href="https://april-rain.bandcamp.com/album/leave-me-no-light">
          Leave Me No Light by April Rain
        </a>
      </iframe>
    </div>
  );
};

export default BandcampPlayer;