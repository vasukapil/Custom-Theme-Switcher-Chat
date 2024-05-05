import React, { useEffect } from 'react';
import UploadCircle from './UserProfile';
import Circle from './UserProfile';

function ThemeSwitcher({ theme, setTheme }) {
  const themes = [
    {
      background: 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)',
      bubbleBackground: '#fff',
    },
    {
      background: 'linear-gradient(239.26deg, #FFC107 63.17%, #FF69B4 94.92%)',
      bubbleBackground: '#FFC107',
    },
    {
      background: 'linear-gradient(239.26deg, #8BC34A 63.17%, #4CAF50 94.92%)',
      bubbleBackground: '#8BC34A',
    },
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }
  }, [setTheme]);

  const handleThemeChange = (theme) => {
    setTheme(theme);
    localStorage.setItem('theme', JSON.stringify(theme));
  };


  return (
    <>
    <UploadCircle/>
    <div className="flex justify-center items-center mb-4">
      <label htmlFor="themeSwitch" className="mr-2">Switch theme:</label>
      
      {themes.map((t, index) => (
        <button
          key={index}
          className={`p-2 rounded-md mx-2 ${t.bubbleBackground === theme.bubbleBackground ? 'bg-gray-200' : ''}`}
          onClick={() => handleThemeChange(t)}
        >
          {index + 1}
        </button>
      ))}
      <input
        id="themeSwitch"
        type="color"
        value={theme.bubbleBackground}
        onChange={(e) => setTheme({ ...theme, bubbleBackground: e.target.value })}
        className="w-10 h-10 rounded-md"
      />
      
    </div>
    </>
  );
}

export default ThemeSwitcher;
