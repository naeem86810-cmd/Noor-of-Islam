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
function IslamicKnowledge() {
  return (
    <section className="content-page" id="top">
      <h1>Islamic Knowledge</h1>

<p className="knowledge-intro">
  Explore authentic Islamic teachings, beliefs, worship, character,
  history, family life, and guidance for everyday life.
</p>

<p className="knowledge-bismillah">
  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
</p>
      <h1>Islamic Knowledge</h1>
      <div className="knowledge-menu">
  <h2>Explore Islamic Knowledge</h2>

  <div className="knowledge-menu-links">
    <a href="#introduction">Introduction to Islam</a>
    <a href="#beliefs">Beliefs in Islam</a>
    <a href="#pillars">Five Pillars</a>
    <a href="#quran">The Quran</a>
    <a href="#seerah">Prophet Muhammad ﷺ</a>
    <a href="#prophets">Prophets in Islam</a>
    <a href="#hadith">Hadith and Sunnah</a>
    <a href="#salah">Salah</a>
    <a href="#ramadan">Ramadan</a>
    <a href="#zakat">Zakat</a>
    <a href="#hajj">Hajj and Umrah</a>
    <a href="#family">Family</a>
    <a href="#women">Women in Islam</a>
    <a href="#youth">Children and Youth</a>
    <a href="#eid">Eid</a>
    <a href="#tawbah">Tawbah</a>
    <a href="#masjid">Masjid and Community</a>
    <a href="#faq">Common Questions</a>
    <a href="#daily-life">Daily Life</a>
    <a href="#history">Islamic History</a>
  </div>
</div>

      <p>
        Learn the basic teachings, beliefs, values, and important concepts of Islam.
      </p>
      <div className="knowledge-card" id="introduction">
  <h2>Introduction to Islam</h2>
  <p>
    Islam is a monotheistic religion based on the belief in one God, Allah.
    The word Islam is associated with submission and devotion to Allah.
    Muslims believe that Allah sent guidance to humanity through His
    prophets and messengers.
  </p>

  <p>
    Muslims believe that Muhammad ﷺ is the final Messenger of Allah and
    that the Quran is the final revealed scripture. Islam teaches people
    to worship Allah, live with good character, seek justice, show mercy,
    help those in need, and prepare for the Hereafter.
  </p>

  <p>
    The basic practices of Islam are known as the Five Pillars, while the
    fundamental beliefs are commonly summarized as the Six Articles of Faith.
  </p>
   </div>
  <div className="knowledge-card" id="beliefs">
  <h2>Beliefs in Islam</h2>

  <h3>Tawheed – Oneness of Allah</h3>
  <p>
    Tawheed means believing that Allah is One and has no partner.
    Muslims worship Allah alone and believe that He is the Creator,
    Sustainer, and Lord of everything.
  </p>

  <h3>Belief in Angels</h3>
  <p>
    Muslims believe that angels are created by Allah and obey His commands.
    They perform different duties assigned to them by Allah.
  </p>

  <h3>Belief in Divine Books</h3>
  <p>
    Muslims believe that Allah sent revealed books as guidance for humanity.
    These include the Tawrat, Zabur, Injil, and the Quran. Muslims believe
    that the Quran is the final revealed book of Allah.
  </p>

  <h3>Belief in Prophets and Messengers</h3>
  <p>
    Muslims believe that Allah sent prophets and messengers to guide people.
    They include Adam, Nuh, Ibrahim, Musa, Isa, and Muhammad ﷺ.
    Muslims believe that Muhammad ﷺ is the final Messenger of Allah.
  </p>

  <h3>Belief in the Day of Judgment</h3>
  <p>
    Muslims believe that everyone will be resurrected and held accountable
    for their deeds. People will be rewarded or punished according to the
    judgment of Allah.
  </p>

  <h3>Belief in Divine Decree</h3>
  <p>
    Muslims believe in Allah's knowledge and decree. Allah knows everything,
    while human beings are responsible for their choices and actions.
  </p>
  </div>
  <div className="knowledge-card" id="pillars">
  <h2>Five Pillars of Islam</h2>

  <h3>1. Shahadah – Declaration of Faith</h3>
  <p>
    Shahadah is the declaration of faith and the foundation of Islam.
    A Muslim testifies that there is no deity worthy of worship except Allah
    and that Muhammad ﷺ is the Messenger of Allah.
  </p>

  <h3>2. Salah – Prayer</h3>
  <p>
    Salah is the five daily prayers performed by Muslims. Prayer connects
    a person with Allah and teaches discipline, remembrance, humility,
    and gratitude.
  </p>
  <p>
    The five obligatory prayers are Fajr, Dhuhr, Asr, Maghrib, and Isha.
  </p>

  <h3>3. Zakat – Obligatory Charity</h3>
  <p>
    Zakat is an obligatory form of charity for Muslims who meet the required
    conditions. It helps eligible people in need and encourages Muslims
    to share their wealth and care for society.
  </p>

  <h3>4. Sawm – Fasting</h3>
  <p>
    Sawm refers to fasting during the month of Ramadan. From dawn until
    sunset, Muslims abstain from food and drink and also strive to avoid
    sinful behavior.
  </p>
  <p>
    Fasting develops self-control, patience, gratitude, and awareness of
    people who experience hunger and hardship.
  </p>

  <h3>5. Hajj – Pilgrimage</h3>
  <p>
    Hajj is the pilgrimage to Makkah that Muslims are required to perform
    once in their lifetime if they are physically and financially able to
    do so.
  </p>
  <p>
    Hajj takes place during the Islamic month of Dhul-Hijjah and includes
    important acts of worship connected with the sacred sites of Makkah.
  </p>
  </div>
  <div className="knowledge-card" id="quran">
  <h2>The Quran</h2>

  <h3>What is the Quran?</h3>
  <p>
    The Quran is the holy book of Islam and is believed by Muslims to be
    the word of Allah revealed to Prophet Muhammad ﷺ through Angel Jibril
    (Gabriel).
  </p>

  <h3>Revelation of the Quran</h3>
  <p>
    The Quran was revealed to Prophet Muhammad ﷺ over a period of approximately
    twenty-three years. The first revelation began in the Cave of Hira near
    Makkah.
  </p>

  <h3>Language of the Quran</h3>
  <p>
    The Quran was revealed in Arabic. Muslims around the world recite its
    original Arabic text during their worship and study its meanings through
    translations and explanations.
  </p>

  <h3>Structure of the Quran</h3>
  <p>
    The Quran contains 114 Surahs (chapters). Each Surah consists of Ayahs
    (verses). The Surahs vary in length and cover subjects such as faith,
    worship, morality, history, guidance, family life, justice, and the
    Hereafter.
  </p>

  <h3>Purpose of the Quran</h3>
  <p>
    The Quran provides guidance for human beings. It teaches Muslims about
    worshipping Allah, developing good character, dealing with others fairly,
    avoiding wrongdoing, and preparing for the Hereafter.
  </p>

  <h3>Reading and Understanding the Quran</h3>
  <p>
    Muslims are encouraged to recite the Quran, reflect upon its teachings,
    understand its meaning, and apply its guidance in their daily lives.
    Learning from reliable translations and explanations can help readers
    understand the message of the Quran.
  </p>

  <h3>Respect for the Quran</h3>
  <p>
    Muslims treat the Quran with great respect because they believe it is
    the revealed word of Allah. They approach its recitation and study with
    cleanliness, attention, humility, and reverence.
  </p>
  </div>
  <div className="knowledge-card" id="seerah">
  <h2>Prophet Muhammad ﷺ – Seerah and Life</h2>

  <h3>Birth and Family</h3>
  <p>
    Prophet Muhammad ﷺ was born in Makkah. He belonged to the respected
    Quraysh tribe and the family of Banu Hashim. His father was Abdullah
    and his mother was Aminah.
  </p>

  <h3>Childhood and Early Life</h3>
  <p>
    Prophet Muhammad ﷺ experienced hardship from an early age. He became
    known among his people for his honesty, trustworthiness, and excellent
    character.
  </p>

  <h3>Al-Amin – The Trustworthy</h3>
  <p>
    Before receiving revelation, Prophet Muhammad ﷺ was widely respected
    by the people of Makkah. He was known as Al-Amin, meaning "the
    trustworthy", because of his honesty and reliability.
  </p>

  <h3>Marriage to Khadijah رضي الله عنها</h3>
  <p>
    Prophet Muhammad ﷺ married Khadijah رضي الله عنها. She was a respected
    and successful woman who supported him during the early years of his
    mission.
  </p>

  <h3>First Revelation</h3>
  <p>
    At the age of forty, Prophet Muhammad ﷺ received the first revelation
    from Allah through Angel Jibril (Gabriel) while he was in the Cave of
    Hira. This marked the beginning of his prophethood and the revelation
    of the Quran.
  </p>

  <h3>Message of Islam</h3>
  <p>
    Prophet Muhammad ﷺ called people to worship Allah alone, abandon
    idolatry, practice justice, show mercy, speak truthfully, care for
    the poor, and live according to the guidance of Allah.
  </p>

  <h3>Migration to Madinah</h3>
  <p>
    Because of persecution in Makkah, Prophet Muhammad ﷺ and his companions
    migrated to Madinah. This migration, known as the Hijrah, became an
    important event in Islamic history.
  </p>

  <h3>Life in Madinah</h3>
  <p>
    In Madinah, Prophet Muhammad ﷺ established a Muslim community based
    on faith, justice, cooperation, responsibility, and brotherhood.
    He taught people how to worship Allah and how to live with one another.
  </p>

  <h3>His Character</h3>
  <p>
    Prophet Muhammad ﷺ was known for mercy, patience, forgiveness,
    humility, honesty, courage, and kindness. His life provides Muslims
    with an example of good character and conduct.
  </p>

  <h3>The Final Messenger</h3>
  <p>
    Muslims believe that Prophet Muhammad ﷺ is the final Messenger of Allah.
    His message completed the chain of prophetic guidance and was intended
    for humanity.
  </p>

  <h3>His Legacy</h3>
  <p>
    The teachings and example of Prophet Muhammad ﷺ continue to guide
    Muslims around the world. His Sunnah, together with the Quran, is an
    important source of Islamic guidance.
  </p>
  </div>
  <div className="knowledge-card" id="prophets">
  <h2>Prophets in Islam</h2>

  <p>
    Muslims believe that Allah sent prophets and messengers to guide
    humanity. They taught people to worship Allah, follow His guidance,
    and live righteous lives. The Quran mentions many prophets by name.
  </p>

  <h3>Adam عليه السلام</h3>
  <p>
    Adam عليه السلام is regarded in Islam as the first human being and the
    first prophet. Allah created him and taught him knowledge. Muslims
    believe that humanity descends from Adam عليه السلام and his wife Hawwa.
  </p>

  <h3>Nuh عليه السلام</h3>
  <p>
    Nuh عليه السلام called his people to worship Allah alone and warned
    them against associating partners with Him. He remained patient while
    calling his people to faith.
  </p>

  <h3>Ibrahim عليه السلام</h3>
  <p>
    Ibrahim عليه السلام is an important prophet in Islam. He strongly
    rejected idol worship and called people towards the worship of Allah.
    He is remembered for his strong faith, obedience, and trust in Allah.
  </p>

  <h3>Ismail عليه السلام</h3>
  <p>
    Ismail عليه السلام was the son of Ibrahim عليه السلام. He is remembered
    for his obedience to Allah, patience, and righteousness. Islamic
    tradition also connects him with the building of the Kaaba together
    with his father Ibrahim عليه السلام.
  </p>

  <h3>Yusuf عليه السلام</h3>
  <p>
    Yusuf عليه السلام is known for his beautiful character, patience,
    forgiveness, and trust in Allah. His story is described in detail in
    Surah Yusuf and teaches important lessons about patience and forgiveness.
  </p>

  <h3>Musa عليه السلام</h3>
  <p>
    Musa عليه السلام was sent to guide the Children of Israel and was
    commanded by Allah to confront Pharaoh. Allah gave Musa عليه السلام
    signs and guidance, and he called his people to worship Allah.
  </p>

  <h3>Dawud عليه السلام</h3>
  <p>
    Dawud عليه السلام was a prophet and king. Allah gave him wisdom and
    judgment and revealed the Zabur to him.
  </p>

  <h3>Sulaiman عليه السلام</h3>
  <p>
    Sulaiman عليه السلام was a prophet and king who was given great wisdom
    and authority by Allah. He is remembered for his gratitude and wise
    judgment.
  </p>

  <h3>Yunus عليه السلام</h3>
  <p>
    Yunus عليه السلام called his people towards Allah. His story teaches
    important lessons about repentance, patience, and turning to Allah
    during hardship.
  </p>

  <h3>Isa عليه السلام</h3>
  <p>
    Isa عليه السلام was a prophet and messenger of Allah. Muslims believe
    that he was born miraculously to Maryam عليها السلام and was given
    signs by Allah. Muslims do not consider him divine; they believe he
    was a servant and messenger of Allah.
  </p>

  <h3>Muhammad ﷺ</h3>
  <p>
    Muhammad ﷺ is the final Messenger of Allah. Muslims believe that his
    message completed the chain of prophetic guidance and that the Quran
    was revealed to him as the final scripture.
  </p>
  </div>
  <div className="knowledge-card" id="hadith">
  <h2>Hadith and Sunnah</h2>

  <h3>What is Hadith?</h3>
  <p>
    Hadith refers to reports about the sayings, actions, approvals, and
    descriptions of Prophet Muhammad ﷺ. Hadith helps Muslims understand
    how the teachings of Islam were practiced by the Prophet ﷺ.
  </p>

  <h3>What is Sunnah?</h3>
  <p>
    Sunnah means the way, teachings, practices, and example of Prophet
    Muhammad ﷺ. Muslims study the Sunnah to learn how to apply Islamic
    teachings in their daily lives.
  </p>

  <h3>Importance of Hadith</h3>
  <p>
    Hadith provides important explanations and practical examples of
    Islamic teachings. It helps Muslims understand matters of worship,
    manners, family life, relationships, and many other aspects of life.
  </p>

  <h3>Major Collections of Hadith</h3>
  <p>
    Muslim scholars carefully collected, examined, and classified reports
    attributed to Prophet Muhammad ﷺ. Among the well-known Sunni collections
    are Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud, Jami at-Tirmidhi,
    Sunan an-Nasa'i, and Sunan Ibn Majah.
  </p>

  <h3>Authenticity of Hadith</h3>
  <p>
    Hadith scholars developed detailed methods for examining reports.
    They studied the chain of narrators and the text of a report to assess
    its reliability. Hadith are therefore classified into different
    categories according to their strength and authenticity.
  </p>

  <h3>Hadith and Daily Life</h3>
  <p>
    Hadith teaches Muslims many practical aspects of life, including
    kindness, honesty, patience, cleanliness, good manners, helping others,
    and maintaining good relationships.
  </p>

  <h3>Relationship Between Quran and Sunnah</h3>
  <p>
    The Quran is the revealed word of Allah, while the Sunnah provides the
    example and teachings of Prophet Muhammad ﷺ. Muslims study both to
    understand and practice Islam.
  </p>

  <h3>Learning Hadith Responsibly</h3>
  <p>
    Muslims should learn Hadith from reliable sources and qualified
    scholarship. When sharing a Hadith, it is important to check its
    source and authenticity rather than attributing an unverified saying
    to Prophet Muhammad ﷺ.
  </p>
  </div>
  <div className="knowledge-card" id="salah">
  <h2>Salah – The Five Daily Prayers</h2>

  <h3>What is Salah?</h3>
  <p>
    Salah is the formal prayer that Muslims perform as an important act of
    worship. The five daily prayers are obligatory for Muslims who are
    required to pray.
  </p>

  <h3>Importance of Salah</h3>
  <p>
    Salah helps Muslims remember Allah throughout the day. It develops
    discipline, humility, gratitude, patience, and awareness of Allah.
    Prayer is also an important way for a Muslim to seek guidance and
    forgiveness.
  </p>

  <h3>The Five Daily Prayers</h3>
  <ul>
    <li><strong>Fajr:</strong> The prayer performed before sunrise.</li>
    <li><strong>Dhuhr:</strong> The midday prayer.</li>
    <li><strong>Asr:</strong> The afternoon prayer.</li>
    <li><strong>Maghrib:</strong> The prayer performed after sunset.</li>
    <li><strong>Isha:</strong> The night prayer.</li>
  </ul>

  <h3>Preparation for Salah</h3>
  <p>
    Before praying, Muslims make sure that they are in a state of ritual
    purity, their clothes and prayer place are clean, and they face the
    direction of the Kaaba in Makkah. Wudu is commonly performed before
    prayer when required.
  </p>

  <h3>Wudu – Ablution</h3>
  <p>
    Wudu is a method of ritual purification performed before certain acts
    of worship. It includes washing specific parts of the body in a
    prescribed manner.
  </p>

  <h3>Facing the Qiblah</h3>
  <p>
    Muslims face the Kaaba in Makkah when performing Salah. This direction
    is called the Qiblah and provides a common direction of worship for
    Muslims around the world.
  </p>

  <h3>What Salah Includes</h3>
  <p>
    Salah includes standing, bowing, prostrating, sitting, recitation of
    Quranic verses, remembrance of Allah, and supplication. The exact
    number of units (Rak'ahs) differs between the five obligatory prayers.
  </p>

  <h3>Benefits of Regular Prayer</h3>
  <p>
    Regular prayer encourages Muslims to maintain a connection with Allah,
    remember Him frequently, develop self-discipline, and organize their
    daily lives around worship.
  </p>

  <h3>Salah and Good Character</h3>
  <p>
    Prayer is not only a physical act of worship. Muslims are encouraged
    to let the lessons of prayer influence their behavior by becoming more
    honest, patient, humble, kind, and conscious of Allah.
  </p>
  </div>
  <div className="knowledge-card" id="ramadan">
  <h2>Ramadan and Fasting</h2>

  <h3>What is Ramadan?</h3>
  <p>
    Ramadan is the ninth month of the Islamic lunar calendar. It is a
    special month of worship, reflection, charity, patience, and increased
    remembrance of Allah.
  </p>

  <h3>What is Sawm?</h3>
  <p>
    Sawm means fasting. During the daily fast of Ramadan, Muslims abstain
    from eating and drinking from dawn until sunset. They also strive to
    avoid sinful speech and behavior and focus on worship and good deeds.
  </p>

  <h3>Suhoor</h3>
  <p>
    Suhoor is the meal eaten before dawn by people who are fasting.
    Muslims are encouraged to take Suhoor and begin the fast before the
    time of Fajr.
  </p>

  <h3>Iftar</h3>
  <p>
    Iftar is the meal with which the daily fast is ended after sunset.
    Muslims commonly begin Iftar with dates and water, following the
    practice traditionally associated with Prophet Muhammad ﷺ.
  </p>

  <h3>Purpose of Fasting</h3>
  <p>
    Fasting teaches self-control, patience, gratitude, discipline, and
    awareness of people who experience hunger and hardship. It also
    encourages Muslims to increase their worship and consciousness of Allah.
  </p>

  <h3>Quran and Ramadan</h3>
  <p>
    Ramadan has a special connection with the Quran. Muslims increase
    Quran recitation, reflection, and study during this month. The Quran
    describes Ramadan as the month in which the Quran was revealed.
  </p>

  <h3>Laylat al-Qadr</h3>
  <p>
    Laylat al-Qadr, known as the Night of Decree or Night of Power, is a
    highly blessed night associated with Ramadan. Muslims seek it during
    the last ten nights of Ramadan and increase their worship and
    supplication.
  </p>

  <h3>Charity During Ramadan</h3>
  <p>
    Muslims are encouraged to give charity and help people in need during
    Ramadan. Zakat and voluntary charity can help support individuals and
    families facing financial difficulties.
  </p>

  <h3>Who May Be Excused from Fasting?</h3>
  <p>
    Islamic law provides concessions for certain circumstances, such as
    illness and travel, and there are specific rulings for other situations.
    The details can vary according to the circumstances, so Muslims should
    consult a trusted qualified scholar when they need guidance.
  </p>

  <h3>Eid al-Fitr</h3>
  <p>
    Eid al-Fitr marks the end of Ramadan. Muslims gather for the Eid prayer,
    express gratitude to Allah, spend time with family and community, and
    celebrate in a lawful and joyful manner.
  </p>
  </div>
  <div className="knowledge-card" id="zakat">
  <h2>Zakat and Charity</h2>

  <h3>What is Zakat?</h3>
  <p>
    Zakat is an obligatory form of charity in Islam. It is one of the Five
    Pillars of Islam and is required from Muslims who meet the conditions
    established in Islamic law.
  </p>

  <h3>Purpose of Zakat</h3>
  <p>
    Zakat helps eligible people in need and encourages Muslims to share
    their wealth responsibly. It also teaches generosity, gratitude,
    social responsibility, and care for the community.
  </p>

  <h3>Zakat and Wealth</h3>
  <p>
    Zakat is generally calculated on qualifying wealth when it reaches the
    required threshold and has been held for the required period. The exact
    rules can differ depending on the type of wealth and circumstances.
  </p>

  <h3>Who Can Receive Zakat?</h3>
  <p>
    The Quran identifies categories of people who may receive Zakat,
    including those who are poor or in need and other eligible categories.
    Zakat should be given according to Islamic guidelines.
  </p>

  <h3>Sadaqah – Voluntary Charity</h3>
  <p>
    Sadaqah is voluntary charity and can take many forms. A Muslim can
    give money, food, clothing, or other beneficial help to someone in need.
  </p>

  <h3>Every Good Deed</h3>
  <p>
    Charity in Islam is not limited to money. Helping someone, speaking
    kindly, removing something harmful from a person's path, and supporting
    others can also be forms of good deeds.
  </p>

  <h3>Helping Those in Need</h3>
  <p>
    Islam encourages Muslims to care for orphans, the poor, travelers,
    neighbors, relatives, and other people facing hardship. Helping others
    should be done with sincerity and without humiliating the person who
    receives help.
  </p>

  <h3>Benefits of Charity</h3>
  <p>
    Charity develops generosity and compassion. It reminds Muslims that
    wealth is a responsibility and encourages them to use what Allah has
    given them in beneficial ways.
  </p>
  </div>
  <div className="knowledge-card" id="hajj">
  <h2>Hajj and Umrah</h2>

  <h3>What is Hajj?</h3>
  <p>
    Hajj is the pilgrimage to the Sacred House in Makkah. It is one of the
    Five Pillars of Islam and is required once in a lifetime for a Muslim
    who is physically and financially able to perform it.
  </p>

  <h3>When is Hajj Performed?</h3>
  <p>
    Hajj is performed during specific days of the Islamic month of
    Dhul-Hijjah. Muslims from different countries gather in Makkah to
    perform the pilgrimage together.
  </p>

  <h3>Ihram</h3>
  <p>
    Ihram refers to the sacred state a pilgrim enters before performing
    certain rites of Hajj or Umrah. Pilgrims follow specific rules while
    they are in this state.
  </p>

  <h3>Tawaf</h3>
  <p>
    Tawaf is the act of circling the Kaaba seven times. It is an important
    part of both Hajj and Umrah and is performed as an act of worship to
    Allah.
  </p>

  <h3>Sa'i</h3>
  <p>
    Sa'i is walking between Safa and Marwah. It commemorates the search
    for water by Hajar, the wife of Ibrahim عليه السلام, and is an important
    rite of Hajj and Umrah.
  </p>

  <h3>Arafah</h3>
  <p>
    Standing at Arafah is a central rite of Hajj. Pilgrims spend part of
    the day at the plain of Arafah in prayer, remembrance of Allah,
    supplication, and repentance.
  </p>

  <h3>Muzdalifah</h3>
  <p>
    After Arafah, pilgrims travel to Muzdalifah, where they pray, remember
    Allah, and spend part of the night according to the rites of Hajj.
  </p>

  <h3>Mina</h3>
  <p>
    Mina is an important location during Hajj. Pilgrims stay there during
    specific days and perform the ritual stoning of the Jamarat as part
    of the pilgrimage.
  </p>

  <h3>Hajj and Unity</h3>
  <p>
    Hajj brings Muslims from different nations, languages, cultures, and
    backgrounds together in worship. It demonstrates equality, unity,
    humility, and devotion to Allah.
  </p>

  <h3>What is Umrah?</h3>
  <p>
    Umrah is a pilgrimage to Makkah that can be performed at various times
    of the year. It includes important acts such as Ihram, Tawaf, and Sa'i.
  </p>

  <h3>Difference Between Hajj and Umrah</h3>
  <p>
    Hajj has a specific time in the Islamic calendar and is one of the
    Five Pillars of Islam. Umrah can generally be performed throughout
    the year and is a separate pilgrimage.
  </p>
  </div>
<div className="knowledge-card" id="calendar">
  <h2>Islamic Calendar and Important Months</h2>
  <h3>The Islamic Calendar</h3>
  <p>
    The Islamic calendar is a lunar calendar consisting of twelve months.
    Its dates are based on the cycles of the moon. The Islamic calendar is
    used to determine important occasions such as Ramadan, Hajj, and Eid.
  </p>

  <h3>The Twelve Islamic Months</h3>
  <ol>
    <li>Muharram</li>
    <li>Safar</li>
    <li>Rabi al-Awwal</li>
    <li>Rabi al-Thani</li>
    <li>Jumada al-Awwal</li>
    <li>Jumada al-Thani</li>
    <li>Rajab</li>
    <li>Sha'ban</li>
    <li>Ramadan</li>
    <li>Shawwal</li>
    <li>Dhul-Qadah</li>
    <li>Dhul-Hijjah</li>
  </ol>

  <h3>Muharram</h3>
  <p>
    Muharram is the first month of the Islamic calendar and is one of the
    four sacred months in Islam. Muslims are encouraged to increase good
    deeds and worship during this month.
  </p>

  <h3>Rajab</h3>
  <p>
    Rajab is one of the four sacred months. Muslims are encouraged to
    respect the sacred months and avoid wrongdoing.
  </p>

  <h3>Sha'ban</h3>
  <p>
    Sha'ban is the month that comes before Ramadan. Muslims may use this
    month to prepare themselves spiritually for Ramadan and increase their
    worship.
  </p>

  <h3>Ramadan</h3>
  <p>
    Ramadan is the ninth month and is the month of fasting. Muslims fast
    from dawn until sunset and increase their Quran recitation, prayer,
    charity, remembrance, and other acts of worship.
  </p>

  <h3>Shawwal</h3>
  <p>
    Shawwal follows Ramadan. Eid al-Fitr occurs on the first day of Shawwal,
    marking the end of the Ramadan fast.
  </p>

  <h3>Dhul-Hijjah</h3>
  <p>
    Dhul-Hijjah is the twelfth month of the Islamic calendar. Hajj takes
    place during this month, and Eid al-Adha is observed on the tenth day.
  </p>

  <h3>The Four Sacred Months</h3>
  <p>
    Islam recognizes four sacred months: Muharram, Rajab, Dhul-Qadah, and
    Dhul-Hijjah. These months have a special status in Islamic teachings.
  </p>

  <h3>Islamic Dates and Worship</h3>
  <p>
    Many important acts of worship and Islamic occasions are determined
    according to the Islamic lunar calendar. Muslims therefore use this
    calendar alongside the Gregorian calendar in their daily lives.
  </p>
  </div>
  <div className="knowledge-card" id="akhlaq">
  <h2>Akhlaq – Islamic Character and Morality</h2>
  <h3>What is Akhlaq?</h3>
  <p>
    Akhlaq refers to manners, character, behavior, and moral conduct.
    Islam teaches Muslims to develop good character and treat Allah's
    creation with kindness, justice, honesty, and respect.
  </p>

  <h3>Honesty</h3>
  <p>
    Islam strongly encourages truthfulness. Muslims should speak honestly,
    keep their promises, and avoid lying, cheating, and deception.
  </p>

  <h3>Kindness and Mercy</h3>
  <p>
    Muslims are encouraged to show kindness and mercy to people, animals,
    neighbors, relatives, and those who are in need.
  </p>

  <h3>Respect for Parents</h3>
  <p>
    Islam gives parents an important position. Muslims are encouraged to
    treat their parents with respect, speak to them kindly, care for them,
    and appreciate their sacrifices.
  </p>

  <h3>Good Treatment of Neighbors</h3>
  <p>
    Islam teaches Muslims to respect and care for their neighbors. A good
    Muslim should avoid harming neighbors and should help them when they
    are in need.
  </p>

  <h3>Patience</h3>
  <p>
    Sabr means patience and perseverance. Muslims are encouraged to remain
    patient during difficulties, continue doing what is right, and trust
    Allah while taking appropriate action.
  </p>

  <h3>Forgiveness</h3>
  <p>
    Islam encourages forgiveness when appropriate. Forgiving others can
    help remove hatred and strengthen relationships, while justice and
    fairness should also be maintained.
  </p>

  <h3>Humility</h3>
  <p>
    Muslims are encouraged to avoid arrogance and pride. Humility means
    recognizing one's dependence on Allah and treating other people with
    respect.
  </p>

  <h3>Keeping Promises</h3>
  <p>
    Keeping promises and fulfilling responsibilities are important aspects
    of good Islamic character. Muslims should try to be reliable and
    trustworthy in their dealings with others.
  </p>

  <h3>Helping Others</h3>
  <p>
    Islam encourages Muslims to help people who are facing difficulties.
    Helping others can include giving charity, offering useful advice,
    providing support, or simply showing kindness.
  </p>

  <h3>Avoiding Harm</h3>
  <p>
    Muslims should avoid harming others through words or actions. This
    includes avoiding insults, backbiting, unnecessary arguments,
    oppression, and unfair treatment.
  </p>

  <h3>Good Character in Daily Life</h3>
  <p>
    Islamic character should be reflected in everyday life. A Muslim is
    encouraged to be honest at school and work, respectful with family,
    kind to friends, fair in business, and helpful to the community.
  </p>
  </div>
   <div className="knowledge-card" id="family">
  <h2>Family and Relationships in Islam</h2>

  <h3>Importance of Family</h3>
  <p>
    Family has an important place in Islam. Islamic teachings encourage
    family members to care for one another, maintain strong relationships,
    show mercy, and fulfill their responsibilities.
  </p>

  <h3>Rights of Parents</h3>
  <p>
    Islam commands Muslims to treat their parents with kindness and respect.
    Children should speak respectfully to their parents, help them when
    they need support, and appreciate their sacrifices.
  </p>

  <h3>Responsibilities of Parents</h3>
  <p>
    Parents have responsibilities towards their children, including caring
    for them, providing appropriate support, teaching them good values, and
    guiding them towards righteousness.
  </p>

  <h3>Rights of Children</h3>
  <p>
    Children should be treated with care, protection, fairness, and mercy.
    Parents are encouraged to provide proper upbringing and teach their
    children good manners and Islamic values.
  </p>

  <h3>Marriage in Islam</h3>
  <p>
    Marriage is an important institution in Islam. It is based on mutual
    responsibilities, kindness, respect, trust, and cooperation between
    spouses.
  </p>

  <h3>Rights and Responsibilities of Spouses</h3>
  <p>
    Islam teaches spouses to treat each other with kindness and fairness.
    Husband and wife have mutual rights and responsibilities, and both are
    encouraged to cooperate in building a peaceful family.
  </p>

  <h3>Kindness Between Spouses</h3>
  <p>
    A healthy marriage should include communication, patience, forgiveness,
    respect, and compassion. Islam encourages spouses to live together in
    kindness and to avoid injustice and harm.
  </p>

  <h3>Responsibilities Towards Relatives</h3>
  <p>
    Muslims are encouraged to maintain family ties and treat relatives
    kindly. Visiting relatives, helping them, supporting them during
    difficulties, and avoiding unnecessary conflicts help strengthen
    family relationships.
  </p>

  <h3>Rights of Neighbors</h3>
  <p>
    Good treatment of neighbors is an important part of Islamic character.
    Muslims should avoid causing harm to their neighbors and should help
    them when they are in need.
  </p>

  <h3>Maintaining Family Ties</h3>
  <p>
    Islam encourages Muslims to maintain relationships with their relatives
    even when disagreements occur. Patience, forgiveness, communication,
    and kindness can help preserve family bonds.
  </p>

  <h3>Family as a Source of Support</h3>
  <p>
    A strong family can provide emotional, practical, and spiritual support.
    Islamic teachings encourage family members to cooperate in goodness
    and help one another during both easy and difficult times.
  </p>
  </div>
      <div className="knowledge-card" id="halal">
  <h2>Halal and Haram in Islam</h2>

  <h3>What Does Halal Mean?</h3>
  <p>
    Halal means something that is permitted or lawful according to Islamic
    teachings. Muslims try to make their choices in accordance with what
    Allah has permitted.
  </p>

  <h3>What Does Haram Mean?</h3>
  <p>
    Haram means something that is prohibited according to Islamic teachings.
    Muslims are expected to avoid actions and things that Allah has clearly
    prohibited.
  </p>

  <h3>Halal Food</h3>
  <p>
    Islam provides guidelines about food and drink. Muslims are encouraged
    to consume food that is halal, pure, and wholesome and to avoid foods
    and drinks that are prohibited.
  </p>

  <h3>Halal Earnings</h3>
  <p>
    Islam encourages Muslims to earn their livelihood through lawful means.
    Honest work, fair trade, and providing beneficial services are examples
    of responsible ways to earn a living.
  </p>

  <h3>Honesty in Business</h3>
  <p>
    Islamic teachings emphasize honesty and fairness in business dealings.
    Muslims should avoid cheating, deception, fraud, unfair practices, and
    hiding important information from buyers.
  </p>

  <h3>Riba – Interest</h3>
  <p>
    Riba is prohibited in Islamic teachings. Islamic financial principles
    emphasize fairness and discourage unjust forms of financial gain.
    Specific financial situations can be complex and may require guidance
    from a qualified scholar.
  </p>

  <h3>Prohibited Behavior</h3>
  <p>
    Islam prohibits many forms of harmful and immoral behavior, including
    lying, theft, oppression, fraud, backbiting, and intentionally harming
    others.
  </p>

  <h3>Halal and Haram in Daily Life</h3>
  <p>
    Halal and haram are not limited to food. Islamic guidance can apply to
    worship, relationships, business, financial matters, speech, personal
    behavior, and many other areas of life.
  </p>

  <h3>Making Responsible Choices</h3>
  <p>
    Muslims are encouraged to learn what is permitted and prohibited before
    making important decisions. When a matter is unclear, seeking guidance
    from reliable Islamic scholarship is better than making assumptions.
  </p>

  <h3>Balance and Moderation</h3>
  <p>
    Islam encourages a balanced way of life. Muslims should enjoy the lawful
    blessings Allah has provided while avoiding prohibited actions and
    maintaining responsibility towards themselves and others.
  </p>
   </div>
  <div className="knowledge-card" id="duas">
  <h2>Duas and Adhkar</h2>

  <h3>What is Dua?</h3>
  <p>
    Dua is a supplication or personal prayer in which a Muslim asks Allah
    for help, guidance, forgiveness, protection, and blessings. Muslims can
    make dua at any time and in any language they understand.
  </p>

  <h3>What is Dhikr?</h3>
  <p>
    Dhikr means remembering and mentioning Allah. It includes phrases of
    praise, glorification, gratitude, and remembrance that Muslims recite
    with their hearts and tongues.
  </p>

  <h3>Morning and Evening Remembrance</h3>
  <p>
    Muslims are encouraged to remember Allah in the morning and evening.
    These practices can include Quranic verses, authentic supplications,
    and remembrance taught in the Sunnah.
  </p>

  <h3>Dua for Guidance</h3>
  <p>
    Muslims ask Allah to guide them towards what is right, keep them firm
    upon faith, and help them make good decisions.
  </p>

  <h3>Dua for Forgiveness</h3>
  <p>
    Muslims are encouraged to seek forgiveness from Allah for their sins
    and mistakes. Repentance includes recognizing wrongdoing, asking Allah
    for forgiveness, and sincerely trying to avoid returning to the sin.
  </p>

  <h3>Dua Before Eating</h3>
  <p>
    Muslims remember Allah before eating and drinking. They begin their
    meal by mentioning Allah's name and express gratitude for the food
    they have received.
  </p>

  <h3>Dua After Eating</h3>
  <p>
    After eating, Muslims thank Allah for providing their food and
    sustenance. Gratitude is an important part of Islamic character.
  </p>

  <h3>Dua Before Sleeping</h3>
  <p>
    Muslims are encouraged to remember Allah before going to sleep.
    The Sunnah includes various supplications and practices for bedtime.
  </p>

  <h3>Dua During Difficult Times</h3>
  <p>
    When facing difficulties, Muslims turn to Allah through prayer,
    patience, remembrance, and supplication. Dua provides an opportunity
    to ask Allah for strength, guidance, relief, and ease.
  </p>

  <h3>Dhikr After Salah</h3>
  <p>
    Muslims may perform various forms of remembrance after the obligatory
    prayers. These include praising Allah, declaring His greatness, and
    asking for His forgiveness.
  </p>

  <h3>Importance of Sincerity</h3>
  <p>
    Dua and dhikr should be performed sincerely for the sake of Allah.
    Muslims should have hope in Allah, remain patient, and understand that
    Allah knows what is best for His servants.
  </p>

  <h3>Learning Authentic Duas</h3>
  <p>
    Muslims should learn supplications from reliable Quranic and Hadith
    sources. When sharing a specific dua as part of the Sunnah, it is
    important to verify its source and authenticity.
  </p>
   </div>
  <div className="knowledge-card" id="akhirah">
  <h2>Akhirah – Life After Death</h2>

  <h3>What is Akhirah?</h3>
  <p>
    Akhirah means the Hereafter. Muslims believe that life in this world is
    temporary and that every person will eventually return to Allah. The
    Hereafter is an important part of Islamic belief.
  </p>

  <h3>Life After Death</h3>
  <p>
    Islam teaches that death is not the end of existence. Muslims believe
    that Allah will bring people back to life and that they will be
    accountable for their beliefs and actions.
  </p>

  <h3>The Day of Judgment</h3>
  <p>
    Muslims believe that there will be a Day of Judgment when all people
    will be resurrected and brought before Allah. Their deeds will be
    accounted for and they will be judged with complete justice.
  </p>

  <h3>Accountability for Deeds</h3>
  <p>
    Every person is responsible for their choices and actions. Islam
    teaches that good deeds and wrongdoing are known to Allah and that
    people will be accountable for what they have done.
  </p>

  <h3>Repentance</h3>
  <p>
    Islam encourages people to turn back to Allah and seek forgiveness.
    Sincere repentance involves recognizing wrongdoing, regretting it,
    seeking Allah's forgiveness, and making a genuine effort to avoid
    returning to the sin.
  </p>

  <h3>Jannah – Paradise</h3>
  <p>
    Jannah is the eternal reward promised by Allah to those whom He admits
    by His mercy. Islamic teachings describe it as a place of peace,
    happiness, and blessings beyond what people experience in this world.
  </p>

  <h3>Jahannam – Hell</h3>
  <p>
    Jahannam is described in Islamic teachings as a place of punishment.
    Belief in accountability and punishment encourages Muslims to avoid
    wrongdoing and live according to the guidance of Allah.
  </p>

  <h3>Hope and Fear</h3>
  <p>
    Islam teaches Muslims to balance hope in Allah's mercy with awareness
    of accountability. A believer should not become hopeless because of
    mistakes, nor should they become careless about their actions.
  </p>

  <h3>Preparing for the Hereafter</h3>
  <p>
    Muslims prepare for the Hereafter through faith, worship, repentance,
    good character, helping others, fulfilling responsibilities, and
    avoiding actions that Allah has prohibited.
  </p>

  <h3>The Purpose of This Life</h3>
  <p>
    Islamic teachings present worldly life as a test and an opportunity
    to worship Allah and do good. Muslims are encouraged to use their time,
    abilities, and blessings responsibly while preparing for the Hereafter.
  </p>
   </div>
  <div className="knowledge-card" id="society">
  <h2>Islamic Society, Justice and Rights</h2>

  <h3>Justice in Islam</h3>
  <p>
    Justice is an important principle in Islam. Muslims are encouraged to
    be fair and truthful, even when dealing with people they disagree with.
    No person should be treated unjustly because of wealth, status, family,
    or personal differences.
  </p>

  <h3>Equality of Human Beings</h3>
  <p>
    Islam teaches that all human beings are created by Allah. A person's
    true worth is not determined by wealth, appearance, nationality, or
    social position. Righteousness and good character are highly valued.
  </p>

  <h3>Rights of Others</h3>
  <p>
    Muslims have responsibilities towards other people. These include
    respecting their rights, protecting their property, keeping promises,
    speaking truthfully, and avoiding harm and injustice.
  </p>

  <h3>Rights of the Poor</h3>
  <p>
    Islam encourages Muslims to care for people facing poverty and hardship.
    Zakat, Sadaqah, and other forms of assistance help create a society in
    which people support those who are in need.
  </p>

  <h3>Rights of Orphans</h3>
  <p>
    Islamic teachings give special attention to orphans. Muslims are
    encouraged to protect their rights, treat them kindly, and never take
    advantage of their vulnerable position.
  </p>

  <h3>Honesty and Trust</h3>
  <p>
    A healthy society depends on honesty and trust. Muslims are encouraged
    to fulfill trusts, keep agreements, return what belongs to others, and
    avoid deception.
  </p>

  <h3>Freedom from Oppression</h3>
  <p>
    Islam strongly condemns oppression and injustice. Muslims are encouraged
    to stand for what is right and avoid harming other people through words,
    actions, or abuse of power.
  </p>

  <h3>Respect for Human Dignity</h3>
  <p>
    Islam teaches Muslims to respect the dignity of people. Kindness,
    respectful speech, protection of privacy, and avoiding humiliation are
    important parts of good social conduct.
  </p>

  <h3>Helping the Community</h3>
  <p>
    Muslims are encouraged to contribute positively to their communities.
    Helping neighbors, supporting people in difficulty, sharing useful
    knowledge, and working for beneficial causes are examples of community
    service.
  </p>

  <h3>Peace and Reconciliation</h3>
  <p>
    Islam encourages peace, reconciliation, forgiveness, and resolving
    disagreements fairly. Muslims should try to reduce unnecessary conflict
    and work towards peaceful solutions.
  </p>

  <h3>Responsible Leadership</h3>
  <p>
    Leadership is treated as a responsibility rather than simply a position
    of power. A person entrusted with authority should act honestly, fairly,
    and responsibly and should protect the rights of those under their care.
  </p>
   </div>
 <div className="knowledge-card" id="education">
  <h2>Education, Work and Business in Islam</h2>
  <h3>Importance of Knowledge</h3>
  <p>
    Islam encourages people to seek beneficial knowledge. Learning helps a
    person understand the world, develop useful skills, make responsible
    decisions, and recognize the signs of Allah's creation.
  </p>

  <h3>Seeking Knowledge</h3>
  <p>
    Muslims are encouraged to learn about their faith and also gain useful
    knowledge that benefits themselves and society. Education should be
    approached with sincerity, patience, and a desire to use knowledge
    responsibly.
  </p>

  <h3>Teachers and Students</h3>
  <p>
    Islam encourages respect between teachers and students. Students should
    listen carefully, ask questions respectfully, and value beneficial
    knowledge. Teachers should guide students with patience and fairness.
  </p>

  <h3>Hard Work</h3>
  <p>
    Islam encourages people to work responsibly and make lawful efforts to
    earn their livelihood. Hard work, honesty, patience, and trust in Allah
    are important qualities in a person's professional life.
  </p>

  <h3>Halal Earnings</h3>
  <p>
    Muslims should seek lawful sources of income. Earning through honest
    work, providing useful services, and fair business dealings are
    encouraged.
  </p>

  <h3>Honesty in Business</h3>
  <p>
    Business transactions should be based on honesty and transparency.
    Muslims should avoid cheating, fraud, deception, false claims, and
    deliberately hiding important information.
  </p>

  <h3>Fair Trade</h3>
  <p>
    Islam encourages fairness between buyers and sellers. Products and
    services should be represented honestly, agreements should be respected,
    and people should not be exploited unfairly.
  </p>

  <h3>Trust and Responsibility</h3>
  <p>
    Employees, employers, business owners, and customers all have
    responsibilities. A Muslim should fulfill agreements, complete work
    properly, protect entrusted property, and avoid abusing trust.
  </p>

  <h3>Helping Others Through Work</h3>
  <p>
    Work can benefit society by providing useful products, services,
    employment, and support. Muslims are encouraged to use their skills in
    ways that are beneficial and lawful.
  </p>

  <h3>Balance Between Work and Worship</h3>
  <p>
    Islam encourages Muslims to fulfill their worldly responsibilities while
    remembering Allah and maintaining their religious obligations. A
    balanced life includes worship, family responsibilities, work,
    education, rest, and helping others.
  </p>

  <h3>Ethics in Professional Life</h3>
  <p>
    Islamic ethics can be applied in every profession. A Muslim should try
    to be honest, punctual, responsible, respectful, fair, and trustworthy
    whether working for an organization or running a personal business.
  </p>
   </div>
  <div className="knowledge-card" id="women">
  <h2>Women in Islam and Their Rights</h2>

  <h3>Dignity and Human Worth</h3>
  <p>
    Islam teaches that women and men are both human beings created by Allah
    and are responsible for their faith and actions. Women have dignity,
    rights, responsibilities, and spiritual accountability.
  </p>

  <h3>Right to Worship</h3>
  <p>
    Women have the same fundamental responsibility as men to worship Allah,
    pray, fast, give charity when required, and perform other acts of
    worship according to Islamic teachings.
  </p>

  <h3>Right to Education</h3>
  <p>
    Islam encourages the seeking of beneficial knowledge. Muslim women have
    historically participated in learning, teaching, scholarship, and the
    transmission of Islamic knowledge.
  </p>

  <h3>Right to Property</h3>
  <p>
    Islamic law recognizes a woman's right to own and manage property.
    Her personal wealth belongs to her, and other people should not take
    control of it without a valid right.
  </p>

  <h3>Right to Inheritance</h3>
  <p>
    Islam established inheritance rights for women. The specific share
    depends on the family circumstances and the applicable Islamic
    inheritance rules.
  </p>

  <h3>Marriage and Consent</h3>
  <p>
    Marriage in Islam involves rights and responsibilities for both
    spouses. Consent, fairness, kindness, and fulfillment of obligations
    are important principles in a valid marriage.
  </p>

  <h3>Financial Responsibility</h3>
  <p>
    Islamic family law includes financial responsibilities between family
    members. Details can vary according to circumstances and schools of
    Islamic jurisprudence.
  </p>

  <h3>Kindness and Protection</h3>
  <p>
    Islam commands good treatment of women and emphasizes kindness,
    fairness, and protection from harm. Abuse, oppression, and injustice
    should not be justified in the name of Islam.
  </p>

  <h3>Women as Mothers</h3>
  <p>
    Islam gives motherhood great importance. Mothers are deserving of
    respect, kindness, care, and appreciation for their role in raising
    and nurturing children.
  </p>

  <h3>Women as Daughters</h3>
  <p>
    Islam teaches parents to treat daughters with love, care, and fairness.
    Daughters are a blessing and should be raised with dignity, education,
    and good character.
  </p>

  <h3>Women in Society</h3>
  <p>
    Muslim women have contributed to Islamic scholarship, education,
    healthcare, business, community service, and many other areas
    throughout history. Their contributions can benefit families and
    communities.
  </p>
   </div>
 <div className="knowledge-card" id="youth">
  <h2>Children and Youth in Islam</h2>

  <h3>Children Are a Trust</h3>
  <p>
    Islam teaches that children are a blessing and a trust from Allah.
    Parents and guardians are responsible for caring for them and helping
    them grow with faith, good manners, knowledge, and strong character.
  </p>

  <h3>Love and Mercy</h3>
  <p>
    Islam encourages parents to show love, kindness, patience, and mercy
    toward their children. Children should be treated with care and respect.
  </p>

  <h3>Education</h3>
  <p>
    Children should be encouraged to seek beneficial knowledge. Islamic
    education includes learning about faith, worship, good manners,
    responsibilities, and how to treat other people with kindness.
  </p>

  <h3>Teaching Good Character</h3>
  <p>
    Parents and teachers should help children develop honesty, patience,
    respect, responsibility, kindness, and compassion. Good character is an
    important part of Islamic teachings.
  </p>

  <h3>Respect for Parents</h3>
  <p>
    Islam teaches children to respect and treat their parents with kindness.
    At the same time, parents have a responsibility to care for their
    children and guide them with wisdom and compassion.
  </p>

  <h3>Youth and Responsibility</h3>
  <p>
    Young Muslims are encouraged to develop strong faith, useful knowledge,
    good habits, and responsible behavior. They can contribute positively
    to their families and communities.
  </p>

  <h3>Using Time Wisely</h3>
  <p>
    Islam encourages Muslims to value their time. Young people can use their
    time for education, worship, helping others, developing useful skills,
    and healthy activities.
  </p>

  <h3>Good Friends</h3>
  <p>
    Islam encourages choosing good companions who encourage honesty,
    kindness, faith, and positive behavior. Good friendships can help a
    person develop good character.
  </p>

  <h3>Building a Strong Future</h3>
  <p>
    Muslim youth can play an important role in the future of their families
    and communities by gaining knowledge, developing useful skills, helping
    others, and following good Islamic values.
  </p>
   </div>
  <div className="knowledge-card" id="clothing">
  <h2>Islamic Clothing and Modesty</h2>

  <h3>Modesty in Islam</h3>
  <p>
    Islam teaches modesty in clothing, behavior, speech, and interaction
    with others. Modesty is considered an important part of good character.
  </p>

  <h3>Clothing Should Provide Proper Covering</h3>
  <p>
    Islamic teachings include guidelines about covering the body and
    maintaining modesty. The detailed requirements differ according to
    gender and Islamic jurisprudence.
  </p>

  <h3>Modesty for Men</h3>
  <p>
    Muslim men are encouraged to dress modestly, cover the required parts
    of the body, avoid clothing associated with arrogance, and maintain
    respectful behavior.
  </p>

  <h3>Modesty for Women</h3>
  <p>
    Muslim women are encouraged to dress modestly and maintain appropriate
    covering according to Islamic teachings. Hijab is understood as part
    of modesty, with detailed rulings discussed by Islamic scholars.
  </p>

  <h3>Clean and Presentable Clothing</h3>
  <p>
    Islam encourages cleanliness and good appearance. Muslims should keep
    their clothes clean and dress appropriately while avoiding arrogance
    and extravagance.
  </p>

  <h3>Avoiding Arrogance</h3>
  <p>
    Clothing should not be used to show superiority over others. Islam
    encourages humility and teaches Muslims to avoid pride and arrogance.
  </p>

  <h3>Modesty in Behavior</h3>
  <p>
    Modesty is not limited to clothing. Muslims are also encouraged to
    speak respectfully, behave appropriately, lower their gaze, and treat
    others with dignity.
  </p>

  <h3>Balance and Simplicity</h3>
  <p>
    Islam encourages a balanced approach to clothing and appearance.
    Muslims may enjoy lawful and beautiful clothing while avoiding
    extravagance, arrogance, and what is prohibited.
  </p>
   </div>
  <div className="knowledge-card" id="clothing">
  <h2>Islamic Clothing and Modesty</h2>

  <h3>Modesty in Islam</h3>
  <p>
    Islam teaches modesty in clothing, behavior, speech, and interaction
    with others. Modesty is considered an important part of good character.
  </p>

  <h3>Clothing Should Provide Proper Covering</h3>
  <p>
    Islamic teachings include guidelines about covering the body and
    maintaining modesty. The detailed requirements differ according to
    gender and Islamic jurisprudence.
  </p>

  <h3>Modesty for Men</h3>
  <p>
    Muslim men are encouraged to dress modestly, cover the required parts
    of the body, avoid clothing associated with arrogance, and maintain
    respectful behavior.
  </p>

  <h3>Modesty for Women</h3>
  <p>
    Muslim women are encouraged to dress modestly and maintain appropriate
    covering according to Islamic teachings. Hijab is understood as part
    of modesty, with detailed rulings discussed by Islamic scholars.
  </p>

  <h3>Clean and Presentable Clothing</h3>
  <p>
    Islam encourages cleanliness and good appearance. Muslims should keep
    their clothes clean and dress appropriately while avoiding arrogance
    and extravagance.
  </p>

  <h3>Avoiding Arrogance</h3>
  <p>
    Clothing should not be used to show superiority over others. Islam
    encourages humility and teaches Muslims to avoid pride and arrogance.
  </p>

  <h3>Modesty in Behavior</h3>
  <p>
    Modesty is not limited to clothing. Muslims are also encouraged to
    speak respectfully, behave appropriately, lower their gaze, and treat
    others with dignity.
  </p>

  <h3>Balance and Simplicity</h3>
  <p>
    Islam encourages a balanced approach to clothing and appearance.
    Muslims may enjoy lawful and beautiful clothing while avoiding
    extravagance, arrogance, and what is prohibited.
  </p>
   </div>
  <div className="knowledge-card" id="eid">
  <h2>Eid al-Fitr and Eid al-Adha</h2>

  <h3>Eid al-Fitr</h3>
  <p>
    Eid al-Fitr is the celebration that marks the end of Ramadan. Muslims
    thank Allah for the opportunity to fast, worship, and seek forgiveness
    during the blessed month.
  </p>

  <h3>Fasting Ends</h3>
  <p>
    Muslims do not fast on the day of Eid al-Fitr. The day begins with
    special prayers and is a time for happiness, gratitude, family, and
    community.
  </p>

  <h3>Zakat al-Fitr</h3>
  <p>
    Muslims are required to give Zakat al-Fitr before the Eid prayer
    according to the applicable Islamic rulings. It helps those in need
    participate in the celebration.
  </p>

  <h3>Eid Prayer</h3>
  <p>
    Muslims gather for the special Eid prayer, usually held in a mosque,
    prayer ground, or other suitable place. The prayer is followed by a
    sermon and remembrance of Allah.
  </p>

  <h3>Eid al-Adha</h3>
  <p>
    Eid al-Adha is celebrated during the month of Dhul-Hijjah. It is
    connected with the Hajj pilgrimage and reminds Muslims of the
    obedience and devotion of Prophet Ibrahim عليه السلام and his family.
  </p>

  <h3>Qurbani</h3>
  <p>
    Muslims who are able to perform the sacrifice may offer an eligible
    animal according to Islamic rules. The meat is commonly shared with
    family, friends, and people in need.
  </p>

  <h3>Remembering Allah</h3>
  <p>
    Eid is a time for prayer, gratitude, remembrance of Allah, charity,
    visiting family, and strengthening relationships with the community.
  </p>

  <h3>Joy and Gratitude</h3>
  <p>
    Islam encourages Muslims to enjoy the lawful happiness of Eid while
    remembering Allah and showing kindness, generosity, and gratitude.
  </p>
   </div>
  <div className="knowledge-card" id="tawbah">
  <h2>Tawbah – Repentance and Forgiveness</h2>

  <h3>What is Tawbah?</h3>
  <p>
    Tawbah means turning back to Allah after committing a sin or making a
    mistake. Islam teaches that a person should never lose hope in Allah's
    mercy and forgiveness.
  </p>

  <h3>Recognizing a Mistake</h3>
  <p>
    A person should recognize the wrong action, feel sincere regret, and
    understand that returning to Allah is better than continuing in sin.
  </p>

  <h3>Leaving the Sin</h3>
  <p>
    Sincere repentance includes making an effort to stop the sinful action
    and avoid returning to it. A Muslim should seek Allah's help and work
    toward positive change.
  </p>

  <h3>Asking Allah for Forgiveness</h3>
  <p>
    Muslims are encouraged to ask Allah for forgiveness through sincere
    dua and istighfar. Allah's mercy is greater than a person's mistakes.
  </p>

  <h3>Making a Firm Intention</h3>
  <p>
    Sincere Tawbah includes a genuine intention not to return to the sin.
    If a person later makes a mistake again, they should turn back to Allah
    and repent sincerely rather than giving up.
  </p>

  <h3>Rights of Other People</h3>
  <p>
    When a person's wrongdoing involves another person's rights, repentance
    should also include correcting the harm where possible, such as
    returning property or seeking forgiveness when appropriate.
  </p>

  <h3>Hope in Allah's Mercy</h3>
  <p>
    Islam teaches Muslims not to despair of Allah's mercy. A believer should
    combine sincere repentance with hope, good deeds, and trust in Allah.
  </p>

  <h3>Starting Again</h3>
  <p>
    Tawbah gives a person an opportunity to improve their life. After
    repentance, a Muslim should continue praying, doing good deeds, helping
    others, and working to become a better person.
  </p>
   </div>
  <div className="knowledge-card" id="masjid">
  <h2>Masjid and Islamic Community</h2>

  <h3>The Importance of the Masjid</h3>
  <p>
    A masjid is a place where Muslims gather to worship Allah, perform
    prayers, learn about Islam, and strengthen their connection with the
    Muslim community.
  </p>

  <h3>Prayer in Congregation</h3>
  <p>
    Muslims gather in the masjid for congregational prayers. The Friday
    prayer, known as Jumu'ah, is a particularly important weekly gathering
    for Muslims.
  </p>

  <h3>Learning and Teaching</h3>
  <p>
    Masjids can serve as places of Islamic learning where people study the
    Quran, Hadith, Islamic manners, and other beneficial knowledge.
  </p>

  <h3>Brotherhood and Sisterhood</h3>
  <p>
    Islam encourages Muslims to care for one another, maintain good
    relationships, help those in need, and support their community with
    kindness and compassion.
  </p>

  <h3>Helping People in Need</h3>
  <p>
    Islamic communities are encouraged to support people facing poverty,
    illness, loneliness, or other difficulties. Charity and community
    service are important ways of helping others.
  </p>

  <h3>Respect for the Masjid</h3>
  <p>
    Muslims should keep the masjid clean, behave respectfully, avoid
    disturbing others, and maintain the peaceful atmosphere of the place
    of worship.
  </p>

  <h3>Community Service</h3>
  <p>
    Muslims can serve their communities by helping neighbors, supporting
    charitable activities, caring for the environment, and contributing
    positively to society.
  </p>

  <h3>Unity and Good Character</h3>
  <p>
    Islam encourages Muslims to cooperate in goodness, avoid unnecessary
    conflict, forgive one another, and treat people with justice, mercy,
    and respect.
  </p>
   </div>
  <div className="knowledge-card" id="questions">
  <h2>Common Questions About Islam</h2>

  <h3>What is Islam?</h3>
  <p>
    Islam is a monotheistic religion that teaches the worship of one God,
    Allah. It teaches faith, worship, good character, justice, mercy, and
    responsibility toward others.
  </p>

  <h3>Who is Allah?</h3>
  <p>
    Allah is the one true God and the Creator of the heavens and the earth.
    Muslims worship Him alone and believe that He has no partner or equal.
  </p>

  <h3>Who is Prophet Muhammad ﷺ?</h3>
  <p>
    Prophet Muhammad ﷺ is the final messenger of Allah in Islam. Muslims
    follow his teachings and example, known as the Sunnah.
  </p>

  <h3>What is the Quran?</h3>
  <p>
    The Quran is the holy book of Islam. Muslims believe it is the revealed
    word of Allah and guidance for humanity.
  </p>

  <h3>Why do Muslims pray?</h3>
  <p>
    Muslims pray to worship Allah, remember Him, seek His guidance, and
    strengthen their relationship with Him. Muslims perform five obligatory
    daily prayers.
  </p>

  <h3>Why do Muslims fast in Ramadan?</h3>
  <p>
    Muslims fast during Ramadan as an act of worship and obedience to Allah.
    Fasting also develops self-discipline, gratitude, patience, and concern
    for people who are in need.
  </p>

  <h3>What is Zakat?</h3>
  <p>
    Zakat is an obligatory form of charity for Muslims who meet the required
    conditions. It helps eligible people in need and supports social
    responsibility.
  </p>

  <h3>What is Hajj?</h3>
  <p>
    Hajj is the pilgrimage to Makkah. It is an obligation once in a
    lifetime for Muslims who are physically and financially able to perform
    it and meet the applicable conditions.
  </p>

  <h3>What do Muslims believe about the Day of Judgment?</h3>
  <p>
    Muslims believe that life in this world will be followed by resurrection
    and judgment. People will be accountable for their faith and actions,
    and Allah will judge with perfect justice.
  </p>

  <h3>Does Islam teach kindness?</h3>
  <p>
    Yes. Islam strongly encourages kindness, mercy, honesty, forgiveness,
    justice, helping others, and good treatment of family, neighbors, and
    the wider community.
  </p>

  <h3>Can a person ask Allah for forgiveness?</h3>
  <p>
    Yes. Muslims are encouraged to sincerely repent and ask Allah for
    forgiveness. A person should not lose hope in Allah's mercy.
  </p>
   </div>
  <div className="knowledge-card" id="daily-life">
  <h2>Daily Life of a Muslim</h2>

  <h3>Beginning the Day</h3>
  <p>
    A Muslim can begin the day by remembering Allah, performing the morning
    prayer, making dua, and starting daily activities with a positive and
    grateful attitude.
  </p>

  <h3>Prayer Throughout the Day</h3>
  <p>
    Muslims organize part of their daily routine around the five obligatory
    prayers. Prayer provides regular opportunities to remember Allah and
    seek His guidance.
  </p>

  <h3>Eating and Drinking</h3>
  <p>
    Muslims are encouraged to eat halal and wholesome food, begin meals by
    remembering Allah, avoid waste, and show gratitude for the blessings
    they receive.
  </p>

  <h3>Work and Study</h3>
  <p>
    Islam encourages beneficial work and education. Muslims should seek
    lawful income, perform their responsibilities honestly, and use their
    knowledge and skills in beneficial ways.
  </p>

  <h3>Treating Parents and Family</h3>
  <p>
    Muslims are encouraged to treat parents and family members with
    kindness, respect, patience, and care. Strong family relationships are
    an important part of Islamic life.
  </p>

  <h3>Helping Others</h3>
  <p>
    Helping people is an important part of good Islamic character. Muslims
    can help others through charity, kindness, useful advice, volunteering,
    and simple acts of support.
  </p>

  <h3>Good Speech</h3>
  <p>
    Muslims are encouraged to speak truthfully and respectfully. They should
    avoid lying, backbiting, insults, unnecessary arguments, and harmful
    speech.
  </p>

  <h3>Using Free Time</h3>
  <p>
    Islam encourages Muslims to use their time wisely. Beneficial learning,
    healthy activities, family time, worship, and helping others can all be
    valuable uses of free time.
  </p>

  <h3>Before Sleeping</h3>
  <p>
    A Muslim can end the day by remembering Allah, making dua, reflecting
    on their actions, asking forgiveness for mistakes, and preparing for
    the next day with a positive intention.
  </p>

  <h3>Balance in Life</h3>
  <p>
    Islam encourages balance between worship, family, education, work,
    rest, and responsibilities. A Muslim should try to fulfill their duties
    while maintaining good character and gratitude to Allah.
  </p>
  </div>
  <div className="knowledge-card" id="history">
  <h2>Islamic History and Important Events</h2>

  <h3>Prophet Adam عليه السلام</h3>
  <p>
    Muslims believe that Adam عليه السلام was the first human being and a
    prophet of Allah. Islamic teachings describe humanity as beginning from
    Adam and his wife, Hawwa (Eve), and emphasize repentance and obedience
    to Allah.
  </p>

  <h3>Prophet Ibrahim عليه السلام</h3>
  <p>
    Ibrahim عليه السلام is an important prophet in Islam. He is remembered
    for his strong belief in Allah, rejection of idolatry, and complete
    devotion and obedience to Allah.
  </p>

  <h3>Prophet Musa عليه السلام</h3>
  <p>
    Musa عليه السلام was sent by Allah to guide the Children of Israel.
    His story teaches lessons about faith, courage, patience, leadership,
    and trusting Allah during difficult circumstances.
  </p>

  <h3>Prophet Isa عليه السلام</h3>
  <p>
    Isa عليه السلام is honored as a prophet and messenger of Allah in
    Islam. Muslims believe that he was born miraculously to Maryam
    عليها السلام and was given signs by Allah.
  </p>

  <h3>The Birth of Prophet Muhammad ﷺ</h3>
  <p>
    Prophet Muhammad ﷺ was born in Makkah. He later received revelation
    from Allah and began calling people to worship Allah alone and to live
    according to His guidance.
  </p>

  <h3>The First Revelation</h3>
  <p>
    The first revelation was received by Prophet Muhammad ﷺ through the
    Angel Jibril عليه السلام in the Cave of Hira. This marked the beginning
    of his prophethood and the revelation of the Quran.
  </p>

  <h3>The Migration to Madinah</h3>
  <p>
    The Hijrah was the migration of Prophet Muhammad ﷺ and his companions
    from Makkah to Madinah. This event became the starting point of the
    Islamic Hijri calendar.
  </p>

  <h3>The Madinah Community</h3>
  <p>
    In Madinah, Prophet Muhammad ﷺ helped establish a community based on
    faith, cooperation, justice, responsibility, and mutual support among
    different groups.
  </p>

  <h3>The Conquest of Makkah</h3>
  <p>
    The conquest of Makkah was an important event in the life of Prophet
    Muhammad ﷺ. After entering the city, the Prophet ﷺ emphasized
    forgiveness and mercy toward many of those who had previously opposed
    him.
  </p>

  <h3>The Farewell Pilgrimage</h3>
  <p>
    During his final pilgrimage, Prophet Muhammad ﷺ delivered important
    guidance concerning faith, human dignity, justice, family
    responsibilities, and the rights of people.
  </p>

  <h3>The Death of Prophet Muhammad ﷺ</h3>
  <p>
    Prophet Muhammad ﷺ passed away in Madinah after completing his mission
    as the final messenger of Allah. Muslims continue to follow the Quran
    and his Sunnah as sources of guidance.
  </p>

  <h3>Lessons from Islamic History</h3>
  <p>
    Islamic history contains many lessons about faith, patience, justice,
    sacrifice, leadership, forgiveness, knowledge, and trust in Allah.
    Studying history can help Muslims understand the development of the
    Muslim community and learn from the experiences of earlier generations.
  </p>
</div>
    <a href="#top" className="back-to-top">
      ↑ Back to Top
    </a>
    <div className="knowledge-footer-note">
  <p>وَقُل رَّبِّ زِدْنِي عِلْمًا</p>
  <span>“My Lord, increase me in knowledge.”</span>
</div>
    </section>
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
        "https://noor-of-islam-backend.onrender.com/api/contact",
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
function SignUp() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const handleSignUp = (event) => {
  event.preventDefault();

  setMessage("Your form is working successfully!");
};

```
if (!name.trim() || !email.trim() || !password) {
  setMessage("Please fill in all fields.");
  return;
}

if (password.length < 6) {
  setMessage("Password must be at least 6 characters long.");
  return;
}

setMessage(
  "Your form is ready! Real account creation is not connected yet."
);
```

};

return ( <section className="signup-page"> <div className="signup-card"> <p className="signup-bismillah">
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ </p>

```
    <h1>Join Noor of Islam</h1>
    <p>Begin your journey of Islamic knowledge and guidance.</p>

    <form onSubmit={handleSignUp}>
      <label htmlFor="signup-name">Full Name</label>
      <input
        id="signup-name"
        type="text"
        placeholder="Enter your full name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="signup-email">Email Address</label>
      <input
        id="signup-email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="signup-password">Password</label>
      <input
        id="signup-password"
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        minLength={6}
        required
      />

      <button type="submit" className="create-account-btn">
        Create Account
      </button>
    </form>

    {message &&  (
      <p className="signup-message">{message}</p>
    )}

    <p className="signup-footer">
      Seeking knowledge, growing in faith.
    </p>
  </div>
</section>

);



function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <nav>
        <div className="nav-left">
          <div className="menu-dropdown">
  <button
    className="menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰ Menu
  </button>

  {menuOpen && (
    <div className="dropdown-content">
      <NavLink to="/quran">Quran</NavLink>
      <NavLink to="/hadith">Hadith</NavLink>
      <NavLink to="/articles">Articles</NavLink>
      <NavLink to="/knowledge">Islamic Knowledge</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  )}
</div>
        </div>

        <Link to="/" className="site-logo">
          <span className="logo-icon">☪</span>
          <span className="logo-text">نُورُ الإِسْلَام</span>
        </Link>

        <div className="nav-right">
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </nav>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/quran" element={<Quran />} />
  <Route path="/hadith" element={<Hadith />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/articles" element={<Articles />} />
  <Route path="/knowledge" element={<IslamicKnowledge />} />
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