interface TopicListProps {
  title: string;
  topics: readonly string[];
  className?: string;
}

export const TopicList = ({ title, topics, className = '' }: TopicListProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <p className="text-gray-700">{title}</p>
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}; 