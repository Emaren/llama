import React from "react";

interface MoodData {
  timestamp: string;
  moodLevel: number; // 0-100
}

interface Props {
  data: MoodData[];
}

const MoodHeatmap: React.FC<Props> = ({ data }) => {
  const getColor = (level: number) => {
    if (level > 75) return "#4caf50";
    if (level > 40) return "#ffeb3b";
    return "#f44336";
  };

  return (
    <div>
      <h4>Mood Heatmap</h4>
      <div style={{ display: "flex", gap: "2px" }}>
        {data.map((d, idx) => (
          <div
            key={idx}
            style={{
              width: "10px",
              height: "30px",
              backgroundColor: getColor(d.moodLevel),
            }}
            title={`${new Date(d.timestamp).toLocaleString()}: Mood ${d.moodLevel}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MoodHeatmap;
