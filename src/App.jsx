import React, { useMemo, useState } from "react";
import "./App.css";

const data = [
  {
    title: "Profile",
    current:
      "Maktab haqida kerakli ma’lumotlar mavjud.",
    problem:
      "Hozircha yo‘q, lekin mavjud profilni ko‘rgan yangi ota-onani tezda qiziqtirish va ishontirish yanada kuchaytirilishi mumkin.",
    solution: "Hozircha yaxshi.",
  },
  {
    title: "Kontent",
    current:
      "Maktab, o‘quvchilar, natijalar va darslar haqida muntazam kontent bor.",
    problem: "Yo‘q.",
    solution:
      "Kontentni Trust + Proof + Objection + Conversion bo‘yicha taqsimlash.",
  },
  {
    title: "Reels",
    current:
      "“Nega Renessans?”, maktab afzalliklari, o‘quvchilar natijalari bor.",
    problem: "Ba’zi mavzular takroriy ko‘rinishi mumkin.",
    solution:
      "Faqat maktabni maqtash emas, ota-onaning real savol va muammolariga javob berish.",
  },
  {
    title: "Proof",
    current:
      "IELTS, SAT, sertifikatlar, boshqa natijalar ko‘rsatiladi.",
    problem:
      "Kuchli natijalar bor, lekin ularni hikoyaga aylantirish imkoniyati mavjud.",
    solution:
      "Natijani o‘quvchining yo‘li bilan birga ko‘rsatish.",
  },
  {
    title: "Student Content",
    current:
      "O‘quvchilar haqida Reelslar chiqarilmoqda.",
    problem:
      "Har bir o‘quvchining hikoyasi chuqurroq ochilishi mumkin.",
    solution:
      "O‘quvchining maqsadi, qiyinchiligi, Renessansdagi jarayoni va natijasini ko‘rsatish.",
  },
  {
    title: "Parent Testimonial",
    current:
      "Ota-onalar maktab haqida fikr bildirmoqda.",
    problem:
      "Fikrlar yanada konkretlashtirilishi mumkin.",
    solution:
      "“Nima yoqdi?”dan ko‘ra real muammo → o‘zgarish → natija savollaridan foydalanish.",
  },
  {
    title: "Objection Handling",
    current:
      "Q&A orqali savollarga javob beriladi.",
    problem:
      "Eng ko‘p uchraydigan shubhalar alohida kontent sifatida ko‘paytirilishi mumkin.",
    solution:
      "Ota-onalarning shubhalarini oldindan topib, Reels orqali javob berish.",
  },
  {
    title: "Highlights",
    current:
      "Sertifikatlar, IELTS, SAT, to‘lovnoma, darslar, manzil, ustozlar, Telegram, Q&A, biz haqimizda va aloqa mavjud.",
    problem:
      "Hozircha yo‘q, lekin ularni kuchaytirish mumkin.",
    solution:
      "Highlight nomlari va ichidagi ma’lumotlarni ota-onaning qaror yo‘liga mos tizimlash.",
  },
  {
    title: "Teacher Proof",
    current:
      "Ustozlarning maktabga kirish uchun natijalari ko‘rsatiladi.",
    problem: "Yo‘q.",
    solution:
      "Ustozning tajribasi va o‘quvchiga qanday yordam berishini ko‘rsatish.",
  },
  {
    title: "Experience",
    current:
      "Dars jarayonlari ko‘rsatiladi.",
    problem: "Yo‘q.",
    solution: "",
  },
  {
    title: "USP",
    current:
      "Maktabning afzalliklari kontentda aytiladi.",
    problem: "Hozircha yo‘q.",
    solution: "",
  },
  {
    title: "CTA",
    current:
      "Aloqa markazi va murojaat qilish imkoniyati mavjud.",
    problem:
      "CTA yaxshi, lekin oxiriga CTA screen'ga biroz ko‘proq ma’lumot sig‘dirsa bo‘ladi.",
    solution:
      "Reelsning oxiridagi screen'ga faqat murojaat uchun nomer emas, balki manzil va oyiga nech pul to‘lash kerakligini qo‘yish mumkin. O‘shanda murojaatda klient tarafdan savollar kamayadi.",
  },
  {
    title: "Conversion",
    current:
      "Profil kerakli ma’lumotlarni beradi.",
    problem: "Yo‘q.",
    solution: "",
  },
  {
    title: "Engagement",
    current:
      "Engagement aralash: ba’zi kontent yaxshi, ba’zilari past.",
    problem:
      "Bu asosiy muammo emas.",
    solution:
      "Engagementni asosiy KPI emas, yordamchi ko‘rsatkich sifatida ko‘rish.",
  },
];

