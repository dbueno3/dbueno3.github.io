import { CONTACT_LINKS } from '../data/data';
import './Contact.scss';

export default function Contact() {
return (
    <div className="contact">
    <div className="contact__header">
        <h2 className="section-title">Contact</h2>
        <p className="section-sub">Let's connect.</p>
        <p className="contact__intro">
        Connect with me through any of these platforms.
        </p>
    </div>

    <div className="contact__grid">
        {CONTACT_LINKS.map((link, i) => {
        const Icon = link.icon;
        return (
            <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
            >
            <div className="contact__card-icon">
                <Icon />
            </div>
            <div>
                <div className="contact__card-label">{link.label}</div>
                <div className="contact__card-value">{link.value}</div>
            </div>
            </a>
        );
        })}
    </div>
    </div>
);
}