import './Gear.scss';

export default function Gear() {
return (
    <div className="gear">
    <div className="gear__header">
        <h2 className="section-title">Gear</h2>
        <p className="section-sub">What I use.</p>
    </div>

    <div className="gear__placeholder">
        <div className="gear__empty">
        <div className="gear__empty-icon">🛠️</div>
        <div className="gear__empty-text">
            Coming soon — check back later for my setup and tools.
        </div>
        </div>
    </div>
    </div>
);
}