import React from "react";

interface Bias {
  id: string;
  emoji: string;
  strength: number;
}

interface Props {
  biases: Bias[];
}

const EmojiBiasPlotter: React.FC<Props> = ({ biases }) => {
  return (
    <div>
      <h4>Emoji Bias Plotter</h4>
      <ul>
        {biases.map((bias) => (
          <li key={bias.id}>
            {bias.emoji} Strength: {bias.strength.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmojiBiasPlotter;