const ideas = [
  {
    number: "01",
    title: "Reel №1",
    text:
      "Odamlar maktabga kirib kelishadi, iloji bo‘lsa tanaffus paytida va o‘quvchilardan maktab ta’limi haqida ma’lumot so‘rashadi va bilib olib javobni minus yoki plyusga tiqishadi. Plyus minus iloji bo‘lsa ekranning tepa qismida turib tursin, sanab turilishi uchun! Va oxiri natijalarni aytib (iloji bo‘lsa minus o‘quvchilar bo‘lmasin) maktabni maqtashadi va CTA, keyin tamom.",
  },
  {
    number: "02",
    title: "Reel №2",
    text:
      "Bir ona yoki ota birinchi bo‘lib bolasi qaysi maktabga borganini va u yerda yaxshi natijalar olmaganini aytadi va u yerdan keyin qanchalik yaxshi maktab qidirib qiynalishganini aytishadi. Keyin esa Renessansga o‘tib hammasi o‘zgarganini, bolasi har tomonlama + kirganini aytib beradi. Oxirida hammasi qiyinchilik bilan boshlanib IELTS 7+ yoki SAT score 1300+ tugaganlarini aytib beradilar. Bu Reelsning maqsadi oldingidek faqat ota-onalar maktabni maqtash emas, balki nega maqtayotgani, qanday hammasi bolaga ta’sir etganini tushuntirishadi. Oddiy so‘zda bolaning muvaffaqiyati tarixini aytib berishadi va bu Reel o‘zining tarixi deb oldingilaridan ajralib turadi.",
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [openRows, setOpenRows] = useState(
    data.map((_, index) => index)
  );

  const toggleRow = (index) => {
    setOpenRows((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const expandAll = () => {
    setOpenRows(data.map((_, index) => index));
  };

  const closeAll = () => {
    setOpenRows([]);
  };

  const filteredData = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return data;

    return data.filter((item) =>
      [
        item.title,
        item.current,
        item.problem,
        item.solution,
      ]
        .join(" ")
        .toLowerCase()
        .includes(value)
    );
  }, [search]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={dark ? "app dark" : "app"}>
      <div className="page-shell">

        {/* TOP BAR */}
        <header className="topbar">
          <div className="brand" onClick={() => scrollTo("top")}>
            <div className="brand-mark">R</div>
            <div>
              <h2>Renessans</h2>
              <span>SMM Analysis</span>
            </div>
          </div>

          <div className="top-actions">
            <button
              className="theme-btn"
              onClick={() => setDark(!dark)}
              title="Tema almashtirish"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        </header>

        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-content">
            <div className="hero-badge">RENESSANS SCHOOL</div>

            <h1>Renessans</h1>

            <p>
              Hozirgi holat, muammolar, solution va yangi idealar.
            </p>

            <div className="hero-buttons">
              <button onClick={() => scrollTo("analysis")}>
                Analizni ko‘rish ↓
              </button>

              <button
                className="secondary-btn"
                onClick={() => scrollTo("ideas")}
              >
                Yangi idealar →
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-title">Asosiy fokus</div>
            <strong>Ota-onani ishontirish</strong>
            <span>→ ko‘proq klientlar</span>
          </div>
        </section>

        {/* NAVIGATION */}
        <nav className="section-nav">
          <button
            className={activeSection === "all" ? "active" : ""}
            onClick={() => {
              setActiveSection("all");
              scrollTo("analysis");
            }}
          >
            Hozirgi holat
          </button>

          <button
            className={activeSection === "solutions" ? "active" : ""}
            onClick={() => {
              setActiveSection("solutions");
              scrollTo("solutions");
            }}
          >
            Solutions
          </button>

          <button
            className={activeSection === "ideas" ? "active" : ""}
            onClick={() => {
              setActiveSection("ideas");
              scrollTo("ideas");
            }}
          >
            Yangi idealar
          </button>
        </nav>

        {/* SEARCH */}
        <section className="control-panel">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Analizdan qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="control-buttons">
            <button onClick={expandAll}>Hammasini ochish</button>
            <button onClick={closeAll}>Hammasini yopish</button>
          </div>
        </section>

        {/* ANALYSIS */}
        <main id="analysis">

          <section className="section-heading">
            <span className="small-label">01</span>
            <div>
              <h2>Hozirgi holat</h2>
              <p>Profil va kontent bo‘yicha tahlil.</p>
            </div>
          </section>

          <div className="analysis-list">
            {filteredData.map((item, index) => {
              const isOpen = openRows.includes(index);

              return (
                <article className="analysis-card" key={item.title}>
                  <button
                    className="analysis-header"
                    onClick={() => toggleRow(index)}
                  >
                    <div className="header-left">
                      <span className="number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{item.title}</h3>
                    </div>

                    <span className={isOpen ? "arrow rotate" : "arrow"}>
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="analysis-body">
                      <div className="info-box current">
                        <span>HOZIRGI HOLAT</span>
                        <p>{item.current}</p>
                      </div>

                      <div className="info-box problem">
                        <span>MUAMMO</span>
                        <p>{item.problem}</p>
                      </div>

                      {item.solution && (
                        <div className="info-box solution">
                          <span>SOLUTION</span>
                          <p>{item.solution}</p>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* SOLUTIONS */}
          <section id="solutions" className="solutions-section">
            <section className="section-heading">
              <span className="small-label">02</span>
              <div>
                <h2>Solutions</h2>
                <p>Muammolar uchun yozilgan yechimlar.</p>
              </div>
            </section>

            <div className="solution-grid">
              {data
                .filter((item) => item.solution)
                .map((item, index) => (
                  <div className="solution-card" key={item.title}>
                    <div className="solution-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.solution}</p>
                  </div>
                ))}
            </div>
          </section>

          {/* IDEAS */}
          <section id="ideas" className="ideas-section">
            <section className="section-heading">
              <span className="small-label">03</span>
              <div>
                <h2>Yangi idealar</h2>
                <p>Kelajak uchun Reel g‘oyalari.</p>
              </div>
            </section>

            <div className="ideas-list">
              {ideas.map((idea) => (
                <article className="idea-card" key={idea.number}>
                  <div className="idea-number">{idea.number}</div>

                  <div className="idea-content">
                    <h3>{idea.title}</h3>
                    <p>{idea.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer>
          <div>
            <strong>Renessans</strong>
            <span>SMM Analysis</span>
          </div>

          <button onClick={() => scrollTo("top")}>
            ↑ Tepaga
          </button>
        </footer>

      </div>
    </div>
  );
};

export default App;