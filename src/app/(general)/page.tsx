import getAllArticles from "@/sanity/get-all-articles";
import Illustration from "@/public/engineer.svg";
import Image from "next/image";
import { Article } from "@/types/article";
import ArticleGrid from "@/components/ArticleGrid";
import MockContactForm from "@/components/MockContactForm";
import { Partner } from "@/types/partner";
import getAllPartners from "@/sanity/get-all-partners";
import PartnersMarquee from "@/components/PartnersMarquee";

const Hero: React.FC = async ({}) => {
  const articles: Article[] = await getAllArticles();
  const partners: Partner[] = await getAllPartners();
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
      <section className="px-4 container mx-auto">
        <div className="py-12 flex flex-col space-y-4">
          <div>
            <h2 className="text-3xl text-center text-slate-800 font-bold leading-tight">
              Współpracujący partnerzy
            </h2>
            <p className="font-light text-center text-slate-700">
              Firmy wraz z którymi dostarczamy usługi najwyższej jakości
            </p>
          </div>
          <PartnersMarquee partners={partners} />
        </div>
      </section>
      <section className="px-4 bg-slate-100 container mx-auto">
        <div className="py-6 flex flex-col space-y-4">
          <div>
            <h3 className="text-3xl text-center font-bold leading-tight text-slate-800">
              Aktualności
            </h3>
            <p className="font-light text-center text-slate-700">
              Nasze artykuły, informacje rynkowe i prognozy
            </p>
          </div>
          <ArticleGrid articles={articles} />
        </div>
      </section>
      <section className="px-4 container mx-auto">
        <div className="py-6 flex flex-col items-center space-y-4">
          <div>
            <h4 className="text-3xl text-center text-slate-800 font-bold leading-tight">
              Skontaktuj się z nami
            </h4>
            <p className="font-light text-center text-slate-700">
              Poniżej zostaw swoje dane kontaktowe a my z chęcią się z tobą skontaktujemy
            </p>
          </div>
          <MockContactForm />
        </div>
      </section>
    </>
  );
};

export default Hero;
