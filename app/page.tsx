'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
            <Header/>
            <Hero/>
            <About/>
            <Experience/>
            <Skills/>
            <Gallery/>
            <Contact/>
            <Footer/>
        </main>
    )
}