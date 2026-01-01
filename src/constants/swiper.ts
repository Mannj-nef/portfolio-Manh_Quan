import { SwiperOptions } from 'swiper/types'

export const TECH_SWIPER_OPTIONS: SwiperOptions = {
  spaceBetween: 10,
  slidesPerView: 'auto',
  pagination: false,
  navigation: false,
}

export const MARQUEE_SWIPER_OPTIONS: SwiperOptions = {
  spaceBetween: 10,
  slidesPerView: 'auto',
  loop: true,
  speed: 2000,
  effect: 'slide',
  grabCursor: false,
  pagination: false,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
}
