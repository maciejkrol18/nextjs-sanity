import getArticle from "@/sanity/get-article";
import { PortableText } from "@portabletext/react";
import dayjs from "dayjs";

interface ArticlePageProps {
  params: { slug: string };
}

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const slug = params.slug;
  const article = await getArticle(slug as string);
  console.log(article.image);
  const datePosted = dayjs(article._createdAt).format("D MMMM YYYY [roku]");
  return (
    <>
      <div
        className="mt-8 w-full h-48"
        style={{
          backgroundImage: `url(${article.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <section className="container mx-auto space-y-2">
        <div className="flex flex-col space-y-2 px-4">
          <div className="my-2 text-center">
            <h1 className="text-slate-800 text-3xl font-black leading">{article.name}</h1>
            <p className="text-slate-700 font-light">Data utworzenia: {datePosted}</p>
          </div>

          <div className="text-slate-800 text-justify">
            <PortableText value={article.content} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
