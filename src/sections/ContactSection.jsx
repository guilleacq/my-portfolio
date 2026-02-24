import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CustomLink from '../components/CustomLink';

const links = [
    { href: "mailto:me@gmail.com", icon: <FaEnvelope /> },
    { href: "https://github.com/test", icon: <FaGithub /> },
    { href: "https://linkedin.com/in/test", icon: <FaLinkedin /> },
];

const ContactSection = () => {
    return (
        <section className="contact-section">
        {links.map(link => (
            <CustomLink key={link.href} icon={link.icon} text={link.text} href={link.href} />
        ))}
        </section>
    );
}

export default ContactSection;
