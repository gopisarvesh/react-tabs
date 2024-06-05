// src/components/Tabs.js
import React, { useState } from 'react';
import './Tabs.css'; // For styling

const Tabs = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const handleNextClick = () => {
    setActiveTabIndex((prevIndex) => (prevIndex + 1) % tabs.length);
  };

  const handlePreviousClick = () => {
    setActiveTabIndex((prevIndex) => (prevIndex - 1 + tabs.length) % tabs.length);
  };

  return (<div>
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button
          key={tab.label}
          className={`tab-button ${activeTabIndex === index ? 'active' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
    <div className="tab-content">
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          className={`tab-panel ${activeTabIndex === index ? 'active' : ''}`}
        >
            {
                activeTabIndex===0 && <div><p>Tab 1</p><input type="text" style={{"padding":"10px"}} placeholder='Username' /><br /><br />
                <input type="text" style={{"padding":"10px"}} placeholder='Age' /></div>
            }

           {
                activeTabIndex===1 && <div><p>Tab 2</p><input type="text" style={{"padding":"10px"}} placeholder='Username' /><br /><br />
                <input type="text" style={{"padding":"10px"}} placeholder='Age' /></div>
            }
             {
                activeTabIndex===2 && <div><p>Tab 3</p><input type="text" style={{"padding":"10px"}} placeholder='Username' /><br /><br />
                <input type="text" style={{"padding":"10px"}} placeholder='Age' /></div>
            }
        </div>
      ))}
    </div>
    <div className="tab-navigation">
        <button onClick={handlePreviousClick} disabled={activeTabIndex === 0}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={activeTabIndex === tabs.length - 1}>
          Next
        </button>
      </div>
    </div>
    )
};

export default Tabs;