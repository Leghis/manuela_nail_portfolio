'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import {
    Sparkles,
    Star,
    Languages,
    Award,
    Gem,
    Palette,
    Brush,
    Heart,
    Shield,
    Users
} from 'lucide-react'

const skillCategories = {
    nailServices: [
        { name: "Gel Extensions", level: 95, icon: Gem },
        { name: "Acrylic Application", level: 80, icon: Sparkles },
        { name: "3D Nail Art", level: 75, icon: Palette },
        { name: "Polygel Extension", level: 90, icon: Brush }
    ],
    additionalSkills: [
        { name: "Customer Service", level: 90, icon: Users },
        { name: "Salon Management", level: 65, icon: Star },
        { name: "Hygiene Standards", level: 90, icon: Shield },
        { name: "Product Knowledge", level: 90, icon: Award }
    ],
    languages: [
        { name: "English", level: 60, icon: Languages },
        { name: "French", level: 100, icon: Languages }
    ]
}

export default function Skills() {
    const progressVariants = {
        hidden: { width: 0 },
        visible: (level: number) => ({
            width: `${level}%`,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        })
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <section id="skills" className="py-20 bg-gradient-to-b from-pink-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text mb-4">
                        Professional Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"/>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Card className="p-8 bg-white/80 backdrop-blur-sm border-pink-100">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <Sparkles className="w-6 h-6 text-pink-400 mr-2" />
                                Nail Services
                            </h3>
                            <div className="space-y-6">
                                {skillCategories.nailServices.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="space-y-2"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-2">
                                                <skill.icon className="w-5 h-5 text-pink-400" />
                                                <span className="text-gray-700">{skill.name}</span>
                                            </div>
                                            <span className="text-pink-400 font-semibold">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-pink-400 to-purple-400"
                                                variants={progressVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                custom={skill.level}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 bg-white/80 backdrop-blur-sm border-pink-100">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                    <Star className="w-6 h-6 text-pink-400 mr-2" />
                                    Additional Skills
                                </h3>
                                <div className="space-y-6">
                                    {skillCategories.additionalSkills.map((skill) => (
                                        <motion.div
                                            key={skill.name}
                                            variants={itemVariants}
                                            className="space-y-2"
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center space-x-2">
                                                    <skill.icon className="w-5 h-5 text-pink-400" />
                                                    <span className="text-gray-700">{skill.name}</span>
                                                </div>
                                                <span className="text-pink-400 font-semibold">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-pink-400 to-purple-400"
                                                    variants={progressVariants}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    custom={skill.level}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 bg-white/80 backdrop-blur-sm border-pink-100">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                    <Languages className="w-6 h-6 text-pink-400 mr-2" />
                                    Languages
                                </h3>
                                <div className="space-y-6">
                                    {skillCategories.languages.map((language) => (
                                        <motion.div
                                            key={language.name}
                                            variants={itemVariants}
                                            className="space-y-2"
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center space-x-2">
                                                    <language.icon className="w-5 h-5 text-pink-400" />
                                                    <span className="text-gray-700">{language.name}</span>
                                                </div>
                                                <span className="text-pink-400 font-semibold">{language.level}%</span>
                                            </div>
                                            <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-pink-400 to-purple-400"
                                                    variants={progressVariants}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    custom={language.level}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* Skills Summary Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                >
                    {[
                        { icon: Star, label: "Expert Level", value: "Professional" },
                        { icon: Users, label: "Happy Clients", value: "200+" },
                        { icon: Award, label: "Experience", value: "6 Years" },
                        { icon: Heart, label: "Satisfaction", value: "92%" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="p-6 text-center bg-gradient-to-r from-pink-400 to-purple-400 text-white">
                                <item.icon className="w-8 h-8 mx-auto mb-2" />
                                <h4 className="font-semibold">{item.label}</h4>
                                <p className="text-lg font-bold">{item.value}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}