import React from "react";
import logo from '../assets/logo.svg';
import darkMode from '../assets/icon-moon.svg';
import lightMode from '../assets/icon-sun.svg';

function Header({ isDarkMode, toggleTheme, currentFilter, setFilter }) {
    return (
        <>
            <header className={`header-container flex items-center justify-between mx-4 md:mx-28 mb-8 md:mb-12 p-2 border-b rounded-2xl shadow-2xs transition-colors duration-300 ${isDarkMode ? "bg-(--Neutral-800) border-(--Neutral-700)" : "bg-(--Neutral-0) border-(--Neutral-100)"}`}>
                <img src={logo} alt="Logo" className="h-6 md:h-8" />
                <button className={`mr-1 flex items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-(--Red-500) focus:ring-offset-2 cursor-pointer ${isDarkMode ? "bg-(--Neutral-700) hover:bg-(--Neutral-600)" : "bg-(--Neutral-100) hover:bg-(--Neutral-200)"}`} onClick={toggleTheme}>
                    <img src={isDarkMode ? lightMode : darkMode} alt="Toggle Mode" className="w-5 h-5" />
                </button>
            </header>
            <div className="display flex flex-col sm:flex-row sm:items-center justify-between gap-4 mx-4 md:mx-28 mb-6 md:mb-10">
                <h2 className={`title text-2xl md:text-4xl font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-(--Neutral-900)"}`}>Extensions List</h2>
                <div className="control-btns flex gap-2 w-full sm:w-auto">
                    <button className={`control flex-1 sm:flex-initial text-base md:text-[19px] px-4 md:px-5 py-1.5 md:py-1 rounded-3xl cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-(--Red-500) focus:ring-offset-2 transition-all ${currentFilter === 'all' ? "bg-(--Red-700) text-white" : (isDarkMode ? "bg-(--Neutral-800) text-white border border-(--Neutral-700)" : "bg-(--Neutral-0) text-(--Neutral-900) border border-(--Neutral-100)")}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`control flex-1 sm:flex-initial text-base md:text-[19px] px-4 md:px-5 py-1.5 md:py-1 rounded-3xl cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-(--Red-500) focus:ring-offset-2 transition-all ${currentFilter === 'active' ? "bg-(--Red-700) text-white" : (isDarkMode ? "bg-(--Neutral-800) text-white border border-(--Neutral-700)" : "bg-(--Neutral-0) text-(--Neutral-900) border border-(--Neutral-100)")}`} onClick={() => setFilter('active')}>Active</button>
                    <button className={`control flex-1 sm:flex-initial text-base md:text-[19px] px-4 md:px-5 py-1.5 md:py-1 rounded-3xl cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-(--Red-500) focus:ring-offset-2 transition-all ${currentFilter === 'inactive' ? "bg-(--Red-700) text-white" : (isDarkMode ? "bg-(--Neutral-800) text-white border border-(--Neutral-700)" : "bg-(--Neutral-0) text-(--Neutral-900) border border-(--Neutral-100)")}`} onClick={() => setFilter('inactive')}>Inactive</button>
                </div>
            </div>
        </>
    );
}

export default Header;