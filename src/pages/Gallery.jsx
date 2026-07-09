import { useMemo, useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PageHero from '../components/common/PageHero';
import { galleryImages } from '../data/gallery';
import './Gallery.css';

const categories = ['All', ...new Set(galleryImages.map((img) => img.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const openLightbox = (id) => {
    setLightboxIndex(filtered.findIndex((img) => img.id === id));
  };

  const closeLightbox = () => setLightboxIndex(null);

  const step = (dir) => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      const next = (prev + dir + filtered.length) % filtered.length;
      return next;
    });
  };

  const activeImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <PageHero
        breadcrumb="Gallery"
        eyebrow="Inside Majid Healthcare"
        title="Clinic Gallery"
        description="A look at our clinic, our facilities, and our community outreach work."
      />

      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter${activeCategory === cat ? ' is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((image) => (
              <button
                className="gallery-item"
                key={image.id}
                onClick={() => openLightbox(image.id)}
                aria-label={`View larger image: ${image.caption}`}
              >
                <img src={image.src} alt={image.caption} loading="lazy" />
                <span className="gallery-item__caption">{image.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
            <FaTimes />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.caption} />
            <p>{activeImage.caption}</p>
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
}
