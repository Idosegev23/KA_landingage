// src/components/HomePage.js

import React, { useState } from 'react';
import logo from '../assets/logo11.svg';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../chatbot/config';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';
import { FaWhatsapp, FaEnvelope, FaRobot } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

// נתיבים לתמונות הצוות ולוגואים
const teamImages = {
  ido: require('../assets/Ido.png'),
  kochavith: require('../assets/kochavith.png')
};

const logos = [
  { src: require('../assets/EY.png'), alt: 'EY' },
  { src: require('../assets/elal.png'), alt: 'אל על' },
  { src: require('../assets/hamachon.png'), alt: 'המכון' },
  { src: require('../assets/hapoalim.jpg'), alt: 'בנק הפועלים' },
  { src: require('../assets/ituran.jpg'), alt: 'איתורן' },
  { src: require('../assets/kiryatuno.png'), alt: 'עיריית קרית אונו' },
  { src: require('../assets/leumi.jpg'), alt: 'בנק לאומי' },
  { src: require('../assets/maccabi.png'), alt: 'מכבי' },
  { src: require('../assets/nadlancenter.png'), alt: 'מרכז הנדל"ן' },
  { src: require('../assets/police.png'), alt: 'משטרת ישראל' }
];

const services = [
  {
    title: 'ייעוץ אסטרטגי ועסקי להטמעת AI',
    description: 'אנו מספקים ייעוץ אסטרטגי מעמיק כדי לסייע לארגונים להבין כיצד ניתן לשלב את טכנולוגיות ה-AI בתהליכים העסקיים שלהם ולמקסם את היעילות והרווחיות.'
  },
  {
    title: 'הכשרות וסדנאות מותאמות לארגונים',
    description: 'הכשרות וסדנאות מותאמות אישית לצרכי הארגון, כולל מבוא לטכנולוגיות AI, פיתוח יכולות חיזוי והבנה עמוקה של הפוטנציאל הטכנולוגי.'
  },
  {
    title: 'פיתוח מודלים ופתרונות חכמים',
    description: 'אנו מפתחים ומטמיעים פתרונות AI חכמים ומודלים חיזוי מתקדמים בהתאמה אישית, על מנת לספק לארגון כלים עוצמתיים להתמודדות עם אתגרים עסקיים.'
  },
  {
    title: 'שילוב חווית לקוח (CX) ובינה מלאכותית (AI)',
    description: 'שיפור חווית הלקוח באמצעות שילוב AI בכל נקודות המגע עם הלקוח, כולל תמיכה אוטומטית, התאמה אישית והמלצות מבוססות נתונים.'
  },
  {
    title: 'הדרכות חיות ותמיכה טכנית',
    description: 'אנו מציעים הדרכות חיות ותמיכה טכנית מתקדמת למשתמשים ולצוותים הארגוניים, כדי להבטיח שילוב חלק ויעיל של טכנולוגיות AI.'
  }
];

