// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import TestimonialCard from './testimonial-card';
import '@splidejs/react-splide/css';

const Swiper = () => {
  return (
    <>
      <Splide
        aria-label='My Favorite Images'
        options={{
          type: 'loop',
          autoplay: true,
        }}
      >
        {[...Array(5)].map((key) => (
          <SplideSlide
            key={key}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <TestimonialCard key={key} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Swiper;
