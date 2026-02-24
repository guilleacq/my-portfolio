import { FaGithub, FaLinkedin } from 'react-icons/fa';
import CustomLink from '../components/CustomLink';

const links = [
  { text: "github", href: "https://github.com/test", icon: <FaGithub /> },
  { text: "linkedin", href: "https://linkedin.com/in/test", icon: <FaLinkedin /> },
];

const ContactSection = () => {
    return (
        <section className="contact-section">
        {links.map(link => (
            <CustomLink key={link.text} icon={link.icon} text={link.text} href={link.href} />
        ))}
        </section>
    );
}

export default ContactSection;
