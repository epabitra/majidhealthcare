import PageHero from '../components/common/PageHero';
import ArticleCard from '../components/common/ArticleCard';
import { articles } from '../data/articles';
import './Articles.css';

export default function Articles() {
  return (
    <>
      <PageHero
        breadcrumb="Health Articles"
        eyebrow="Health Articles"
        title="Family Health & Diabetes Articles"
        description="Practical, easy-to-understand health information from the Majid Healthcare team. For general education only — always consult Dr. Majid for advice specific to you."
      />

      <section className="section articles-section">
        <div className="container">
          <div className="grid articles-grid">
            {articles.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
