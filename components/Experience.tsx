// src/components/Experience.tsx
'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import {
    Briefcase,
    Calendar,
    CheckCircle,
    Award,
    Users,
    Star,
    Shield
} from 'lucide-react'

interface Experience {
    title: string
    company: string
    period: string
    description: string[]
    color: string
    icon: typeof Briefcase
    achievements?: string[]
}

const experiences: Experience[] = [
    {
        title: "Senior Nail Technician",
        company: "Glamour Beauty Studio",
        period: "Jan 2022 - July 2024",
        description: [
            "Manage and execute complex nail art designs",
            "Increased client retention rate by 40%",
            "Train and mentor junior nail technicians",
            "Maintain strict hygiene protocols"
        ],
        achievements: [
            "Created signature nail art collection",
        ],
        color: "from-pink-400 to-purple-400",
        icon: Star
    },
    {
        title: "Lead Nail Artist",
        company: "Divine Nails & Spa",
        period: "Mar 2020 - Dec 2021",
        description: [
            "Provided full range of nail services",
            "Developed new nail art techniques",
            "Managed inventory and supplier relations",
            "Maintained 5-star rating from clients"
        ],
        achievements: [
            "Increased premium service bookings",
            "Created signature nail art collection"
        ],
        color: "from-purple-400 to-pink-400",
        icon: Award
    },
    {
        title: "Nail Technician",
        company: "Elegance Beauty Center",
        period: "Jun 2018 - Feb 2020",
        description: [
            "Performed basic and advanced nail care",
            "Built loyal customer base of 100+ clients",
            "Created social media content",
            "Maintained detailed client records"
        ],
        achievements: [
            "Built client base from scratch",
            "Mastered advanced techniques"
        ],
        color: "from-pink-400 to-purple-400",
        icon: Shield
    }
]

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text mb-4">
                        Professional Journey
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"/>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        My professional path in nail artistry, marked by continuous growth and achievement in creating beautiful nail designs.
                    </p>
                </motion.div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-400 to-purple-400 hidden md:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col md:flex-row items-center justify-center gap-8"
                            >
                                {/* Version mobile */}
                                <div className="block md:hidden w-full">
                                    <Card className="p-6 hover:shadow-lg transition-all duration-300">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            className="space-y-4"
                                        >
                                            <div>
                                                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${exp.color}`}>
                                                    <div className="flex items-center space-x-2 text-white">
                                                        <exp.icon className="w-4 h-4" />
                                                        <span className="font-medium">{exp.company}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                                                <div className="flex items-center space-x-2 text-gray-600">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{exp.period}</span>
                                                </div>
                                            </div>
                                            <ul className="space-y-2">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex items-start space-x-2">
                                                        <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-600">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            {exp.achievements && (
                                                <div className="mt-4 bg-pink-50 rounded-lg p-4">
                                                    <h4 className="font-semibold text-pink-400 mb-2">Key Achievements</h4>
                                                    <ul className="space-y-2">
                                                        {exp.achievements.map((achievement, i) => (
                                                            <li key={i} className="flex items-start space-x-2">
                                                                <Award className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                                <span className="text-gray-600">{achievement}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </motion.div>
                                    </Card>
                                </div>

                                {/* Version desktop */}
                                <div className="hidden md:block md:w-5/12 text-right">
                                    {index % 2 === 0 && (
                                        <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                            <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                className="space-y-4"
                                            >
                                                <div className="flex justify-end">
                                                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${exp.color}`}>
                                                        <div className="flex items-center space-x-2 text-white">
                                                            <span className="font-medium">{exp.company}</span>
                                                            <exp.icon className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                                                    <div className="flex items-center justify-end space-x-2 text-gray-600">
                                                        <span>{exp.period}</span>
                                                        <Calendar className="w-4 h-4" />
                                                    </div>
                                                </div>
                                                <ul className="space-y-2">
                                                    {exp.description.map((item, i) => (
                                                        <li key={i} className="flex items-start justify-end space-x-2">
                                                            <span className="text-gray-600 text-right">{item}</span>
                                                            <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                                                        </li>
                                                    ))}
                                                </ul>
                                                {exp.achievements && (
                                                    <div className="mt-4 bg-pink-50 rounded-lg p-4">
                                                        <h4 className="text-right font-semibold text-pink-400 mb-2">Key Achievements</h4>
                                                        <ul className="space-y-2">
                                                            {exp.achievements.map((achievement, i) => (
                                                                <li key={i} className="flex items-start justify-end space-x-2">
                                                                    <span className="text-gray-600 text-right">{achievement}</span>
                                                                    <Award className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </Card>
                                    )}
                                </div>

                                {/* Timeline dot */}
                                <div className="relative hidden md:block">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center`}
                                    >
                                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`} />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Right side content */}
                                <div className="hidden md:block md:w-5/12">
                                    {(index % 2 === 1 || !exp.company) && (
                                        <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                className="space-y-4"
                                            >
                                                <div>
                                                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${exp.color}`}>
                                                        <div className="flex items-center space-x-2 text-white">
                                                            <exp.icon className="w-4 h-4" />
                                                            <span className="font-medium">{exp.company}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                                                    <div className="flex items-center space-x-2 text-gray-600">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{exp.period}</span>
                                                    </div>
                                                </div>
                                                <ul className="space-y-2">
                                                    {exp.description.map((item, i) => (
                                                        <li key={i} className="flex items-start space-x-2">
                                                            <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                                                            <span className="text-gray-600">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {exp.achievements && (
                                                    <div className="mt-4 bg-pink-50 rounded-lg p-4">
                                                        <h4 className="font-semibold text-pink-400 mb-2">Key Achievements</h4>
                                                        <ul className="space-y-2">
                                                            {exp.achievements.map((achievement, i) => (
                                                                <li key={i} className="flex items-start space-x-2">
                                                                    <Award className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                                                    <span className="text-gray-600">{achievement}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </Card>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Summary Stats */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16"
                    >
                        {[
                            { icon: Users, label: "Happy Clients", value: "200+" },
                            { icon: Star, label: "Years Experience", value: "6" },
                            { icon: Shield, label: "Techniques", value: "8+" }
                        ].map((stat, index) => (
                            <Card
                                key={index}
                                className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="font-semibold text-gray-800">{stat.label}</h4>
                                    <p className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                                        {stat.value}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}