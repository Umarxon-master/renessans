import React from 'react';
import './App.css';

const SMMReport = () => {
  return (
    <div className="report-container">
      {/* Sarlavha qismi */}
      <header className="report-header">
        <div className="badge">SMM HISOBOTI</div>
        <h1>SMM FAOLIYATI BO‘YICHA HISOBOT</h1>
        <p className="report-period">
          <strong>Hisobot davri:</strong> 10-oktabr – 10-noyabr, 2026
        </p>
      </header>

      {/* 1. Loyiha haqida */}
      <section className="report-card">
        <h2>1. LOYIHA HAQIDA</h2>
        <div className="info-grid">
          <div className="info-item">
            <span className="label">Brend:</span>
            <span className="value highlight">LA KUBA</span>
          </div>
          <div className="info-item">
            <span className="label">Asosiy platforma:</span>
            <span className="value">Instagram</span>
          </div>
          <div className="info-item full-width">
            <span className="label">Faoliyat yo‘nalishi:</span>
            <span className="value">Turli ta’mlardagi Mojito va boshqa salqin ichimliklarni sotish.</span>
          </div>
          <div className="info-item full-width">
            <span className="label">Instagram sahifasi:</span>
            <a 
              href="https://www.instagram.com/lakuba_uzbekistan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              @lakuba_uzbekistan ↗
            </a>
          </div>
        </div>

        <div className="sub-block">
          <h3>Hisobot maqsadi:</h3>
          <ul className="styled-list">
            <li>Bir oy davomida amalga oshirilgan SMM faoliyatini ko‘rsatish.</li>
            <li>Nashr qilingan kontentlarni tahlil qilish.</li>
            <li>Instagram sahifasining statistik natijalarini baholash.</li>
            <li>Kuchli va yaxshilanishi kerak bo‘lgan tomonlarni aniqlash.</li>
            <li>Keyingi oy uchun SMM rivojlantirish yo‘nalishlarini belgilash.</li>
          </ul>
        </div>
      </section>

      {/* 2. Bajarilgan ishlar */}
      <section className="report-card">
        <h2>2. HISOBOT DAVOMIDA BAJARILGAN ISHLAR</h2>
        <p className="section-desc">
          10-oktabrdan 10-noyabrgacha Instagram sahifasida jami <strong>14 ta kontent</strong> joylashtirilgan.
        </p>

        <table className="data-table">
          <thead>
            <tr>
              <th>Kontent turi</th>
              <th>Soni</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reels</td>
              <td>3 ta</td>
            </tr>
            <tr>
              <td>Post</td>
              <td>8 ta</td>
            </tr>
            <tr>
              <td>Stories</td>
              <td>3 ta</td>
            </tr>
            <tr className="total-row">
              <td><strong>Jami</strong></td>
              <td><strong>14 ta</strong></td>
            </tr>
          </tbody>
        </table>

        <div className="content-breakdown">
          <h3>Reels kontentlari</h3>
          <div className="reels-grid">
            <div className="reel-box">
              <h4>1. LA KUBA Shatoot</h4>
              <p>Mahsulotni estetik muhitda ko‘rsatish orqali uning vizual jozibadorligini oshirishga qaratilgan video.</p>
            </div>
            <div className="reel-box">
              <h4>2. LA KUBA ta’mlari</h4>
              <p>Bir nechta ichimlik ta’mlarini namoyish qilish va mahsulot tanlovini ko‘rsatishga qaratilgan video.</p>
            </div>
            <div className="reel-box">
              <h4>3. «Bugun qaysi LA KUBA'ni ichaman?»</h4>
              <p>Tomoshabinni turli ta’mlar orasidan tanlov qilishga undaydigan, interaktiv yondashuvdagi video.</p>
            </div>
          </div>

          <h3>Post kontentlari</h3>
          <p className="sub-text">8 ta post orqali mahsulotlar turli vizual uslublarda namoyish etilgan. Asosiy kreativ yo‘nalishlar:</p>
          <ul className="styled-list">
            <li>LA KUBA mahsulotini kreativ personaj yordamida tanishtirish.</li>
            <li>Blueberry va Strawberry ta’mlarini o‘zaro taqqoslash.</li>
            <li>LA KUBA Energy ichimligini sport va energiya mavzusi bilan bog‘lash.</li>
            <li>Mojito ichimligini suv, muz va limon bilan estetik ko‘rsatish.</li>
            <li>Mahsulotni quyoshli kun va yozgi kayfiyat bilan bog‘lash.</li>
            <li>LA KUBA Anorli ta’mini alohida taqdim etish.</li>
            <li>Mojito Blueberry mahsulotini tungi va salqin atmosfera orqali ko‘rsatish.</li>
          </ul>

          <h3>Stories</h3>
          <p className="sub-text">Hisobot davrida <strong>3 ta Stories</strong> joylashtirilgan.</p>
        </div>
      </section>

      {/* 3. Umumiy statistika */}
      <section className="report-card">
        <h2>3. INSTAGRAM SAHIFASINING UMUMIY STATISTIKASI</h2>
        <p className="section-desc">Hisobot davri uchun Instagram Insights ma’lumotlari:</p>

        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-number">10 548</span>
            <span className="stat-title">Jami ko‘rishlar (Views)</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">4 251</span>
            <span className="stat-title">Tomoshabinlar (Viewers)</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">311</span>
            <span className="stat-title">O‘zaro aloqalar (Interactions)</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">210</span>
            <span className="stat-title">Faol akkauntlar (Engaged)</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">236</span>
            <span className="stat-title">Profil harakatlari</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">232</span>
            <span className="stat-title">Profil tashriflari</span>
          </div>
        </div>

        <div className="audience-split">
          <h3>Ko‘rishlar auditoriyasi</h3>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-followers" style={{ width: '45%' }}>Obunachilar: 45%</div>
              <div className="progress-nonfollowers" style={{ width: '55%' }}>Obuna bo‘lmaganlar: 55%</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Kontent turlari bo'yicha natijalar */}
      <section className="report-card">
        <h2>4. KONTENT TURLARI BO‘YICHA NATIJALAR</h2>
        
        <div className="tables-row">
          <div className="table-col">
            <h3>Ko‘rishlar bo‘yicha taqsimot</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Kontent turi</th>
                  <th>Ko‘rishlar ulushi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reels</td>
                  <td className="highlight-cell">68,9%</td>
                </tr>
                <tr>
                  <td>Postlar</td>
                  <td>27,1%</td>
                </tr>
                <tr>
                  <td>Stories</td>
                  <td>4,1%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-col">
            <h3>O‘zaro aloqalar bo‘yicha taqsimot</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Kontent turi</th>
                  <th>Interactions ulushi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reels</td>
                  <td className="highlight-cell">82,9%</td>
                </tr>
                <tr>
                  <td>Postlar</td>
                  <td>13,9%</td>
                </tr>
                <tr>
                  <td>Stories</td>
                  <td>3,2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="audience-split">
          <h3>O‘zaro aloqalar auditoriyasi</h3>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-followers" style={{ width: '20.6%' }}>20,6%</div>
              <div className="progress-nonfollowers" style={{ width: '79.4%' }}>Obuna bo‘lmaganlar: 79,4%</div>
            </div>
          </div>
          <p className="legend-note">* Obunachilar: 20,6% | Obuna bo‘lmaganlar: 79,4%</p>
        </div>
      </section>

      {/* 5. Profil faolligi tahlili */}
      <section className="report-card">
        <h2>5. PROFIL FAOLLIGI TAHLILI</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Ko‘rsatkich</th>
              <th>Natija</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Profil tashriflari</td>
              <td>232</td>
            </tr>
            <tr>
              <td>Tashqi havolaga bosishlar</td>
              <td>4</td>
            </tr>
            <tr className="total-row">
              <td><strong>Jami profil harakatlari</strong></td>
              <td><strong>236</strong></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Yakuniy xulosa */}
      <section className="report-card conclusion-card">
        <h2>YAKUNIY XULOSA</h2>
        <p>
          10-oktabrdan 10-noyabrgacha LA KUBA Instagram sahifasida 3 ta Reels, 8 ta post va 3 ta Stories — jami 14 ta kontent joylashtirilgan.
        </p>
        <p>
          Hisobot davrida sahifa <strong>10 548 ta ko‘rish</strong> va <strong>311 ta o‘zaro aloqaga</strong> erishgan. Reels kontentlari ko‘rishlar va o‘zaro aloqalar bo‘yicha eng katta ulushni egallagan.
        </p>
        <p>
          Keyingi davrda asosiy e’tibor Reels samaradorligini davom ettirish, Stories faolligini oshirish, yangi auditoriyani obunachiga aylantirish va profilga tashriflarni foydali harakatlarga aylantirishga qaratilishi lozim.
        </p>
      </section>

      {/* Footer */}
      <footer className="report-footer">
        <p><strong>Hisobot yakuni.</strong></p>
        <p>Manba: LA KUBA Instagram Insights va hisobot davrida joylashtirilgan kontentlar. Hisobot faqat taqdim etilgan ma’lumotlarga asoslangan.</p>
      </footer>
    </div>
  );
};

export default SMMReport;