import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
  autoPlayDirection?: 'ltr' | 'rtl';
}
/////해삐
const Carousel: React.FC<CarouselProps> = ({ images, autoPlayInterval = 2000, autoPlayDirection = 'ltr' }) => {
  const items = images.map((src, idx) => (
    <div key={src} className="flex justify-center items-center w-full h-full mx-0">
      <img
        src={src}
        alt={`carousel${idx + 1}`}
        className="rounded-xl object-cover"
        style={{ width: '120px', height: '120px', aspectRatio: '1 / 1' }}
        draggable={false}
      />
    </div>
  ));

  // 5개씩 보이도록 반응형 옵션
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    900: { items: 3 },
    1200: { items: 9 },
  };

  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={autoPlayInterval}
      infinite
      disableButtonsControls
      disableDotsControls={true}
      mouseTracking
      items={items}
      responsive={responsive}
      animationDuration={1200}
      animationType="slide"
      stagePadding={{ left: 0, right: 0 }}
      autoPlayDirection={autoPlayDirection}
    />
  );
};

export default Carousel; 