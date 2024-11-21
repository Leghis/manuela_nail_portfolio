'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = ['About', 'Experience', 'Skills', 'Gallery', 'Contact']

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        contactSection?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
    }

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100"
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative z-50"
                    >
                        <Link href="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                Manuela Doloresse
              </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ y: -2 }}
                                className="relative group"
                            >
                                <Link
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-600 hover:text-pink-400 transition-colors"
                                >
                                    {item}
                                </Link>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all group-hover:w-full" />
                            </motion.div>
                        ))}
                        <Button
                            onClick={scrollToContact}
                            className="bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:opacity-90"
                        >
                            Book Appointment
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-50"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-pink-400" />
                        ) : (
                            <Menu className="w-6 h-6 text-pink-400" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-pink-100 md:hidden"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <nav className="flex flex-col space-y-4">
                                {menuItems.map((item) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        whileHover={{ x: 10 }}
                                        className="text-gray-600 hover:text-pink-400 transition-colors"
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                                <Button
                                    onClick={scrollToContact}
                                    className="bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:opacity-90"
                                >
                                    Book Appointment
                                </Button>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}