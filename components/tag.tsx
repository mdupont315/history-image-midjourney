import React, { useState } from "react";
import { Space, Tag } from "antd";

const { CheckableTag } = Tag;

interface Props {
  Data: string[];
  onClick?: (tag: string) => void;
}

const App = ({ Data, onClick }: Props) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const handleChange = (tag: string, checked: boolean) => {
    if (!checked) return;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    onClick && onClick(tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <>
      <Space className="ml-5" size={16} wrap>
        {Data.map((tag) => (
          <CheckableTag
            className={
              selectedTags.includes(tag) ? "bg-neutral-700" : "bg-neutral-200"
            }
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </Space>
    </>
  );
};

export default App;
