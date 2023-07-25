import getArticles from "@/sanity/sanity-utils";
import Illustration from "@/public/engineer.svg";
import Image from "next/image";
import { Article } from "@/types/article";
import ArticleGrid from "@/components/ArticleGrid";

const Hero: React.FC = async ({}) => {
  const articles: Article[] = await getArticles();
  return (
    <>
      <section className="px-4">
        <div className="py-12 flex flex-col items-center gap-6">
          <h1 className="text-3xl text-center font-bold leading-tight">
            Tanie rozwiązania fotowoltaiczne w twojej okolicy
          </h1>
          <Image src={Illustration} alt="" width={400} height={280} />
        </div>
      </section>
      <section className="px-4 bg-slate-100 grow">
        <div className="py-6 flex flex-col space-y-4">
          <h2 className="text-3xl text-center font-semibold leading-tight">
            Nasze artykuły
          </h2>
          <ArticleGrid articles={articles} />
        </div>
      </section>
    </>
  );
};

export default Hero;
