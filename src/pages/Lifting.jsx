import './Lifting.scss';

const WEEKS = [
{
week: 1,
label: 'Week 1',
theme: 'knock off fatigue',
accentClass: 'w1',
lifts: [
    { name: 'Squat',    rpe: '@5–6',  rest: '1–2 min', tier: 'low'  },
    { name: 'Bench',    rpe: '@6',    rest: '2 min',   tier: 'low'  },
    { name: 'Deadlift', rpe: '@4–5',  rest: '1 min',   tier: 'low'  },
],
},
{
week: 2,
label: 'Week 2',
theme: 'get the body going',
accentClass: 'w2',
lifts: [
    { name: 'Squat',    rpe: '@6–7',  rest: '2–3 min', tier: 'med'  },
    { name: 'Bench',    rpe: '@7',    rest: '3 min',   tier: 'med'  },
    { name: 'Deadlift', rpe: '@5–6',  rest: '1–2 min', tier: 'low'  },
],
},
{
week: 3,
label: 'Week 3',
theme: 'train hard',
accentClass: 'w3',
lifts: [
    { name: 'Squat',    rpe: '@7–8',  rest: '3–4 min', tier: 'high' },
    { name: 'Bench',    rpe: '@8',    rest: '4 min',   tier: 'high' },
    { name: 'Deadlift', rpe: '@6–7',  rest: '2–3 min', tier: 'med'  },
],
},
{
week: 4,
label: 'Week 4',
theme: "don't think, just lift",
accentClass: 'w4',
lifts: [
    { name: 'Squat',    rpe: '@8–9',  rest: '4–5 min', tier: 'peak' },
    { name: 'Bench',    rpe: '@9',    rest: '5 min',   tier: 'peak' },
    { name: 'Deadlift', rpe: '@7–8',  rest: '3–4 min', tier: 'high' },
],
},
];

const RPE_REF = [
{ rpe: '<4', rest: '1 min',     cls: 'r-lt4' },
{ rpe: '5',  rest: '1–2 min',  cls: 'r-5'   },
{ rpe: '6',  rest: '2 min',    cls: 'r-6'   },
{ rpe: '7',  rest: '3 min',    cls: 'r-7'   },
{ rpe: '8',  rest: '4 min',    cls: 'r-8'   },
{ rpe: '9',  rest: '5 min',    cls: 'r-9'   },
{ rpe: '10', rest: '5–10 min', cls: 'r-10'  },
];

const WARMUP = [
{ range: 'Empty bar / very light', rest: '30–45 sec', tier: 'low'  },
{ range: '~50–60% of top set',     rest: '60 sec',    tier: 'low'  },
{ range: 'Last 1–2 warmup sets',   rest: '90 sec',    tier: 'med'  },
{ range: 'Pre-single (Week 4)',     rest: '~2 min',    tier: 'high' },
];

export default function Lifting() {
return (
<div className="lifting">
    <div className="lifting__header">
    <h2 className="section-title">Lifting</h2>
    <p className="section-sub">RPE rest guide — Month 20.</p>
    </div>

    {/* Week cards */}
    <div className="lifting__weeks">
    {WEEKS.map((w) => (
        <div key={w.week} className={`lifting__card lifting__card--${w.accentClass}`}>
        <div className="lifting__card-header">
            <span className="lifting__card-label">{w.label}</span>
            <span className="lifting__card-theme">{w.theme}</span>
        </div>
        <div className="lifting__lifts">
            {w.lifts.map((l) => (
            <div key={l.name} className="lifting__lift-row">
                <span className="lifting__lift-name">{l.name}</span>
                <span className="lifting__rpe-badge">{l.rpe}</span>
                <span className={`lifting__rest-badge lifting__rest-badge--${l.tier}`}>{l.rest}</span>
            </div>
            ))}
        </div>
        </div>
    ))}
    </div>

    {/* Warmup section */}
    <div className="lifting__section">
    <h3 className="lifting__section-title">Warmup Rest</h3>
    <p className="lifting__section-sub">
        All warmup sets are sub-@5 — keep rest short regardless of week.
    </p>
    <div className="lifting__warmup">
        {WARMUP.map((w) => (
        <div key={w.range} className="lifting__warmup-row">
            <span className="lifting__warmup-range">{w.range}</span>
            <span className={`lifting__rest-badge lifting__rest-badge--${w.tier}`}>{w.rest}</span>
        </div>
        ))}
    </div>
    </div>

    {/* RPE quick reference */}
    <div className="lifting__section">
    <h3 className="lifting__section-title">RPE Reference</h3>
    <div className="lifting__ref-grid">
        {RPE_REF.map((r) => (
        <div key={r.rpe} className={`lifting__ref-cell lifting__ref-cell--${r.cls}`}>
            <span className="lifting__ref-rpe">{r.rpe}</span>
            <span className="lifting__ref-rest">{r.rest}</span>
        </div>
        ))}
    </div>
    <p className="lifting__note">
        Rest times apply to top sets &amp; singles · backoff sets can be shorter
    </p>
    </div>
</div>
);
}    