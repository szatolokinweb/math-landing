interface Topic {
  name: string;
  pdfUrl: string;
}

interface TopicListProps {
  title: string;
  topics: readonly Topic[];
  className?: string;
}

export const TopicList = ({ title, topics, className = '' }: TopicListProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <p className="text-gray-700">{title}</p>
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        {topics.map((topic, index) => (
          <li key={index}>
            <a 
              href={topic.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              {topic.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}; 