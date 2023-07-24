import getArticles from "@/sanity/sanity-utils";

const Page: React.FC = async ({}) => {
  const articles = await getArticles();
  return (
    <div>
      <h1>Fotowoltaika Śliwson Sp.z.o.o</h1>
      {articles.map((article) => (
        <div key={article._id}>
          <p className="text-2xl">{article.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
