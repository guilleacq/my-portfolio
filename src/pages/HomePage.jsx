import HeroSection from '@/sections/HomePage/HeroSection.jsx'
import AboutSection from '@/sections/HomePage/AboutSection.jsx'
import ProjectsSection from '@/sections/HomePage/ProjectsSection.jsx'
import ContactSection from '@/sections/HomePage/ContactSection.jsx'
import Separator from '@/components/Separator.jsx'

const HomePage = () => {
    return (
        <>
            <HeroSection
                title={"Guillermo Acquistapace"}
                description={"Welcome to my corner of the web. Explore my work, read my thoughts, or just say hello."}
            />
            <ContactSection />

            <Separator />

            <div className="flex flex-col gap-12">
                <AboutSection />
                <ProjectsSection />
            </div>
        </>
    );
}

export default HomePage;