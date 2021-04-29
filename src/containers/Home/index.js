import React, { useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const Home = () => {
  const [link, setLink] = useState('');
  const [subtitles, setSubtitles] = useState({});
  const [displayLink, setDisplayLink] = useState(false);

  const openLink = async () => {
    console.log(link);
    console.log('id: ', getVideoId(link));
    getSubtitles(getVideoId(link));
    setDisplayLink(true);
  };

  const getVideoId = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : '';
  };

  const getEmbedLink = (url) => {
    return url.replace('watch?v=', 'embed/');
  };

  const getSubtitles = async (id) => {
    const json = await loadYouTubeSubtitles(getYouTubeVideoId() || id);
    const csv = jsonToCsv(json, {
      includeHeader: false,
      ignoreKeys: ['dur'],
      delimiter: '\t',
    });

    console.log(csv);
  };

  const parseTranscript = ({ events }) => {
    return events.map(({ tStartMs, dDurationMs, segs: [{ utf8 }] }) => ({
      start: formatTime(tStartMs),
      dur: formatTime(dDurationMs),
      text: utf8,
    }));
  };

  const formatTime = (seconds) => {
    let date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  };

  const getYouTubeVideoId = () => {
    var video_id = window.location.search.split('v=')[1];
    if (video_id != null) {
      var ampersandPosition = video_id.indexOf('&');
      if (ampersandPosition != -1) {
        return video_id.substring(0, ampersandPosition);
      }
    }
    return null;
  };

  const loadYouTubeSubtitles = async (videoId, options) => {
    options = Object.assign(
      {
        baseUrl: 'https://video.google.com/timedtext',
        languageId: 'en',
      },
      options || {}
    );

    const requestUrl = `${options.baseUrl}?lang=${options.languageId}&v=${videoId}&fmt=json3`;
    const response = await fetch(requestUrl);
    const json = await response.json();

    return parseTranscript(json);
  };

  const jsonToCsv = (json, options) => {
    options = Object.assign(
      {
        includeHeader: true,
        delimiter: ',',
        ignoreKeys: [],
      },
      options || {}
    );
    let keys = Object.keys(json[0]).filter(
      (key) => options.ignoreKeys.indexOf(key) === -1
    );
    let lines = [];
    if (options.includeHeader) {
      lines.push(keys.join(options.delimiter));
    }
    return lines
      .concat(
        json.map((entry) =>
          keys.map((key) => entry[key]).join(options.delimiter)
        )
      )
      .join('\n');
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
