'use client';

import SwiperSlider from './swiper';

const Testimonial = () => {
  return (
    <section className='flex flex-col justify-center gap-10'>
      <div className='flex justify-center '>
        <b>
          <span className='tracking-[-0.5px] text-6xl leading-[70px] inline-block'>
            Testimonials
          </span>
        </b>
      </div>
      <SwiperSlider />
    </section>
  );
};

export default Testimonial;
