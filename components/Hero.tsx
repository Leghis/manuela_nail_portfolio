'use client'

import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { useEffect } from 'react'

export default function Hero() {
    const controls = useAnimationControls()

    // Animation continue pour le bouton scroll
    useEffect(() => {
        controls.start({
            y: [0, 10, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        })
    }, [controls])

    const scrollToGallery = () => {
        const gallerySection = document.getElementById('gallery')
        gallerySection?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="pt-32 pb-16 min-h-screen flex items-center relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-white animate-gradient-xy" />

            <div className="container mx-auto px-4 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.h2
                                className="text-2xl text-gray-600 font-light"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Welcome to my world of
                            </motion.h2>
                            <motion.h1
                                className="text-6xl font-bold"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                <span className="inline-block animate-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-[200%_auto] bg-clip-text text-transparent">
                  Professional
                </span>
                                <br />
                                <span className="inline-block animate-text-delayed bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[200%_auto] bg-clip-text text-transparent">
                  Nail Artistry
                </span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-xl text-gray-600 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Creating beautiful, unique nail designs with over 6 years of experience in the industry.
                        </motion.p>

                        <motion.button
                            onClick={scrollToGallery}
                            animate={controls}
                            className="group flex items-center space-x-2 bg-transparent hover:bg-pink-50 px-6 py-3 rounded-full transition-colors"
                        >
              <span className="text-gray-600 group-hover:text-pink-500 transition-colors">
                View My Work
              </span>
                            <ChevronDown className="w-5 h-5 text-pink-400 group-hover:text-pink-500 transition-colors" />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            type: "spring",
                            stiffness: 100
                        }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 animate-spin-slow" />
                            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white">
                                <Image
                                    src="/placeholder-profile.JPG"
                                    alt="Manuela Doloresse"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}