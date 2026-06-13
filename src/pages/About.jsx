import { TIMELINE, PROJECTS, SKILLS } from '../data/data';
import photo1 from '../images/Danny.jpg';
import photo2 from '../images/Danny.021.jpg';
import './About.scss';

const TAG_COLORS = ['primary', 'secondary', 'tertiary', 'primary-light'];

export default function About() {
return (
    <div className="about">
    {/* Header */}
    <div className="about__header">
        <h2 className="section-title">About</h2>
        <p className="section-sub">Who I am.</p>

        {/* Photo collage */}
        <div className="about__collage">
          <div className="about__collage-item about__collage-item--1">
            <img src={photo1} alt="Danny" />
          </div>
          <div className="about__collage-item about__collage-item--2">
            <img src={photo2} alt="Danny" />
          </div>
        </div>
    </div>

    {/* Timeline */}
    <div className="about__timeline">
        <h3 className="about__timeline-title">Timeline</h3>
        <div className="about__timeline-list">
        <div className="about__timeline-line" />
        {TIMELINE.map((item, i) => (
            <div key={i} className="about__timeline-item">
            <div className={`about__timeline-dot about__timeline-dot--${item.colorClass}`} />
            <div>
                <div className="about__timeline-company">{item.company}</div>
                <div className={`about__timeline-role about__timeline-role--${item.colorClass}`}>
                {item.role}
                </div>
                <div className="about__timeline-desc">• {item.description}</div>
            </div>
            <div className="about__timeline-period">{item.period}</div>
            </div>
        ))}
        </div>
    </div>

    {/* Skills */}
    <div className="about__skills">
        <h3 className="about__skills-title">Skills</h3>
        <div className="about__skills-grid">
        {SKILLS.map((group) => (
            <div key={group.category} className="about__skill-group">
            <div className="about__skill-category">{group.category}</div>
            <div className="about__skill-tags">
                {group.items.map((item) => (
                <span key={item} className="about__skill-tag">{item}</span>
                ))}
            </div>
            </div>
        ))}
        </div>
    </div>

    {/* Projects */}
    <div className="about__projects">
        <h3 className="about__projects-title">Projects</h3>
        <div className="about__projects-list">
        {PROJECTS.map((project, i) => (
            <div key={i} className="about__project">
            <div className="about__project-info">
                <div className="about__project-name">{project.name}</div>
                <div className="about__project-desc">{project.description}</div>
            </div>
            <div className="about__project-tags">
                {project.tags.map((tag, j) => (
                <span key={j} className={`about__tag about__tag--${TAG_COLORS[j % TAG_COLORS.length]}`}>
                    {tag}
                </span>
                ))}
            </div>
            </div>
        ))}
        </div>
    </div>
    </div>
);
}