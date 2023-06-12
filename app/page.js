import About from '@/components/About'
import HomePage from '../components/HomePage'
import SkillSection from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experince'
import Contact from '@/components/Contact'
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
    <HomePage/>
    <About/>
    <SkillSection/>
    <Projects/>
    <Experience/>
    <Contact/>
    
  </main>
  )
}
