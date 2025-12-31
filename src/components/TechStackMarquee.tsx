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
    <div className="w-full py-12 border-t border-border/50">
      <SwiperBase options={MARQUEE_SWIPER_OPTIONS} className="tech-marquee">
        {TECH_STACK.map((tech, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <div className="flex items-center justify-center transition-all duration-300 px-4 md:px-8">
              <div className="relative w-10 h-10">
                <IconBase name={tech} className="w-full h-full" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperBase>
    </div>
  )
}
