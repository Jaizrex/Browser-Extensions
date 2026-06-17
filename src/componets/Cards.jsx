import React from "react";

function Cards({ id, icon, name, description, isDarkMode, isActive, onToggle }) {
    return (
        <section className={`w-full p-6 rounded-2xl border shadow-xs flex flex-col justify-between min-h-47.5 transition-all duration-300 ${isDarkMode ? "bg-(--Neutral-800) border-(--Neutral-700)" : "bg-(--Neutral-0) border-(--Neutral-100)"}`}>
            <div className="upper-layer flex gap-4 items-start w-full">
                <div className="flex items-center justify-center shrink-0 w-12 h-12">
                    <img src={icon} alt={name} className="w-10 h-10 object-contain" />
                </div>
                <div className="texts flex-1">
                    <h3 className={`font-bold text-lg mb-1 transition-colors ${isDarkMode ? "text-white" : "text-(--Neutral-900)"}`}>{name}</h3>
                    <p className={`text-sm leading-relaxed transition-colors ${isDarkMode ? "text-gray-400" : "text-(--Neutral-600)"}`}>{description}</p>
                </div>
            </div>
            <div className={`lower-layer mt-6 pt-4 flex justify-between items-center border-t ${isDarkMode ? "border-(--Neutral-700)" : "border-(--Neutral-100)"}`}>
                <button className={`text-xs font-medium border rounded-xl px-4 py-2 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-(--Red-500) focus:ring-offset-2 ${isDarkMode ? "text-gray-300 border-gray-600 bg-transparent hover:bg-gray-700 focus:ring-offset-(--Neutral-800)" : "text-(--Neutral-600) border-(--Neutral-100) bg-(--Neutral-0) hover:bg-(--Neutral-100) focus:ring-offset-(--Neutral-200)"}`}>Remove</button>
                <button onClick={() => onToggle(id)} aria-label="Toggle extension active state" className={`w-11 h-6 flex items-center rounded-full p-0.5 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-(--Red-500) focus:ring-offset-2 ${isDarkMode ? "focus:ring-offset-(--Neutral-800)" : "focus:ring-offset-(--Neutral-200)"} ${isActive ? "bg-(--Red-700)" : (isDarkMode ? "bg-(--Neutral-600)" : "bg-(--Neutral-300)")}`}>
                    <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${isActive ? "translate-x-5" : "translate-x-0"}`} />
                </button>
            </div>
        </section>
    );
}

export default Cards;