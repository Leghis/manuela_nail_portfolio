'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
    Mail,
    Phone,
    MapPin,
} from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text mb-4">
                        Get in Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"/>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <Card className="p-6">
                            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Email</p>
                                        <a href="mailto:manuelanjikam@gmail.com" className="text-pink-400 hover:text-pink-500">
                                            manuelanjikam@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Phone</p>
                                        <a href="tel:+16132030130" className="text-pink-400 hover:text-pink-500">
                                            +1 (613) 203-0130
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Address</p>
                                        <p className="text-gray-800">689 Churchill Ave N, Ottawa, ON K1Z 5G4</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6">
                            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Me a Message</h3>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-gray-600 mb-2 block">Name</label>
                                        <Input placeholder="Your name" className="border-pink-200 focus:border-pink-400" />
                                    </div>
                                    <div>
                                        <label className="text-gray-600 mb-2 block">Email</label>
                                        <Input placeholder="Your email" className="border-pink-200 focus:border-pink-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-gray-600 mb-2 block">Subject</label>
                                    <Input placeholder="Message subject" className="border-pink-200 focus:border-pink-400" />
                                </div>

                                <div>
                                    <label className="text-gray-600 mb-2 block">Message</label>
                                    <Textarea
                                        placeholder="Your message"
                                        className="min-h-[150px] border-pink-200 focus:border-pink-400"
                                    />
                                </div>

                                <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:opacity-90">
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}