const HomePage = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [expandedService, setExpandedService] = useState(null);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const handleServiceClick = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className='min-h-screen flex flex-col' dir='rtl' style={{ backgroundColor: '#f0f0f0' }}>
      <Helmet>
        <title>KA - פתרונות AI מתקדמים</title>
        <meta name='description' content='KA - מובילים בפתרונות AI ו-CX מתקדמים לעסקים' />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>
      
      <header className='bg-[#0D0D0D] text-white p-4 text-center flex items-center justify-center shadow-lg rounded-b-2xl relative'>
        <img src={logo} alt='KA Logo' className='h-24 ml-4 relative z-10' />
        <h1 className='text-4xl font-bold relative z-10'>KA - פתרונות AI מתקדמים</h1>
      </header>
      
      <main className='flex-grow p-4 container mx-auto max-w-screen-lg'>
        {/* פעילות החברה - מוצגת בצורה בולטת ויפה */}
        <motion.section 
          className='mb-8 bg-gradient-to-r from-[#D9A25F] to-[#F27979] text-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-center'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='w-full md:w-3/4 text-center'>
            <h2 className='text-4xl font-semibold mb-4'>KA מובילים בניהול ופיתוח עסקי</h2>
            <p className='text-lg'>
              חברת KA מתמחה בשילוב AI ו-CX בתהליכים עסקיים. אנו מציעים ייעוץ והדרכה מתקדמים בתחומים אלו, כולל ליווי והטמעה מותאמת אישית בארגונים.
            </p>
          </div>
        </motion.section>

        {/* אודותינו */}
        <motion.section 
          className='mb-8 bg-white rounded-2xl shadow-lg p-8'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-2xl font-semibold mb-4 text-white bg-[#D9A25F] p-2 rounded'>אודותינו</h2>
          <p className='text-gray-700 text-lg'>
            KA היא חברה מובילה בפתרונות AI ו-CX לארגונים ברחבי העולם. אנו מציעים שירותי ייעוץ, הטמעה והדרכה מתקדמים בתחומים אלו, תוך שימוש בטכנולוגיות החדשניות ביותר לשיפור תהליכים עסקיים ויצירת חווית לקוח מושלמת.
          </p>
          <p className='text-gray-700 mt-4 text-lg'>
            אנו עובדים עם מגוון לקוחות, מחברות בינלאומיות ועד סטארט-אפים קטנים, ומספקים פתרונות מותאמים אישית לצרכים הייחודיים של כל לקוח.
          </p>
          <p className='text-gray-700 mt-4 text-lg'>
            הצוות שלנו מורכב ממומחים בתחומי הבינה המלאכותית, חווית הלקוח והפיתוח העסקי, שמטרתם להוביל את הארגון שלך להצלחה בעידן הדיגיטלי.
          </p>
          <p className='text-gray-700 mt-4 text-lg'>
            בין השירותים שאנו מציעים: ייעוץ אסטרטגי, הטמעת פתרונות טכנולוגיים, סדנאות והדרכות, ופיתוח מודלים חכמים למגוון תחומים.
          </p>
        </motion.section>

        {/* סוגי השירותים */}
        <motion.section 
          className='mb-8 bg-white rounded-2xl shadow-lg p-8'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-2xl font-semibold mb-4 text-white bg-[#D9A25F] p-2 rounded'>סוגי השירותים</h2>
          {services.map((service, index) => (
            <div key={index} className='mb-4'>
              <button
                onClick={() => handleServiceClick(index)}
                className='w-full text-right p-4 bg-[#F0F0F0] rounded-md focus:outline-none text-lg'
              >
                <h3 className='text-xl font-bold'>{service.title}</h3>
              </button>
              {expandedService === index && (
                <motion.div 
                  className='p-4 bg-gray-100 rounded-md'
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className='text-gray-700'>{service.description}</p>
                </motion.div>
              )}
            </div>
          ))}
        </motion.section>

        {/* הצוות - כוכבית מעל עידו */}
        <motion.section 
          className='mb-8 bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex-shrink-0'>
            <img src={teamImages.kochavith} alt='כוכבית ארנון' className='w-40 h-40 rounded-full mb-4 md:mb-0 object-cover' />
          </div>
          <div className='mt-4 md:mt-0 md:ml-4 text-center md:text-right'>
            <h2 className='text-2xl font-semibold mb-4 text-white bg-[#D9A25F] p-2 rounded'>כוכבית ארנון מייסדת ומנכ"לית</h2>
            <p className='text-gray-700'>
              כוכבית ארנון מובילה בתחום חווית הלקוח והבינה המלאכותית. היא פיתחה ויישמה אסטרטגיות חדשניות המשלבות בין הטכנולוגיה לתחום חווית הלקוח תוך שימוש בנתוני BIG DATA לשיפור והטמעת תהליכים דיגיטליים בארגונים המובילים במשק.
            </p>
          </div>
        </motion.section>
        <motion.section 
          className='mb-8 bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex-shrink-0'>
            <img src={teamImages.ido} alt='עידו שגב' className='w-40 h-40 rounded-full mb-4 md:mb-0 object-cover' />
          </div>
          <div className='mt-4 md:mt-0 md:ml-4 text-center md:text-right'>
            <h2 className='text-2xl font-semibold mb-4 text-white bg-[#D9A25F] p-2 rounded'>עידו שגב מנכ"ל חטיבת AI</h2>
            <p className='text-gray-700'>
              עידו שגב הוא מומחה בהטמעת AI בתהליכי עבודה בארגונים, בעל ניסיון של מעל 15 שנה בניהול בתחומי הפיננסים, הביטוח והתקשורת. הוא מוביל את חטיבת ה-AI ב-KA ומספק ייעוץ וליווי אישי לארגונים ומנהלים.
            </p>
          </div>
        </motion.section>
        
        {/* פרויקטים */}
        <motion.section 
          className='mb-8 bg-white rounded-2xl shadow-lg p-8'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-2xl font-semibold mb-4 text-white bg-[#D9A25F] p-2 rounded'>הפרויקטים שלנו</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>פרויקט AI בחברה מובילה</h3>
              <p className='text-gray-700'>
                הובלת פרויקט חדשני לשילוב AI בתהליכי עבודה של חברה בינלאומית מובילה בתחום הפיננסים. הפרויקט כלל פיתוח והטמעה של מודלים לחיזוי והערכת סיכונים.
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>פרויקט CX בחברה טכנולוגית</h3>
              <p className='text-gray-700'>
                ייעוץ וליווי תהליכי חווית לקוח (CX) בחברה טכנולוגית מובילה בישראל. כלל איפיון, פיתוח והטמעת פתרונות טכנולוגיים לשיפור השירות והתהליכים הדיגיטליים.
              </p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>הכשרת צוותים בנושא AI</h3>
              <p className='text-gray-700'>
                העברת סדנאות והכשרות מתקדמות בתחום ה-AI לצוותי הנהלה ועובדים במגוון ארגונים, תוך התאמה אישית לצרכי הלקוח ושילוב דוגמאות מעשיות.
              </p>
            </div>
          </div>
        </motion.section>
        
        {/* לקוחות */}
        <section className='mb-8 bg-white rounded-2xl shadow-lg p-8'>
          <h2 className='text-2xl font-semibold mb-4 text-white bg-[#D9A25F] p-2 rounded'>לקוחותינו</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {logos.map((logo, index) => (
              <motion.div 
                key={index}
                className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow'
                whileHover={{ scale: 1.05 }}
              >
                <img src={logo.src} alt={logo.alt} className='w-32 mx-auto' />
              </motion.div>
            ))}
          </div>
        </section>
        
        <div className='flex justify-center space-x-4'>
          <a href='https://wa.me/972523030009' className='bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded flex items-center'>
            <FaWhatsapp className='mr-2' /> WhatsApp
          </a>
          <a href='mailto:kochavith.arnon@gmail.com' className='bg-[#D9B26A] hover:bg-[#F2E205] text-white px-4 py-2 rounded flex items-center'>
            <FaEnvelope className='mr-2' /> Email
          </a>
        </div>
      </main>
      <footer className='bg-[#0D0D0D] text-white p-4 text-center rounded-t-2xl'>
        <p>© 2024 KA - כל הזכויות שמורות.</p>
      </footer>
      <div className='fixed bottom-4 right-4'>
        <FaRobot className='text-4xl text-[#D9A25F] cursor-pointer' onClick={toggleChatbot} />
        {showChatbot && (
          <div className='mt-2'>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
