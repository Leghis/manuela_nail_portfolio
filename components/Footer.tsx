'use client'

import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                            Manuela Doloresse
                        </h3>
                        <p className="text-gray-600">
                            Professional Nail Technician
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"/>
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}