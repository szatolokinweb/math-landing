import { Accordion } from '@/components/Accordion';
import { TopicList } from '@/components/TopicList';

const TOPICS = {
  algebra: {
    title: 'Основные темы по алгебре:',
    topics: [
      {
        name: 'Линейные уравнения',
        pdfUrl: '/algebra/linear-equations.pdf'
      },
      {
        name: 'Квадратные уравнения',
        pdfUrl: '/algebra/quadratic-equations.pdf'
      },
      {
        name: 'Системы уравнений',
        pdfUrl: '/algebra/systems-of-equations.pdf'
      },
      {
        name: 'Функции и графики',
        pdfUrl: '/algebra/functions-and-graphs.pdf'
      }
    ]
  },
  geometry: {
    title: 'Разделы геометрии:',
    topics: [
      {
        name: 'Планиметрия',
        pdfUrl: '/geometry/planimetry.pdf'
      },
      {
        name: 'Стереометрия',
        pdfUrl: '/geometry/stereometry.pdf'
      },
      {
        name: 'Тригонометрия',
        pdfUrl: '/geometry/trigonometry.pdf'
      },
      {
        name: 'Векторы',
        pdfUrl: '/geometry/vectors.pdf'
      }
    ]
  },
  calculus: {
    title: 'Темы математического анализа:',
    topics: [
      {
        name: 'Производные',
        pdfUrl: '/calculus/derivatives.pdf'
      },
      {
        name: 'Интегралы',
        pdfUrl: '/calculus/integrals.pdf'
      },
      {
        name: 'Пределы',
        pdfUrl: '/calculus/limits.pdf'
      },
      {
        name: 'Ряды',
        pdfUrl: '/calculus/series.pdf'
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
