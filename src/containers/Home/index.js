import React, { useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const Home = () => {
  const [link, setLink] = useState('');
  const [displayLink, setDisplayLink] = useState(false);

  const openLink = () => {
    console.log(link);
    setDisplayLink(true);
  };

  const getEmbedLink = (url) => {
    return url.replace('watch?v=', 'embed/');
  };

  return (
    <div className="flex flex-col items-center mx-8 mt-8">
      <div className="text-4xl font-bold text-secondary-500">YT Lang</div>
      <div className="w-full max-w-xl">
        <div className="flex flex-row justify-center w-full mt-5 md:justify-start">
          <input
            className="w-full h-auto pl-4 pr-3 mr-3 bg-white border border-gray-100 outline-none rounded-st text-primary-500 placeholder-primary-100 focus:border-primary-400"
            placeholder="https://www.youtube.com/watch?v=o6B7SRRSRCM"
            type="text"
            onChange={(e) => setLink(e.target.value)}
            value={link}
          />
          <PrimaryButton text="Open" onClick={() => openLink()} />
        </div>
      </div>
      {displayLink ? (
        <div className="mt-8">
          <iframe
            width="853"
            height="480"
            src={getEmbedLink(link)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
