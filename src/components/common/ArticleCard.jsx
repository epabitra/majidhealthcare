import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import resolveIcon from '../../utils/iconMap';
import './ArticleCard.css';

export default function ArticleCard({ article }) {
  const Icon = resolveIcon(article.icon);

  return (
    <article className="article-card">
      <div className="article-card__cover">
        <Icon aria-hidden="true" />
      </div>
      <div className="article-card__body">
        <span className="article-card__category">{article.category}</span>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="article-card__meta">
          <span>{article.readTime}</span>
          <Link to={`/articles/${article.slug}`} className="article-card__link">
            Read article <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
