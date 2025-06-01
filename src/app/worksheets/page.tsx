import { Accordion } from '@/components/Accordion';
import { TopicList } from '@/components/TopicList';

const TOPICS = {
  algebra: {
    title: 'Основные темы по алгебре:',
    topics: [
      'Линейные уравнения',
      'Квадратные уравнения',
      'Системы уравнений',
      'Функции и графики'
    ]
  },
  geometry: {
    title: 'Разделы геометрии:',
    topics: [
      'Планиметрия',
      'Стереометрия',
      'Тригонометрия',
      'Векторы'
    ]
  },
  calculus: {
    title: 'Темы математического анализа:',
    topics: [
      'Производные',
      'Интегралы',
      'Пределы',
      'Ряды'
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
