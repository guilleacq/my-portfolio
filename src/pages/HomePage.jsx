import HeroSection from '@/sections/HeroSection.jsx'
import AboutSection from '@/sections/AboutSection.jsx'
import ProjectsSection from '@/sections/ProjectsSection.jsx'
import ContactSection from '@/sections/ContactSection.jsx'
import Separator from '@/components/Separator.jsx'

const HomePage = () => {
    return (
        <main className="flex flex-col gap-6">
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
        </main>
    );
}

export default HomePage;