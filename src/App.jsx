import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <p className="arabic"> بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>

        <h1>نُورُ الإِسْلَام</h1>

        <h2>Light of Islamic Knowledge & Guidance</h2>

        <p>
          Explore the beauty of the Quran, Hadith, Islamic knowledge,
          and inspiring articles.
        </p>

        <div className="hero-buttons">
          <Link to="/quran">Explore Quran</Link>
          <Link to="/hadith">Explore Hadith</Link>
        </div>
      </div>
    </div>
  );
}
function Quran() {
  const verses = [
    {
      id: 1,
      arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translation: "Indeed, with hardship comes ease.",
      reference: "Surah Ash-Sharh, 94:6",
    },
    {
      id: 2,
      arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
      translation: "So remember Me; I will remember you.",
      reference: "Surah Al-Baqarah, 2:152",
    },
  ];

  return (
    <div className="content-page article-detail">
      <p className="arabic-title">الْقُرْآنُ الْكَرِيمُ</p>

      <h1>Holy Quran</h1>

      <p>
        Explore the words of Allah and discover guidance,
        wisdom, and peace through the Holy Quran.
      </p>

      {verses.map((verse) => (
        <div className="info-card" key={verse.id}>
          <h2>۞ Quranic Guidance</h2>

          <p className="quran-text">{verse.arabic}</p>

          <p>“{verse.translation}”</p>

          <p className="reference">— {verse.reference}</p>
        </div>
      ))}
    </div>
  );
}
function Hadith() {
  const hadiths = [
    {
      id: 1,
      text: "Actions are judged by intentions, and every person will get what they intended.",
      narrator: "Narrated by Umar ibn al-Khattab (RA)",
      reference: "Sahih al-Bukhari 1, Sahih Muslim 1907",
    },
    {
      id: 2,
      text: "None of you truly believes until he loves for his brother what he loves for himself.",
      narrator: "Narrated by Anas ibn Malik (RA)",
      reference: "Sahih al-Bukhari 13, Sahih Muslim 45",
    },
    {
      id: 3,
      text: "The best among you are those who learn the Quran and teach it.",
      narrator: "Narrated by Uthman ibn Affan (RA)",
      reference: "Sahih al-Bukhari 5027",
    },
  ];

  return (
    <div className="content-page article-detail">
      <p className="arabic-title">الْحَدِيثُ الشَّرِيفُ</p>

      <h1>Hadith</h1>

      <p>
        Read authentic sayings of the Prophet Muhammad (peace be upon him)
        and learn from his guidance.
      </p>

      {hadiths.map((hadith) => (
        <div className="info-card" key={hadith.id}>
          <h2>❝ Hadith ❞</h2>

          <p>“{hadith.text}”</p>

          <p>{hadith.narrator}</p>

          <p className="reference">— {hadith.reference}</p>
        </div>
      ))}
    </div>
  );
}
function Articles() {
  const [search, setSearch] = useState("");
  const articles = [
    {
      id: 1,
      title: "Importance of Salah",
      description:
        "Salah is one of the most important acts of worship in Islam."
    },
    {
      id: 2,
      title: "Patience in Islam",
      description:
        "Islam teaches us to remain patient and trust Allah during difficulties."
    },
    {
      id: 3,
      title: "The Beauty of Charity",
      description:
        "Charity brings kindness, compassion, and blessings into our lives."
    }
  ];

  return (
    <div className="content-page">
      <p className="arabic-title">مَقَالَاتٌ إِسْلَامِيَّةٌ</p>

      <h1>Islamic Articles</h1>

      <p>
        Read simple and inspiring articles about Islamic teachings
        and everyday life.
      </p>
     <input
  type="text"
  placeholder="Search articles..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="article-search"
/> 
  <div className="articles">
   {articles
  .filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  )
  .map((article) => (
    <div className="article-card" key={article.id}>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <Link to={`/articles/${article.id}`} className="read-more">
        Read More
      </Link>
    </div>
  ))}
</div>
      </div>
  );
}
function ArticleDetails() {
  const { id } = useParams();

  const articleData = {
    1: {
      title: "Importance of Salah",
      text: "Salah is one of the most important acts of worship in Islam. It helps Muslims remember Allah and maintain a strong connection with Allah."
    },
    2: {
      title: "Patience in Islam",
      text: "Islam teaches us to remain patient during difficult times and trust Allah during difficulties. Patience gives us strength and hope."
    },
    3: {
      title: "The Beauty of Charity",
      text: "Charity brings kindness, compassion, and blessings into our lives. Helping others is an important part of Islamic teachings."
    }
  };

  const article = articleData[id];

  return (
    <div className="content-page">
      <p className="arabic-title">مَقَالٌ إِسْلَامِيٌّ</p>

      <h1>{article ? article.title : "Article Not Found"}</h1>

      <div className="info-card">
        <p>
          {article
            ? article.text
            : "The article you are looking for does not exist."}
        </p>

        <Link to="/articles" className="back-link">
          ← Back to Articles
        </Link>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="content-page">
      <p className="arabic-title">نُورُ الإِسْلَام</p>

      <h1>About Us</h1>

      <p>
        Noor of Islam is a platform created to provide simple,
        accessible, and beneficial Islamic knowledge.
      </p>

      <div className="info-card">
        <h2>Our Purpose</h2>
        <p>
          Our goal is to make Islamic knowledge easy to explore
          through Quran, Hadith, and educational articles.
        </p>
      </div>
    </div>
  );
}
function NotFound() {
  return (
    <div className="content-page">
      <p className="arabic-title">عَفْوًا</p>

      <h1>Page Not Found</h1>

      <p>
        The page you are looking for does not exist.
      </p>

      <div className="info-card">
        <h2>404</h2>
        <p>Please return to the homepage and continue exploring Noor of Islam.</p>

        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
function Contact() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const contactData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      message: form.elements.message.value
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contactData)
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        form.reset();
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to send message. Please try again.");
    }
  }

  return (
    <div className="content-page">
      <p className="arabic-title">تَوَاصُل</p>

      <h1>Contact Us</h1>

      <p>
        Have a question or suggestion? We would love to hear from you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {message && <p className="success-message">{message}</p>}
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="logo">
           نُورُ الإِسْلَام
        </Link>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quran">Quran</NavLink>
          <NavLink to="/hadith">Hadith</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/hadith" element={<Hadith />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
      <footer>
  <p>© 2026 Noor of Islam</p>
  <p>Light of Islamic Knowledge & Guidance ❤️</p>
</footer>
    </BrowserRouter>
  );
}

export default App;