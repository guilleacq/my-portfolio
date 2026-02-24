import TitleSection from './sections/TitleSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import ContactSection from './sections/ContactSection.jsx'

function App() {
  return (
    <>
    <main className="flex flex-col gap-6">
      <TitleSection 
        title={"Guillermo Acquistapace"} 
        description={"Welcome to my corner of the web. Explore my work, read my thoughts, or just say hello."}
      />
      <ContactSection/>
      
      <AboutSection />
      <ProjectsSection />
    </main>
    </>
  )
}

export default App;
