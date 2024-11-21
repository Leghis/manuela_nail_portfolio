'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import {
    Gem,
    Award,
    Users,
    Sparkles,
    Palette,
    Brush,
    Crown,
    Heart
} from 'lucide-react'

const statsData = [
    {
        icon: Award,
        value: "6",
        label: "Years Experience",
        color: "from-pink-400 to-purple-400"
    },
    {
        icon: Users,
        value: "200+",
        label: "Happy Clients",
        color: "from-purple-400 to-pink-400"
    }
]

const specialties = [
    {
        icon: Gem,
        title: "Gel Extensions",
        description: "Premium quality extensions for elegant looks"
    },
    {
        icon: Sparkles,
        title: "3D Nail Art",
        description: "Unique dimensional designs and patterns"
    },
    {
        icon: Crown,
        title: "Acrylic Applications",
        description: "Luxurious Acrylic embellishments"
    },
    {
        icon: Palette,
        title: "Chrome Finish",
        description: "Mirror-like shine and metallic effects"
    },
    {
        icon: Brush,
        title: "Polygel Extensions",
        description: "Durable and lightweight extensions"
    },
    {
        icon: Heart,
        title: "French Manicure",
        description: "Classic and timeless nail designs"
    }
]

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-white to-pink-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"/>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <Card className="p-8 bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-lg transition-shadow">
                                <p className="text-lg leading-relaxed text-gray-700">
                                    As a dedicated and creative Nail Technician with over 6 years of experience,
                                    I've mastered the art of creating stunning nail designs that reflect each client's unique personality.
                                    My passion for nail artistry combines with technical expertise to deliver exceptional results
                                    that exceed expectations.
                                </p>
                            </Card>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-6"
                        >
                            {statsData.map((stat, index) => (
                                <Card
                                    key={index}
                                    className="p-6 bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-lg transition-all transform hover:-translate-y-1"
                                >
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                                            <stat.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                                        <p className="text-gray-600">{stat.label}</p>
                                    </div>
                                </Card>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {specialties.map((specialty, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                            >
                                <Card className="p-6 bg-white/80 backdrop-blur-sm border-pink-100 h-full hover:shadow-lg transition-all transform hover:-translate-y-1">
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center">
                                            <specialty.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800">{specialty.title}</h4>
                                        <p className="text-gray-600 text-sm">{specialty.description}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Card className="inline-block p-6 bg-gradient-to-r from-pink-400 to-purple-400">
                        <p className="text-white text-lg font-medium">
                            "Beauty begins the moment you decide to be yourself"
                        </p>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}