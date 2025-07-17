import ThemeToggle from "@/components/ThemeToggle"
import StarBackground from "../components/StarBackground"
import {Navbar} from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import {AboutMe} from "../components/AboutMe"
import SkillSection from "../components/SkillSection"
import ProjectSection from "../components/ProjectSection"
import ContactSection from "../components/ContactSection"
import { EducationSection } from "../components/EducationSection"
import Footer from "../components/Footer"

const Home = () => {
  return (
   <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
   {/* Theme Toggle */}

    <ThemeToggle/>

   {/* Backeground Effect */}

   <StarBackground/>

   {/* Navbar */}

   <Navbar/>
   {/* Main content */}

    <main>
      <HeroSection/>
      <AboutMe/>
      <SkillSection/>
      <ProjectSection/>
      <EducationSection/>
      <ContactSection/>
    </main>

   {/* Footer */}

   <Footer/>

   </div>
  )
}

export default Home