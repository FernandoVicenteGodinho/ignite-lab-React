import { gql, useQuery } from "@apollo/client";
import Lesson from "./Lesson";

const GET_LESSONS_QUERRY = gql`
  query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;
interface GeyLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "Live" | "Class";
  }[];
}
export default function Sidebar() {
  const { data } = useQuery<GeyLessonsQueryResponse>(GET_LESSONS_QUERRY);
  console.log(data);
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              title={lesson.title}
              slug={lesson.slug}
              avaliableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              key={lesson.id}
            />
          );
        })}
      </div>
    </aside>
  );
}
