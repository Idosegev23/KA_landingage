// src/components/AdminPage.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // בדוק אם המשתמש מחובר - לדוגמה, דרך JWT או טוקן אחר
    const isAuthenticated = true; // יש לעדכן זאת בהתאם ללוגיקה של האפליקציה שלך

    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold mb-4'>דף ניהול</h1>
      <p>ברוך הבא למערכת הניהול.</p>
      {/* הוסף כאן את תוכן דף הניהול */}
    </div>
  );
}

export default AdminPage;
