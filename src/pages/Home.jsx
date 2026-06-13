import { PROJECTS } from '../data/data';
import { ExternalIcon } from '../data/icons';
import SpotifyWidget from '../components/SpotifyWidget';
import './Home.scss';

const TAG_COLORS = ['primary', 'secondary', 'tertiary', 'light', 'primary'];

export default function Home() {
return (
    <div className="home">
    {/* Hero */}
    <div className="home__hero">
        <h1 className="home__greeting">
        hello, Danny here
        <span className="home__cursor" />
        </h1>
        <p className="home__bio">
        I'm a developer based in NYC building internal tools and automation at UBA America —
        full-stack portals, CI/CD pipelines, and everything in between.
        CS grad from University at Buffalo. I care about building things that actually work,
        whether that's software, tooling, or a solid deadlift.
        </p>
    </div>

    {/* Featured Projects */}
    <div className="home__projects">
        <h3 className="home__projects-title">Featured Projects</h3>
        <div className="home__projects-list">
        {PROJECTS.map((project, i) => (
            <div key={i} className="home__project-card">
            <div className="home__project-info">
                <div className="home__project-name">{project.name}</div>
                <div className="home__project-desc">{project.description}</div>
                <div className="home__project-tags">
                {project.tags.map((tag, j) => (
                    <span key={j} className={`home__tag home__tag--${TAG_COLORS[j % TAG_COLORS.length]}`}>
                    {tag}
                    </span>
                ))}
                </div>
            </div>
            {project.link ? (
              <a href={project.link} className="home__project-link" target="_blank" rel="noopener noreferrer">
                <ExternalIcon />
              </a>
            ) : (
              <span className="home__project-confidential">Confidential</span>
            )}
            </div>
        ))}
        </div>
    </div>

    {/* Spotify */}
    <div className="home__spotify">
        <SpotifyWidget />
    </div>
    </div>
);
}