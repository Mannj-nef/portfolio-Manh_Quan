import { clsx } from 'clsx'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const SWIPER_MODULES = [Navigation, Pagination, Autoplay, FreeMode]

export const DEFAULT_SWIPER_OPTIONS: SwiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: false,
  speed: 600,
  grabCursor: true,
  pagination: {},
  navigation: false,
  autoplay: false,
}

interface SwiperBaseProps {
  options: SwiperOptions
  children: React.ReactNode
  className?: string
}

const SwiperBase = ({ options, children, className }: SwiperBaseProps) => {
  return (
    <Swiper
      modules={SWIPER_MODULES}
      {...DEFAULT_SWIPER_OPTIONS}
      {...options}
      className={clsx('', className)}
    >
      {children}
    </Swiper>
  )
}
export default SwiperBase
