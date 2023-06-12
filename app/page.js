import About from '@/components/About'
import HomePage from '../components/HomePage'
import SkillSection from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experince'
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
    <HomePage/>
    <About/>
    <SkillSection/>
    <Projects/>
    <Experience/>
    <div class=" mx-8 max-w-5xl bg-gradient-to-br from-teal-400 via-yellow-400 to-pink-500 p-4 rounded-lg sm:px-8 sm:py-6 ">
  <h1 class="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Your Text Here</h1>
</div>
  </main>
  )
}
