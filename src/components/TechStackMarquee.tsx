'use client'

import SwiperBase from './SwiperBase'
import { SwiperSlide } from 'swiper/react'
import { MARQUEE_SWIPER_OPTIONS } from '~/constants/swiper'
import IconBase from '~/components/IconBase'

const TECH_STACK = [
  'react',
  'react hook form',
  'react router',
  'react query',
  'zustand',
  'next.js',
  'javaScript',
  'typescript',
  'vue.js',
  'nuxt 3',
  'pinia',
  'tailwind css',
  'scss',
  'styledcomponents',
  'swiper',
  'nestjs',
  'postgresql',
  'mongodb',
  'typeorm',
  'redis',
  'figma',
  'aws',
]

export function TechStackMarquee() {
  return (
    <div className="w-full py-8 border-t border-border/50">
      <SwiperBase options={MARQUEE_SWIPER_OPTIONS} className="">
        {TECH_STACK.map((tech, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }} className="p-3">
            <div className="flex items-center justify-center transition-all duration-300 p-3 hover:scale-120">
              <div className=" w-8 h-8">
                <IconBase name={tech} className="w-full h-full" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperBase>
    </div>
  )
}
