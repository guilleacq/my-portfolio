import './App.css'
import TitleSection from './sections/TitleSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import CustomLink from './components/CustomLink.jsx'
import { FaExternalLinkAlt } from 'react-icons/fa'

function App() {
  return (
    <>
      {/* title */}
      <TitleSection 
        title={"Guillermo Acquistapace"} 
        description={"this is my little personal spot in the web."}
      />
      <ContactSection/>

      <AboutSection />
      <ProjectsSection />

      <CustomLink icon={<FaExternalLinkAlt/>} text="my_blog" href={"https://medium.com"} />
    </>
  )
}

export default App;
