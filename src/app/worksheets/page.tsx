import { Accordion } from '@/components/Accordion';
import { TopicList } from '@/components/TopicList';

const TOPICS = {
  algebra: {
    title: 'Основные темы по алгебре:',
    topics: [
      {
        name: 'Линейные уравнения',
        pdfUrl: '/test.pdf'
      },
      {
        name: 'Квадратные уравнения',
        pdfUrl: '/test.pdf'
      },
      {
        name: 'Системы уравнений',
        pdfUrl: '/test.pdf'
      },
      {
        name: 'Функции и графики',
        pdfUrl: '/test.pdf'
      }
    ]
  },
  geometry: {
    title: 'Разделы геометрии:',
    topics: [
      {
        name: 'Планиметрия',
        pdfUrl: '/test.pdf'
      },
      {
        name: 'Стереометрия',
        pdfUrl: '/test.pdf'
      },
      {
        name: 'Тригонометрия',
        pdfUrl: '/test.pdf'
      },
      {
        name: 'Векторы',
        pdfUrl: '/test.pdf'
      }
    ]
  },
  calculus: {
    title: 'Темы математического анализа:',
    topics: [
      {
        name: 'Производные',
        pdfUrl: '/test.pdf'
      },
      {
        name: 'Интегралы',
        pdfUrl: '/test.pdf'
      },
      {
        name: 'Пределы',
        pdfUrl: '/test.pdf'
      },
      {
        name: 'Ряды',
        pdfUrl: '/test.pdf'
      }
    ]
  }
} as const;

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Учебные материалы</h1>
      
      <div className="space-y-4">
        <Accordion title="Алгебра" defaultOpen={true}>
          <TopicList {...TOPICS.algebra} />
        </Accordion>

        <Accordion title="Геометрия">
          <TopicList {...TOPICS.geometry} />
        </Accordion>

        <Accordion title="Математический анализ">
          <TopicList {...TOPICS.calculus} />
        </Accordion>
      </div>
    </div>
  );
}
