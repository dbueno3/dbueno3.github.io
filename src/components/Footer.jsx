import { SOCIALS } from '../data/data';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        {Object.values(SOCIALS).map((social, i) => {
          const Icon = social.icon;
          return (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon"
              title={social.label}
            >
              <Icon />
            </a>
          );
        })}
      </div>
      <div className="footer__text">
        © 2026 Daniel. All rights reserved.
      </div>
    </footer>
  );
}