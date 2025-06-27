import React, { useState, useEffect } from "react";

interface Props {
  content: string;
  onTagsSuggested: (tags: string[]) => void;
}

const AutoTagSuggester: React.FC<Props> = ({ content, onTagsSuggested }) => {
  const [suggestedTags, setSuggestedTags] = useState<string[]>([]);

  useEffect(() => {
    if (!content) {
      setSuggestedTags([]);
      return;
    }
    // Simple keyword-based tag suggestion (placeholder)
    const keywords = ["urgent", "idea", "bug", "feedback", "question"];
    const tags = keywords.filter((kw) =>
      content.toLowerCase().includes(kw)
    );
    setSuggestedTags(tags);
    onTagsSuggested(tags);
  }, [content, onTagsSuggested]);

  return (
    <div>
      <h4>Suggested Tags</h4>
      <ul>
        {suggestedTags.length > 0 ? (
          suggestedTags.map((tag) => <li key={tag}>{tag}</li>)
        ) : (
          <li>No tags suggested</li>
        )}
      </ul>
    </div>
  );
};

export default AutoTagSuggester;
