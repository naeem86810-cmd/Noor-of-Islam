```jsx
function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <p className="arabic"> بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>

        <h1> نُورُ الإِسْلَام</h1>

        <h2>Light of Knowledge & Guidance</h2>

        <p>
          Explore the beauty of the Quran, authentic Hadith,
          and meaningful Islamic knowledge.
        </p>

        <div className="hero-buttons">
          <Link to="/quran" className="gold-btn">
            Explore Quran
          </Link>

          <Link to="/hadith" className="outline-btn">
            Read Hadith
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="features">

        <div className="feature-card">
          <div className="icon">☪</div>
          <h3>Holy Quran</h3>
          <p>
            Read and explore the teachings of the Holy Quran.
          </p>
          <Link to="/quran">Explore →</Link>
        </div>

        <div className="feature-card">
          <div className="icon">📖</div>
          <h3>Hadith</h3>
          <p>
            Discover authentic sayings and teachings of the Prophet ﷺ.
          </p>
          <Link to="/hadith">Read →</Link>
        </div>

        <div className="feature-card">
          <div className="icon">✦</div>
          <h3>Islamic Articles</h3>
          <p>
            Learn about Islamic values, history, and daily guidance.
          </p>
          <Link to="/articles">Read Articles →</Link>
        </div>

      </section>

      {/* Quote Section */}
      <section className="quote">
        <p className="arabic">
          إِنَّ مَعَ الْعُسْرِ يُسْرًا
        </p>

        <p>
          "Indeed, with hardship comes ease."
        </p>

        <span>— Quran 94:6</span>
      </section>

    </div>
  );
}
```

