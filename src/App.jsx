import React, { useState } from 'react';
import Header from './componets/Header';
import Cards from './componets/Cards';
import './index.css';

import consoleIcon from './assets/logo-console-plus.svg';
import devlensIcon from './assets/logo-devlens.svg';
import snapshot from './assets/logo-dom-snapshot.svg';
import grid from './assets/logo-grid-guides.svg';
import jsonIcon from './assets/logo-json-wizard.svg';
import link from './assets/logo-link-checker.svg';
import markup from './assets/logo-markup-notes.svg';
import palette from './assets/logo-palette-picker.svg';
import speed from './assets/logo-speed-boost.svg';
import stylespyIcon from './assets/logo-style-spy.svg';
import tabIcon from './assets/logo-tab-master-pro.svg';
import viewport from './assets/logo-viewport-buddy.svg';

const extensionsList = [
  { id: 1, name: "DevLens", description: "Quickly inspect page layouts and visualize element boundaries.", icon: devlensIcon },
  { id: 2, name: "StyleSpy", description: "Instantly analyze and copy CSS from any webpage element.", icon: stylespyIcon },
  { id: 3, name: "SpeedBoost", description: "Optimizes browser resource usage to accelerate page loading.", icon: speed },
  { id: 4, name: "JSONWizard", description: "Formats, validates, and prettifies JSON responses in-browser.", icon: jsonIcon },
  { id: 5, name: "TabMaster Pro", description: "Organizes browser tabs into groups and sessions.", icon: tabIcon },
  { id: 6, name: "ViewportBuddy", description: "Simulates various screen resolutions directly within the browser.", icon: viewport },
  { id: 7, name: "Markup Notes", description: "Enables annotation and notes directly onto webpages for collaborative debugging.", icon: markup },
  { id: 8, name: "GridGuides", description: "Overlay customizable grids and alignment guides on any webpage.", icon: grid },
  { id: 9, name: "Palette Picker", description: "Instantly extracts color palettes from any webpage.", icon: palette },
  { id: 10, name: "LinkChecker", description: "Scans and highlights broken links on any page.", icon: link },
  { id: 11, name: "DOM Snapshot", description: "Capture and export DOM structures quickly", icon: snapshot },
  { id: 12, name: "ConsolePlus", description: "Enhanced developer console with advanced filtering and logging.", icon: consoleIcon }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filter, setFilter] = useState('all');
  const [cardStatuses, setCardStatuses] = useState(
    extensionsList.reduce((acc, card) => ({ ...acc, [card.id]: true }), {})
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleStatusToggle = (id) => {
    setCardStatuses(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredExtensions = extensionsList.filter(ext => {
    if (filter === 'all') return true;
    const isActive = cardStatuses[ext.id];
    return filter === 'active' ? isActive : !isActive;
  });

  return (
    <div className={`min-h-screen pt-12 pb-12 transition-colors duration-300 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} currentFilter={filter} setFilter={setFilter} />
      <main className="mx-28 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExtensions.map((extension) => (
            <Cards key={extension.id} id={extension.id} name={extension.name} description={extension.description} icon={extension.icon} isDarkMode={isDarkMode} isActive={cardStatuses[extension.id]} onToggle={handleStatusToggle} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;