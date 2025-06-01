import Link from 'next/link';

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
      <p className="text-gray-700 text-[0.95em]">{title}</p>
      <ul className="list-disc list-inside space-y-1 text-gray-600 [&>li::marker]:text-red-600 text-[0.95em]">
        {topics.map((topic, index) => (
          <li key={index}>
            <Link 
              href={topic.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 hover:underline transition-colors"
            >
              {topic.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}; 