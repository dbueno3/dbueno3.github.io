import { useState, useEffect } from "react";

const WEEKS = [
  {
    week: 1,
    title: "Foundations — Arrays, Hashmaps, Strings",
    goal: "Rebuild muscle memory with core data structures",
    problems: [
      { name: "Two Sum", id: 1, difficulty: "Easy", pattern: "Hashmap", url: "https://leetcode.com/problems/two-sum/" },
      { name: "Valid Anagram", id: 242, difficulty: "Easy", pattern: "Hashmap", url: "https://leetcode.com/problems/valid-anagram/" },
      { name: "Group Anagrams", id: 49, difficulty: "Medium", pattern: "Hashmap", url: "https://leetcode.com/problems/group-anagrams/" },
      { name: "Contains Duplicate", id: 217, difficulty: "Easy", pattern: "Hashmap/Set", url: "https://leetcode.com/problems/contains-duplicate/" },
      { name: "Best Time to Buy and Sell Stock", id: 121, difficulty: "Easy", pattern: "Array", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
      { name: "Product of Array Except Self", id: 238, difficulty: "Medium", pattern: "Array", url: "https://leetcode.com/problems/product-of-array-except-self/" },
      { name: "Longest Consecutive Sequence", id: 128, difficulty: "Medium", pattern: "Hashmap/Set", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
      { name: "Majority Element", id: 169, difficulty: "Easy", pattern: "Hashmap/Voting", url: "https://leetcode.com/problems/majority-element/" },
      { name: "Rank Teams by Votes", id: 1366, difficulty: "Medium", pattern: "Hashmap/Sorting", url: "https://leetcode.com/problems/rank-teams-by-votes/" },
      { name: "⭐ Election Winner (Your Google Q)", id: 0, difficulty: "Medium", pattern: "Hashmap/Aggregation", url: "" },
    ],
  },
  {
    week: 2,
    title: "Two Pointers & Sliding Window",
    goal: "Master linear scan patterns — high frequency at Google",
    problems: [
      { name: "Valid Palindrome", id: 125, difficulty: "Easy", pattern: "Two Pointers", url: "https://leetcode.com/problems/valid-palindrome/" },
      { name: "Two Sum II (Sorted)", id: 167, difficulty: "Medium", pattern: "Two Pointers", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
      { name: "3Sum", id: 15, difficulty: "Medium", pattern: "Two Pointers", url: "https://leetcode.com/problems/3sum/" },
      { name: "Container With Most Water", id: 11, difficulty: "Medium", pattern: "Two Pointers", url: "https://leetcode.com/problems/container-with-most-water/" },
      { name: "Longest Substring Without Repeating Characters", id: 3, difficulty: "Medium", pattern: "Sliding Window", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { name: "Minimum Window Substring", id: 76, difficulty: "Hard", pattern: "Sliding Window", url: "https://leetcode.com/problems/minimum-window-substring/" },
      { name: "Permutation in String", id: 567, difficulty: "Medium", pattern: "Sliding Window", url: "https://leetcode.com/problems/permutation-in-string/" },
    ],
  },
  {
    week: 3,
    title: "BFS & DFS — Your Weak Spot",
    goal: "This is where you got stuck last time. Drill it until it's automatic.",
    problems: [
      { name: "Binary Tree Level Order Traversal", id: 102, difficulty: "Medium", pattern: "BFS", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
      { name: "Number of Islands", id: 200, difficulty: "Medium", pattern: "BFS/DFS", url: "https://leetcode.com/problems/number-of-islands/" },
      { name: "Max Depth of Binary Tree", id: 104, difficulty: "Easy", pattern: "DFS", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
      { name: "Clone Graph", id: 133, difficulty: "Medium", pattern: "BFS/DFS", url: "https://leetcode.com/problems/clone-graph/" },
      { name: "Rotting Oranges", id: 994, difficulty: "Medium", pattern: "BFS", url: "https://leetcode.com/problems/rotting-oranges/" },
      { name: "Word Ladder", id: 127, difficulty: "Hard", pattern: "BFS", url: "https://leetcode.com/problems/word-ladder/" },
      { name: "Course Schedule", id: 207, difficulty: "Medium", pattern: "BFS/Topological", url: "https://leetcode.com/problems/course-schedule/" },
      { name: "Shortest Path in Binary Matrix", id: 1091, difficulty: "Medium", pattern: "BFS", url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" },
      { name: "Pacific Atlantic Water Flow", id: 417, difficulty: "Medium", pattern: "DFS", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
    ],
  },
  {
    week: 4,
    title: "Trees & Binary Search",
    goal: "Trees show up constantly at Google — get comfortable with recursion",
    problems: [
      { name: "Invert Binary Tree", id: 226, difficulty: "Easy", pattern: "Tree/DFS", url: "https://leetcode.com/problems/invert-binary-tree/" },
      { name: "Validate BST", id: 98, difficulty: "Medium", pattern: "Tree/DFS", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
      { name: "Lowest Common Ancestor of BST", id: 235, difficulty: "Medium", pattern: "Tree", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
      { name: "Binary Tree Right Side View", id: 199, difficulty: "Medium", pattern: "BFS", url: "https://leetcode.com/problems/binary-tree-right-side-view/" },
      { name: "Serialize and Deserialize Binary Tree", id: 297, difficulty: "Hard", pattern: "Tree/BFS", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
      { name: "Binary Search", id: 704, difficulty: "Easy", pattern: "Binary Search", url: "https://leetcode.com/problems/binary-search/" },
      { name: "Search in Rotated Sorted Array", id: 33, difficulty: "Medium", pattern: "Binary Search", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
    ],
  },
  {
    week: 5,
    title: "Stacks, Linked Lists & Dynamic Programming Intro",
    goal: "Cover remaining core patterns — DP basics are must-knows",
    problems: [
      { name: "Valid Parentheses", id: 20, difficulty: "Easy", pattern: "Stack", url: "https://leetcode.com/problems/valid-parentheses/" },
      { name: "Min Stack", id: 155, difficulty: "Medium", pattern: "Stack", url: "https://leetcode.com/problems/min-stack/" },
      { name: "Reverse Linked List", id: 206, difficulty: "Easy", pattern: "Linked List", url: "https://leetcode.com/problems/reverse-linked-list/" },
      { name: "Merge Two Sorted Lists", id: 21, difficulty: "Easy", pattern: "Linked List", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { name: "Climbing Stairs", id: 70, difficulty: "Easy", pattern: "DP", url: "https://leetcode.com/problems/climbing-stairs/" },
      { name: "Coin Change", id: 322, difficulty: "Medium", pattern: "DP", url: "https://leetcode.com/problems/coin-change/" },
      { name: "House Robber", id: 198, difficulty: "Medium", pattern: "DP", url: "https://leetcode.com/problems/house-robber/" },
    ],
  },
  {
    week: 6,
    title: "Advanced Patterns & Google Favorites",
    goal: "Stretch problems — if you can handle these, you're ready",
    problems: [
      { name: "Merge Intervals", id: 56, difficulty: "Medium", pattern: "Intervals", url: "https://leetcode.com/problems/merge-intervals/" },
      { name: "Meeting Rooms II", id: 253, difficulty: "Medium", pattern: "Intervals", url: "https://leetcode.com/problems/meeting-rooms-ii/" },
      { name: "LRU Cache", id: 146, difficulty: "Medium", pattern: "Design", url: "https://leetcode.com/problems/lru-cache/" },
      { name: "Top K Frequent Elements", id: 347, difficulty: "Medium", pattern: "Heap", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
      { name: "Find Median from Data Stream", id: 295, difficulty: "Hard", pattern: "Heap", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
      { name: "Trapping Rain Water", id: 42, difficulty: "Hard", pattern: "Two Pointers", url: "https://leetcode.com/problems/trapping-rain-water/" },
      { name: "Word Search", id: 79, difficulty: "Medium", pattern: "Backtracking", url: "https://leetcode.com/problems/word-search/" },
    ],
  },
];

const INITIAL_PROGRESS = {
  "0-1": { status: "done", attempts: 1, note: "Use one hashmap, increment for s, decrement for t. Final pass: all values must be 0. Use .get(char, 0) for safe default. Strings are immutable — .lower() returns new string." },
  "1-0": { status: "done", attempts: 1, note: "Filter with .isalnum() + .lower() to build clean string. Converging pointers, while left < right. Early-return on mismatch, return True after loop. Pre-process O(n) space; in-place version is O(1)." },
  "1-1": { status: "done", attempts: 1, note: "Sorted array unlocks two pointers. Sum < target → move left right. Sum > target → move right left. Convert to 1-indexed inside the return: [left+1, right+1]. Don't mutate vars before return." },
  "1-2": { status: "paused", attempts: 0, note: "Paused mid-problem. Approach: SORT first, then for-loop fixes nums[i], two-pointer scan on rest with target = -nums[i]. O(n²) is expected. Need to handle duplicates by skipping." },
};

const STORAGE_KEY = "leetcode-tracker-progress-v1";

const C = {
  bg: "#000000",
  surface: "#0a0a0a",
  surfaceHi: "#111111",
  border: "#1a1a1a",
  borderHi: "#262626",
  text: "#fafafa",
  textDim: "#a1a1aa",
  textMuted: "#52525b",
  textFaint: "#3f3f46",
};

const DIFF_COLORS = {
  Easy: { bg: "#04200f", text: "#34d399", border: "#065f46" },
  Medium: { bg: "#241404", text: "#fbbf24", border: "#78350f" },
  Hard: { bg: "#240814", text: "#fb7185", border: "#831843" },
};

const STATUS_COLORS = {
  done: { border: "#065f46", bg: "rgba(52, 211, 153, 0.06)", icon: "#34d399" },
  paused: { border: "#78350f", bg: "rgba(251, 191, 36, 0.06)", icon: "#fbbf24" },
};

const loadProgress = () => {
  if (typeof window === "undefined") return INITIAL_PROGRESS;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.warn("Failed to load progress from localStorage:", e);
  }
  return INITIAL_PROGRESS;
};

export default function LeetcodePlan() {
  const [progress, setProgress] = useState(loadProgress);
  const [expandedWeek, setExpandedWeek] = useState(2);
  const [openNote, setOpenNote] = useState(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Set body background to pure black while this route is mounted, restore on unmount.
  // This avoids the rest of the personal site needing to know about this route.
  useEffect(() => {
    const prevBg = document.body.style.background;
    const prevColor = document.body.style.color;
    document.body.style.background = C.bg;
    document.body.style.color = C.text;
    return () => {
      document.body.style.background = prevBg;
      document.body.style.color = prevColor;
    };
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn("Failed to save progress to localStorage:", e);
    }
  }, [progress]);

  const getProgress = (key) => progress[key] || { status: undefined, attempts: 0, note: "" };

  const cycleStatus = (key) => {
    setProgress((prev) => {
      const cur = prev[key] || { status: undefined, attempts: 0, note: "" };
      const next = cur.status === undefined ? "done" : cur.status === "done" ? "paused" : undefined;
      return { ...prev, [key]: { ...cur, status: next } };
    });
  };

  const incrementAttempts = (key) => {
    setProgress((prev) => {
      const cur = prev[key] || { status: undefined, attempts: 0, note: "" };
      return { ...prev, [key]: { ...cur, attempts: cur.attempts + 1 } };
    });
  };

  const updateNote = (key, value) => {
    setProgress((prev) => {
      const cur = prev[key] || { status: undefined, attempts: 0, note: "" };
      return { ...prev, [key]: { ...cur, note: value } };
    });
  };

  const exportProgress = () => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leetcode-progress-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importProgress = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        setProgress(imported);
      } catch (err) {
        alert("Invalid file format");
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  };

  const resetProgress = () => {
    setProgress(INITIAL_PROGRESS);
    setShowResetConfirm(false);
  };

  const totalProblems = WEEKS.reduce((sum, w) => sum + w.problems.length, 0);
  const totalCompleted = Object.values(progress).filter((p) => p.status === "done").length;
  const totalPaused = Object.values(progress).filter((p) => p.status === "paused").length;
  const pct = Math.round((totalCompleted / totalProblems) * 100);

  const weekStats = (weekIdx) => {
    const probs = WEEKS[weekIdx].problems;
    let done = 0;
    let paused = 0;
    probs.forEach((_, i) => {
      const s = getProgress(`${weekIdx}-${i}`).status;
      if (s === "done") done += 1;
      else if (s === "paused") paused += 1;
    });
    return { done, paused, total: probs.length };
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "32px 24px",
        fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
        color: C.text,
        maxWidth: 760,
        margin: "0 auto",
        background: C.bg,
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: C.textMuted, marginBottom: 8 }}>
          Google Interview Prep
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: C.text, margin: "0 0 8px 0", letterSpacing: -0.5 }}>
          6-Week Leetcode Plan
        </h1>
        <p style={{ fontSize: 13, color: C.textDim, margin: 0, lineHeight: 1.5 }}>
          1 problem/day minimum · Focus on patterns, not memorization · Explain solutions out loud
        </p>
      </div>

      <div style={{ marginBottom: 32, padding: "16px 20px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: C.textDim }}>Overall Progress</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: pct === 100 ? "#34d399" : C.text }}>
            {totalCompleted}/{totalProblems} ({pct}%)
            {totalPaused > 0 && (
              <span style={{ color: "#fbbf24", marginLeft: 8, fontWeight: 500 }}>· {totalPaused} paused</span>
            )}
          </span>
        </div>
        <div style={{ height: 6, background: C.surfaceHi, borderRadius: 3, overflow: "hidden", display: "flex", marginBottom: 14 }}>
          <div style={{ height: "100%", width: `${pct}%`, background: pct === 100 ? "#34d399" : "linear-gradient(90deg, #3b82f6, #8b5cf6)", borderRadius: pct === 100 ? 3 : "3px 0 0 3px", transition: "width 0.4s ease" }} />
          {totalPaused > 0 && (
            <div style={{ height: "100%", width: `${(totalPaused / totalProblems) * 100}%`, background: "#fbbf24", opacity: 0.6, transition: "width 0.4s ease" }} />
          )}
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <button onClick={exportProgress} style={{ fontSize: 11, color: C.textDim, background: C.surfaceHi, border: `1px solid ${C.borderHi}`, padding: "5px 10px", borderRadius: 4, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>
            ↓ Export
          </button>
          <label style={{ fontSize: 11, color: C.textDim, background: C.surfaceHi, border: `1px solid ${C.borderHi}`, padding: "5px 10px", borderRadius: 4, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>
            ↑ Import
            <input type="file" accept="application/json" onChange={importProgress} style={{ display: "none" }} />
          </label>
          {!showResetConfirm ? (
            <button onClick={() => setShowResetConfirm(true)} style={{ fontSize: 11, color: C.textMuted, background: "transparent", border: `1px solid ${C.border}`, padding: "5px 10px", borderRadius: 4, cursor: "pointer", fontFamily: "inherit", fontWeight: 600, marginLeft: "auto" }}>
              Reset
            </button>
          ) : (
            <div style={{ display: "flex", gap: 6, marginLeft: "auto" }}>
              <button onClick={resetProgress} style={{ fontSize: 11, color: "#fb7185", background: "#240814", border: "1px solid #831843", padding: "5px 10px", borderRadius: 4, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>
                Confirm reset
              </button>
              <button onClick={() => setShowResetConfirm(false)} style={{ fontSize: 11, color: C.textDim, background: "transparent", border: `1px solid ${C.border}`, padding: "5px 10px", borderRadius: 4, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {WEEKS.map((week, weekIdx) => {
        const stats = weekStats(weekIdx);
        const isExpanded = expandedWeek === weekIdx + 1;
        const weekDone = stats.done === stats.total;
        const hasPaused = stats.paused > 0;

        return (
          <div key={weekIdx} style={{ marginBottom: 12, border: `1px solid ${weekDone ? "#065f46" : hasPaused && !isExpanded ? "#78350f" : isExpanded ? C.borderHi : C.border}`, borderRadius: 8, overflow: "hidden", background: isExpanded ? C.surface : "transparent", transition: "all 0.2s ease" }}>
            <div onClick={() => setExpandedWeek(isExpanded ? null : weekIdx + 1)} style={{ padding: "14px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", userSelect: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 12, color: weekDone ? "#34d399" : hasPaused ? "#fbbf24" : C.textMuted, fontWeight: 600 }}>
                  {weekDone ? "✓" : `W${weekIdx + 1}`}
                </span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{week.title}</div>
                  <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>{week.goal}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 12, color: weekDone ? "#34d399" : C.textMuted }}>
                  {stats.done}/{stats.total}
                  {stats.paused > 0 && <span style={{ color: "#fbbf24" }}> · {stats.paused}⏸</span>}
                </span>
                <span style={{ fontSize: 14, color: C.textFaint, transform: isExpanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</span>
              </div>
            </div>

            {isExpanded && (
              <div style={{ padding: "0 20px 16px" }}>
                {week.problems.map((prob, probIdx) => {
                  const key = `${weekIdx}-${probIdx}`;
                  const p = getProgress(key);
                  const dc = DIFF_COLORS[prob.difficulty];
                  const sc = p.status ? STATUS_COLORS[p.status] : null;
                  const isNoteOpen = openNote === key;
                  const hasNote = p.note && p.note.length > 0;

                  return (
                    <div key={probIdx} style={{ marginBottom: 4, borderRadius: 6, background: sc ? sc.bg : "transparent", border: sc ? `1px solid ${sc.border}` : "1px solid transparent", transition: "background 0.15s" }}>
                      <div style={{ display: "flex", alignItems: "center", padding: "10px 12px", gap: 12, flexWrap: "wrap" }}>
                        <div onClick={() => cycleStatus(key)} title="Click to cycle: not started → done → paused → not started" style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${p.status === "done" ? "#34d399" : p.status === "paused" ? "#fbbf24" : C.borderHi}`, background: p.status === "done" ? "#34d399" : p.status === "paused" ? "#fbbf24" : "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.15s", fontSize: 11, color: C.bg, fontWeight: 700 }}>
                          {p.status === "done" ? "✓" : p.status === "paused" ? "⏸" : ""}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <a href={prob.url || undefined} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: p.status === "done" ? C.textMuted : C.text, textDecoration: p.status === "done" ? "line-through" : "none", fontWeight: 500 }}>
                            #{prob.id} — {prob.name}
                          </a>
                        </div>

                        <button onClick={() => incrementAttempts(key)} title="Click to increment attempts" style={{ fontSize: 10, color: p.attempts > 0 ? C.text : C.textFaint, background: C.surfaceHi, border: `1px solid ${C.borderHi}`, padding: "2px 8px", borderRadius: 4, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>
                          {p.attempts}×
                        </button>

                        <button onClick={() => setOpenNote(isNoteOpen ? null : key)} title="Toggle notes" style={{ fontSize: 10, color: hasNote ? "#a5b4fc" : C.textFaint, background: hasNote ? "#0c0a26" : C.surfaceHi, border: `1px solid ${hasNote ? "#312e81" : C.borderHi}`, padding: "2px 8px", borderRadius: 4, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>
                          {hasNote ? "📝" : "+ note"}
                        </button>

                        <span style={{ fontSize: 10, color: C.textMuted, background: C.surfaceHi, padding: "2px 8px", borderRadius: 4, whiteSpace: "nowrap" }}>
                          {prob.pattern}
                        </span>

                        <span style={{ fontSize: 10, fontWeight: 600, color: dc.text, background: dc.bg, border: `1px solid ${dc.border}`, padding: "2px 8px", borderRadius: 4, whiteSpace: "nowrap" }}>
                          {prob.difficulty}
                        </span>
                      </div>

                      {isNoteOpen && (
                        <div style={{ padding: "0 12px 10px", display: "flex", gap: 8 }}>
                          <textarea value={p.note} onChange={(e) => updateNote(key, e.target.value)} placeholder="Approach, gotchas, technique used..." style={{ flex: 1, minHeight: 60, fontSize: 12, fontFamily: "inherit", color: C.text, background: C.bg, border: `1px solid ${C.border}`, borderRadius: 4, padding: "8px 10px", resize: "vertical", outline: "none", lineHeight: 1.5 }} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      <div style={{ marginTop: 32, padding: "16px 20px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 12, color: C.textMuted, lineHeight: 1.7 }}>
        <div style={{ fontWeight: 600, color: C.textDim, marginBottom: 8 }}>Rules of engagement</div>
        <div>→ Attempt every problem for 20–30 min before looking at solutions</div>
        <div>→ After solving, explain your approach out loud as if interviewing</div>
        <div>→ If you can't solve it, study the solution, then redo it from scratch the next day</div>
        <div>→ Week 3 (BFS/DFS) is your priority — spend extra time here</div>
        <div>→ Practice in Python since that's your strongest language</div>
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px solid ${C.border}` }}>
          <span style={{ color: C.textDim }}>Status legend:</span>{" "}
          <span style={{ color: "#34d399" }}>✓ done</span>{" "}
          <span style={{ color: C.textMuted }}>·</span>{" "}
          <span style={{ color: "#fbbf24" }}>⏸ paused</span>{" "}
          <span style={{ color: C.textMuted }}>· click checkbox to cycle</span>
        </div>
      </div>
    </div>
  );
}