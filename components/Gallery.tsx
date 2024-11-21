// src/components/Gallery.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

// Ces images seront à remplacer par vos vraies images
const galleryImages = [
    { id: 1, src: '/placeholder-1.jpeg', title: '', category: '' },
    { id: 2, src: '/placeholder-2.jpeg', title: '', category: '' },
    { id: 3, src: '/placeholder-3.jpeg', title: '', category: '' },
    { id: 4, src: '/placeholder-4.jpeg', title: '', category: '' },
    { id: 5, src: '/placeholder-5.jpeg', title: '', category: '' },
    { id: 6, src: '/placeholder-6.jpeg', title: '', category: '' },
    { id: 7, src: '/placeholder-7.jpeg', title: '', category: '' },
    { id: 8, src: '/placeholder-8.jpeg', title: '', category: '' },
    { id: 9, src: '/placeholder-9.jpeg', title: '', category: '' },
    { id: 10, src: '/placeholder-10.jpeg', title: '', category: '' },
    { id: 11, src: '/placeholder-11.jpeg', title: '', category: '' },
    { id: 12, src: '/placeholder-12.jpeg', title: '', category: '' },
    { id: 13, src: '/placeholder-13.jpeg', title: '', category: '' },
]

const categories = ['All']

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory)

    const handlePrevious = () => {
        if (selectedImage === null) return
        const newIndex = selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1
        setSelectedImage(newIndex)
    }

    const handleNext = () => {
        if (selectedImage === null) return
        const newIndex = selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0
        setSelectedImage(newIndex)
    }

    return (
        <section id="gallery" className="py-20 bg-gradient-to-b from-pink-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text mb-4">
                        My Work Gallery
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"/>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full transition-all ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white'
                                        : 'bg-white text-gray-600 hover:bg-pink-50'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Dialog onOpenChange={() => setSelectedImage(index)}>
                                <DialogTrigger asChild>
                                    <Card className="overflow-hidden cursor-pointer group">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="aspect-square relative"
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.title}
                                                fill
                                                className="object-cover transition-transform group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                                                    <p className="text-pink-200">{image.category}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Card>
                                </DialogTrigger>
                            </Dialog>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Lightbox Dialog */}
                {selectedImage !== null && (
                    <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
                        <DialogContent className="max-w-5xl bg-black/95 border-none">
                            <div className="relative aspect-square">
                                <Image
                                    src={galleryImages[selectedImage].src}
                                    alt={galleryImages[selectedImage].title}
                                    fill
                                    className="object-contain"
                                />
                                <button
                                    onClick={handlePrevious}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <ChevronLeft className="w-6 h-6 text-white" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <ChevronRight className="w-6 h-6 text-white" />
                                </button>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>
                            <div className="text-center text-white p-4">
                                <h3 className="text-xl font-semibold">{galleryImages[selectedImage].title}</h3>
                                <p className="text-pink-300">{galleryImages[selectedImage].category}</p>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </section>
    )
}