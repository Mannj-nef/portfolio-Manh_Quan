import Image from 'next/image'

interface IconProps {
  name: string
  className?: string
}

export const IconNames = {
  'nuxt 3': 'green-nuxt',
  'tailwind css': 'tailwind',
  'next.js': 'nextjs',
  'react hook form': 'reactHookForm',
  'react router': 'reactrouter',
  'react query': 'reactQuery',
  'ant design': 'antd',
  'vue.js': 'vue',
  swiper: 'swiper',
  tinymce: 'tinymce',
  typeorm: 'typeorm',
  jwt: 'jwt',
  redis: 'redis',
  postgresql: 'postgresql',
  nestjs: 'nestjs',
  zustand: 'zustand',
  react: 'react',
  scss: 'scss',
  pinia: 'pinia',
  typescript: 'typescript',
  veevalidate: 'veevalidate',
  vuetify: 'vuetify',
}

const IconBase = ({ name, className = '' }: IconProps) => {
  const iconName = IconNames[name as keyof typeof IconNames]
  if (!iconName) return null

  return (
    <Image
      src={`assets/icons/icon-${iconName}.svg`}
      alt={name}
      className={`w-5 h-5 ${className}`}
      width={20}
      height={20}
    />
  )
}

export default IconBase
