'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { AgentChatTile } from '../components/AgentChatTile';

const componentNames = [
  "AgentDashboard",
  "BiasVectorViewer",
  "CognitiveLoadMeter",
  "ContextScopeMeter",
  "DreamJournal",
  "EngagementPredictor",
  "GoalProgressGraph",
  "InsightTracker",
  "MemoryEditor",
  "MemoryTagEditor",
  "MessageRankerView",
  "PersonaTuner",
  "ProjectHealthBar",
  "PromptStyleTweaker",
  "QueryTypeLabel",
  "SelfReflectionViewer",
  "SessionHistory",
  "ToneBiasAdjuster",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">🧠 Llama Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* ✅ Render AgentChatTile directly — it already includes its own box */}
        <AgentChatTile />

        {/* 🔁 Dynamically rendered dashboard tiles */}
        {componentNames.map((name) => {
          const Comp = dynamic(() => import(`../components/${name}`), { ssr: false });
          return (
            <div key={name} className="p-4 bg-zinc-900 rounded-xl">
              <h2 className="text-xl font-semibold mb-2">{name}</h2>
              <Comp />
            </div>
          );
        })}
      </div>
    </main>
  );
}
