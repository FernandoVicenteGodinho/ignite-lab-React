import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
interface LeassonProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: "Live" | "Class";
}
export default function Lesson(props: LeassonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLeasson = isPast(props.avaliableAt);
  const DataFormatada = format(
    props.avaliableAt,
    "EEEE' ° ' d' de 'MMMM' ° 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className=" text-gray-300"> {DataFormatada}</span>
      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson ? "bg-green-500" : ""
        }`}
      >
        <header className="flex items-center justify-between">
          {isLeasson ? (
            <span
              className={`text-sm${
                isActiveLesson ? "text-white" : "text-blue-500"
              } font-medium flex items-center gap-2`}
            >
              <CheckCircle size={20} />
              Conteudo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              EM BREVE
            </span>
          )}
          <span
            className={`text-xs rounded px-2 py-[2px] text-white border ${
              isActiveLesson ? "border-white" : "border-green-500"
            } font-bold`}
          >
            {props.type === "Live" ? "AOVIVO" : "AULA PRATICA"}
          </span>
        </header>
        <strong
          className={`${
            isActiveLesson ? "text-white" : "text-gray-200"
          } mt-t block`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
