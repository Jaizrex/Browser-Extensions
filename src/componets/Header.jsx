import React from "react";
import logo from '../assets/logo.svg';
import darkMode from '../assets/icon-moon.svg';
import lightMode from '../assets/icon-sun.svg';

function Header({ isDarkMode, toggleTheme, currentFilter, setFilter }) {
    return (
        <>
            <header className={`header-container flex items-center justify-between mx-28 mb-12 p-2 border-b rounded-2xl shadow-2xs transition-colors duration-300 ${isDarkMode ? "bg-(--Neutral-800) border-(--Neutral-700)" : "bg-(--Neutral-0) border-(--Neutral-100)"}`}>
                <img src={logo} alt="Logo" />
                <button className={`mr-1 flex items-center justify-center h-11 w-11 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-(--Red-500) focus:ring-offset-2 cursor-pointer ${isDarkMode ? "bg-(--Neutral-700) hover:bg-(--Neutral-600)" : "bg-(--Neutral-100) hover:bg-(--Neutral-200)"}`} onClick={toggleTheme}>
                    <img src={isDarkMode ? lightMode : darkMode} alt="Toggle Mode" />
                </button>
            </header>
            <div className="display flex items-center justify-between mx-28">
                <h2 className={`title text-4xl font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-(--Neutral-900)"}`}>Extensions List</h2>
                <div className="control-btns flex gap-2.5">
                    <button className={`control text-[19px] px-5 py-1 rounded-3xl cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-(--Red-500) focus:ring-offset-2 transition-all ${currentFilter === 'all' ? "bg-(--Red-700) text-white" : (isDarkMode ? "bg-(--Neutral-800) text-white border border-(--Neutral-700)" : "bg-(--Neutral-0) text-(--Neutral-900) border border-(--Neutral-100)")}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`control text-[19px] px-5 py-1 rounded-3xl cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-(--Red-500) focus:ring-offset-2 transition-all ${currentFilter === 'active' ? "bg-(--Red-700) text-white" : (isDarkMode ? "bg-(--Neutral-800) text-white border border-(--Neutral-700)" : "bg-(--Neutral-0) text-(--Neutral-900) border border-(--Neutral-100)")}`} onClick={() => setFilter('active')}>Active</button>
                    <button className={`control text-[19px] px-5 py-1 rounded-3xl cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-(--Red-500) focus:ring-offset-2 transition-all ${currentFilter === 'inactive' ? "bg-(--Red-700) text-white" : (isDarkMode ? "bg-(--Neutral-800) text-white border border-(--Neutral-700)" : "bg-(--Neutral-0) text-(--Neutral-900) border border-(--Neutral-100)")}`} onClick={() => setFilter('inactive')}>Inactive</button>
                </div>
            </div>
        </>
    );
}

export default Header;