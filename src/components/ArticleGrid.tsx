import { Article } from "@/types/article";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

interface ArticleGridProps {
  articles: Article[];
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
  dayjs.extend(relativeTime);
  return (
    <div className="grid">
      {articles.map((article) => {
        const timePassed = dayjs().from(dayjs(article._createdAt), true);
        return (
          <a href={`artykuly/${article.slug}`}>
            <article className="bg-white rounded-md drop-shadow-sm p-4 flex flex-col justify-between">
              <Image
                src={article.image}
                alt={article.name}
                className="rounded-lg drop-shadow-xl w-full h-48 object-cover"
                width={400}
                height={400}
              />
              <div className="pt-4">
                <p className="text-lg font-semibold">{article.name}</p>
                <p className="font-light">{timePassed} temu</p>
              </div>
            </article>
          </a>
        );
      })}
    </div>
  );
};

export default ArticleGrid;
