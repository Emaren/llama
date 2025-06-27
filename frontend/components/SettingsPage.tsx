import React, { useState } from "react";

interface Props {
  initialSettings: Record<string, any>;
  onSave: (settings: Record<string, any>) => void;
}

const SettingsPage: React.FC<Props> = ({ initialSettings, onSave }) => {
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onSave(settings);
  };

  return (
    <div>
      <h4>Settings</h4>
      {Object.entries(settings).map(([key, value]) => (
        <div key={key}>
          <label>{key}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default SettingsPage;
