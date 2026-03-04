import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkSquareAlt } from 'react-icons/fa';
import CustomLink from '../components/CustomLink';

const links = [
    { text:"mail", href: "mailto:me@gmail.com", icon: <FaEnvelope /> },
    { text:"github", href: "https://github.com/test", icon: <FaGithub /> },
    { text:"linkedin", href: "https://linkedin.com/in/test", icon: <FaLinkedin /> },
    { text: "blog", href: "https://medium.com", icon: <FaExternalLinkSquareAlt /> },
];

const ContactSection = () => {
    return (
        <section className="flex flex-row items-center gap-4 flex-wrap">
            {links.map(link => (
                <CustomLink key={link.href} icon={link.icon} text={link.text} href={link.href} />
            ))}
        </section>
    );
}

export default ContactSection;
