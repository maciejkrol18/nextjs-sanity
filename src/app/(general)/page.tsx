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
          <h1 className="text-3xl text-center text-slate-800 font-bold leading-tight">
            Tanie rozwiązania fotowoltaiczne w twojej okolicy
          </h1>
          <Image src={Illustration} alt="" width={400} height={280} />
        </div>
      </section>
      <section className="px-4 bg-slate-100 container mx-auto grow">
        <div className="py-6 flex flex-col space-y-4">
          <div>
            <h2 className="text-3xl text-center font-bold leading-tight text-slate-800">
              Aktualności
            </h2>
            <p className="font-light text-center text-slate-700">
              Nasze artykuły, informacje rynkowe i prognozy
            </p>
          </div>
          <ArticleGrid articles={articles} />
        </div>
      </section>
      <section className="px-4 container mx-auto">
        <div className="py-6 flex flex-col space-y-4">
          <div>
            <h3 className="text-3xl text-center text-slate-800 font-bold leading-tight">
              Skontaktuj się z nami
            </h3>
            <p className="font-light text-center text-slate-700">
              Poniżej zostaw swoje dane kontaktowe a my z chęcią się z tobą skontaktujemy
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
