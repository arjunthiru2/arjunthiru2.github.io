import { useEffect, useRef } from 'react';

const TwitterEmbed = ({ tweetId }) => {
  const ref = useRef();

  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load(ref.current);
    } else {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div ref={ref}>
      <blockquote className="twitter-tweet" data-media-max-width="560">
        <a href={`https://twitter.com/arjuntgp/status/${tweetId}`}></a>
      </blockquote>
    </div>
  );
};

export default TwitterEmbed;
