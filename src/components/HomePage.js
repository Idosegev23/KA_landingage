// src/components/HomePage.js
import React from 'react';
import logo from '../assets/logo11.svg'; // נתיב ללוגו

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-[#0D0D0D] text-white p-4 text-center flex items-center justify-center">
        <img src={logo} alt="KA Logo" className="h-16 mr-4" />
        <h1 className="text-4xl font-bold">KA - פתרונות AI מתקדמים</h1>
      </header>
      <main className="flex-grow p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#D9A25F]">כוכבית ארנון מייסדת ומנכ"לית</h2>
          <p className="text-gray-700">
            מרצה בארגונים ובאקדמיה. חוקרת מתמחה ומרצה על AI ושילובו בארגונים. מנהלת Broadcast "AI לאנשים עסוקים". סמנכ"ל בכירה לשעבר בהראל ביטוח ופיננסים, ראש אגף שירות הלקוחות. מעל 25 שנות ניסיון בניהול בארגונים בתחומי הפיננסים, הביטוח והתקשורת.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#D9A25F]">עידו שגב מנכ"ל חטיבת AI</h2>
          <p className="text-gray-700">
            עידו שגב הוא מומחה בהטמעת AI בתהליכי עבודה בארגונים, בעל ניסיון של מעל 15 שנה בניהול בתחומי הפיננסים, הביטוח והתקשורת. הוא מוביל את חטיבת ה-AI ב-KA ומספק ייעוץ וליווי אישי לארגונים ומנהלים.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#D9A25F]">KA מובילים בניהול ופיתוח עסקי</h2>
          <p className="text-gray-700">
            חברת KA מתמחה בשילוב AI ו-CX בתהליכים עסקיים. אנו מציעים ייעוץ והדרכה מתקדמים בתחומים אלו, כולל ליווי והטמעה מותאמת אישית בארגונים.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#D9A25F]">לקוחותינו</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/he/thumb/8/8c/Itrack_logo.svg/2560px-Itrack_logo.svg.png" alt="איתורן" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/he/5/55/Mizrahi_tefahot_logo.png" alt="בנק מזרחי טפחות" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/he/thumb/1/13/Maccabi_health_services_logo.svg/2560px-Maccabi_health_services_logo.svg.png" alt="מכבי" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Clalit_Logo.svg/2560px-Clalit_Logo.svg.png" alt="כללית" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/he/4/47/El_Al_Logo.svg" alt="אל-על" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/he/thumb/0/05/Leumi_logo.svg/2560px-Leumi_logo.svg.png" alt="בנק לאומי" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/EY_logo_2019.svg/2560px-EY_logo_2019.svg.png" alt="EY" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/he/thumb/e/e7/Ben-Gurion_University_of_the_Negev_logo.svg/2560px-Ben-Gurion_University_of_the_Negev_logo.svg.png" alt="אוניברסיטת בן-גוריון" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/he/thumb/2/29/Reichman_University_Logo.svg/2560px-Reichman_University_Logo.svg.png" alt="רייכמן" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kiryat_ono.svg/2560px-Kiryat_ono.svg.png" alt="עיריית קרית אונו" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/he/thumb/3/3a/Israel_Airports_Authority_Logo.svg/2560px-Israel_Airports_Authority_Logo.svg.png" alt="רשות שדות התעופה" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/he/thumb/6/65/Phoenix_Logo_2019.svg/2560px-Phoenix_Logo_2019.svg.png" alt="הפניקס" className="w-32 mx-auto" />
            <img src="https://www.ashdod.gov.il/res/sites/motkavaRashit/smart.jpg" alt="סמארט" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/he/thumb/6/63/Poalim.svg/2560px-Poalim.svg.png" alt="בנק הפועלים" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/he/thumb/5/55/Shufersal2009.svg/2560px-Shufersal2009.svg.png" alt="שופרסל" className="w-32 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Israel_Police_logo.svg/2560px-Israel_Police_logo.svg.png" alt="משטרת ישראל" className="w-32 mx-auto" />
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#D9A25F]">פרויקטים מובילים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">פרויקט א</h3>
              <p>כאן תוכל למלא תיאור של פרויקט מוביל שביצעתם.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">פרויקט ב</h3>
              <p>כאן תוכל למלא תיאור של פרויקט נוסף.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">פרויקט ג</h3>
              <p>כאן תוכל למלא תיאור של פרויקט נוסף.</p>
            </div>
          </div>
        </section>
        <div className="flex justify-center space-x-4">
          <a href="https://wa.me/972523030009" className="bg-[#F27979] hover:bg-[#D9A25F] text-white px-4 py-2 rounded">WhatsApp</a>
          <a href="mailto:kochavith.arnon@gmail.com" className="bg-[#D9B26A] hover:bg-[#F2E205] text-white px-4 py-2 rounded">Email</a>
        </div>
      </main>
      <footer className="bg-[#0D0D0D] text-white p-4 text-center">
        <p>© 2024 KA - כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}

export default HomePage;
