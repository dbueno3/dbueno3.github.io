import { useState } from 'react';
import { SpotifyIcon } from '../data/icons';
import './SpotifyWidget.scss';

const MOCK_TRACKS = [
{ title: 'Your top track', artist: 'Artist Name' },
{ title: 'Another song', artist: 'Artist Name' },
{ title: 'Third track', artist: 'Different Artist' },
];

const ART_VARIANTS = ['primary', 'secondary', 'tertiary'];

export default function SpotifyWidget() {
const [activeTab, setActiveTab] = useState('recentlyPlayed');

return (
    <section className="spotify">
    <div className="spotify__header">
        <h3 className="spotify__title">Recently Played</h3>
        <div className="spotify__tabs">
        {['recentlyPlayed', 'topTracks'].map((tab) => (
            <button
            key={tab}
            className={`spotify__tab ${activeTab === tab ? 'spotify__tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
            >
            {tab === 'recentlyPlayed' ? 'Recently Played' : 'Top Tracks'}
            </button>
        ))}
        </div>
    </div>

    <div className="spotify__grid">
        {/* Featured track */}
        <div className="spotify__featured">
        <div className="spotify__featured-badge">
            <SpotifyIcon />
        </div>
        <div className="spotify__featured-art">🎵</div>
        <div className="spotify__featured-title">Connect Spotify</div>
        <div className="spotify__featured-sub">Link your Spotify to show your music</div>
        </div>

        {/* Track list */}
        {MOCK_TRACKS.map((track, i) => (
        <div key={i} className="spotify__track">
            <div className={`spotify__track-art spotify__track-art--${ART_VARIANTS[i]}`}>
            🎵
            </div>
            <div className="spotify__track-info">
            <div className="spotify__track-title">{track.title}</div>
            <div className="spotify__track-artist">{track.artist}</div>
            </div>
            <div className="spotify__track-icon">
            <SpotifyIcon />
            </div>
        </div>
        ))}
    </div>
    </section>
);
}