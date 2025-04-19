import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback, useState } from 'react';
import TwitterEmbed from './TwitterEmbed';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';


const MediaCarousel = ({ mediaItems }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Auto-play every 4s
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [emblaApi]);

// Arrows update
const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const stop = autoplay();
    return stop;
  }, [autoplay]);

  return (
    <div className="overflow-hidden rounded-xl" ref={emblaRef}>
      <div className="flex">
        {mediaItems.map((item, index) => (
          <div
            className="min-w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 aspect-video p-4"
            key={index}
          >
            {item.type === 'image' ? (
              <img
              src={item.src}
              alt={item.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            ) : item.type === 'tweet' ? (
              <div className="w-full overflow-auto">
                <TwitterEmbed tweetId={item.tweetId} />
              </div>
            ) : null}
          </div>
        ))}
      </div>

       {/* Arrows – now scoped to the right-side container */}
       <button
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-white"
        disabled={!canScrollPrev}
      >
        <IoChevronBack size={24} />
      </button>
      <button
        onClick={() => emblaApi && emblaApi.scrollNext()}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-white"
        disabled={!canScrollNext}
      >
        <IoChevronForward size={24} />
      </button>
    </div>
    
  );
};

export default MediaCarousel;
