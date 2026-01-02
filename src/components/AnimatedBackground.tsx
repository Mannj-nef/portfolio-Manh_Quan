'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <div className="hidden md:block fixed inset-0 -z-10 overflow-hidden bg-background transition-colors duration-1000">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {/* Gradient Orb 1 - Top Left */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
          className={`absolute -top-[20%] -left-[10%] h-[70vh] w-[70vh] rounded-full blur-[100px] opacity-30 
            ${isDark ? 'bg-blue-900/30' : 'bg-emerald-200/50'}`}
        />

        {/* Gradient Orb 2 - Bottom Right */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
          className={`absolute -bottom-[20%] -right-[10%] h-[60vh] w-[60vh] rounded-full blur-[100px] opacity-30
             ${isDark ? 'bg-indigo-900/40' : 'bg-blue-100/80'}`}
        />

        {/* Gradient Orb 3 - Middle Center (Subtle) */}
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
          className={`absolute top-[30%] left-[20%] h-[50vh] w-[50vh] rounded-full blur-[120px] opacity-20
            ${isDark ? 'bg-violet-900/20' : 'bg-indigo-100/40'}`}
        />
      </motion.div>
    </div>
  )
}
