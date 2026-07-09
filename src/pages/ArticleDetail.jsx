import { useParams, Link, Navigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { articles } from '../data/articles';
import resolveIcon from '../utils/iconMap';
import CtaBanner from '../components/common/CtaBanner';
import './ArticleDetail.css';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const Icon = resolveIcon(article.icon);
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);
  const publishedDate = new Date(article.publishedDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <article className="article-detail">
        <div className="article-detail__cover">
          <Icon aria-hidden="true" />
        </div>
        <div className="container article-detail__container">
          <Link to="/articles" className="article-detail__back">
            <FaArrowLeft aria-hidden="true" /> All Articles
          </Link>
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <div className="article-detail__meta">
            <span>
              <FaCalendarAlt aria-hidden="true" /> {publishedDate}
            </span>
            <span>
              <FaClock aria-hidden="true" /> {article.readTime}
            </span>
          </div>

          <div className="article-detail__body">
            {article.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="article-detail__disclaimer">
            This article is for general information only and is not a substitute for
            professional medical advice. Please consult Dr. Majid for guidance specific to your
            health.
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section section-alt article-related">
          <div className="container">
            <h2>More Health Articles</h2>
            <div className="article-related__list">
              {related.map((a) => (
                <Link to={`/articles/${a.slug}`} key={a.slug} className="article-related__item">
                  {a.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
