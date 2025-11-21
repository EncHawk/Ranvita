import React from 'react';
import './cards.css';

// SVG Icon Components
const CultureIcon = () => (
  <svg className="category-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="50" r="15" stroke="url(#cultureGradient)" strokeWidth="3" fill="none" opacity="0.8"/>
    <circle cx="70" cy="50" r="15" stroke="url(#cultureGradient)" strokeWidth="3" fill="none" opacity="0.8"/>
    <path d="M45 50 L55 50" stroke="url(#cultureGradient)" strokeWidth="3" strokeLinecap="round"/>
    <path d="M25 35 Q30 30 35 35" stroke="url(#cultureGradient)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M65 35 Q70 30 75 35" stroke="url(#cultureGradient)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <defs>
      <linearGradient id="cultureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9e5dae" />
        <stop offset="100%" stopColor="#eef1ad" />
      </linearGradient>
    </defs>
  </svg>
);

const DJIcon = () => (
  <svg className="category-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Deck body */}
    <rect x="15" y="30" width="70" height="40" rx="6" stroke="url(#djGradient)" strokeWidth="3" fill="rgba(0,0,0,0.2)"/>

    {/* Platters */}
    <circle cx="35" cy="50" r="11" stroke="url(#djGradient)" strokeWidth="3" fill="none"/>
    <circle cx="35" cy="50" r="4" fill="url(#djGradient)"/>
    <circle cx="65" cy="50" r="11" stroke="url(#djGradient)" strokeWidth="3" fill="none"/>
    <circle cx="65" cy="50" r="4" fill="url(#djGradient)"/>

    {/* Crossfader */}
    <rect x="40" y="60" width="10" height="2" rx="1" fill="url(#djGradient)"/>
    <rect x="30" y="63" width="30" height="1" rx="0.5" fill="url(#djGradient)" opacity="0.5"/>

    {/* Knobs */}
    <circle cx="30" cy="37" r="2" fill="url(#djGradient)"/>
    <circle cx="40" cy="37" r="2" fill="url(#djGradient)"/>
    <circle cx="50" cy="37" r="2" fill="url(#djGradient)"/>
    <circle cx="60" cy="37" r="2" fill="url(#djGradient)"/>

    {/* Small LEDs */}
    <circle cx="22" cy="38" r="1.3" fill="#8ee1ef"/>
    <circle cx="22" cy="43" r="1.3" fill="#9e5dae"/>
    <circle cx="22" cy="48" r="1.3" fill="#eef1ad"/>

    <defs>
      <linearGradient id="djGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8ee1ef" />
        <stop offset="100%" stopColor="#9e5dae" />
      </linearGradient>
    </defs>
  </svg>
);

const ComedyIcon = () => (
  <svg className="category-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" stroke="url(#comedyGradient)" strokeWidth="3" fill="none"/>
    <circle cx="40" cy="45" r="4" fill="url(#comedyGradient)"/>
    <circle cx="60" cy="45" r="4" fill="url(#comedyGradient)"/>
    <path d="M40 60 Q50 70 60 60" stroke="url(#comedyGradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M50 30 L50 20" stroke="url(#comedyGradient)" strokeWidth="3" strokeLinecap="round"/>
    <defs>
      <linearGradient id="comedyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#eef1ad" />
        <stop offset="100%" stopColor="#8ee1ef" />
      </linearGradient>
    </defs>
  </svg>
);

const GamingIcon = () => (
  <svg className="category-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Phone body */}
    <rect x="30" y="20" width="40" height="60" rx="6" stroke="url(#gamingGradient)" strokeWidth="3" fill="none"/>
    <rect x="35" y="30" width="30" height="40" rx="2" fill="url(#gamingGradient)" opacity="0.2"/>
    
    {/* Screen */}
    <rect x="33" y="28" width="34" height="44" rx="3" stroke="url(#gamingGradient)" strokeWidth="2" fill="none" opacity="0.6"/>
    
    {/* Home indicator */}
    <rect x="45" y="75" width="10" height="2" rx="1" fill="url(#gamingGradient)" opacity="0.8"/>
    
    {/* Speaker */}
    <rect x="45" y="22" width="10" height="2" rx="1" fill="url(#gamingGradient)" opacity="0.6"/>
    
    {/* Volume buttons */}
    <rect x="72" y="30" width="2" height="8" rx="1" fill="url(#gamingGradient)"/>
    <rect x="72" y="42" width="2" height="8" rx="1" fill="url(#gamingGradient)"/>
    
    <defs>
      <linearGradient id="gamingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8ee1ef" />
        <stop offset="50%" stopColor="#9e5dae" />
        <stop offset="100%" stopColor="#eef1ad" />
      </linearGradient>
    </defs>
  </svg>
);

const TechIcon = () => (
  <svg className="category-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left angle bracket < */}
    <path d="M30 50 L45 35" stroke="url(#techGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 50 L45 65" stroke="url(#techGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Right angle bracket > */}
    <path d="M70 50 L55 35" stroke="url(#techGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M70 50 L55 65" stroke="url(#techGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Optional: Small decorative dots */}
    <circle cx="50" cy="30" r="2" fill="url(#techGradient)" opacity="0.6"/>
    <circle cx="50" cy="70" r="2" fill="url(#techGradient)" opacity="0.6"/>
    
    <defs>
      <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8ee1ef" />
        <stop offset="100%" stopColor="#9e5dae" />
      </linearGradient>
    </defs>
  </svg>
);

// Function to get the appropriate icon based on category
const getCategoryIcon = (category) => {
  switch (category) {
    case 'Culture':
      return <CultureIcon />;
    case 'Dj':
      return <DJIcon />;
    case 'Comedy':
      return <ComedyIcon />;
    case 'Gaming':
      return <GamingIcon />;
    case 'Tech':
      return <TechIcon />;
    default:
      return null;
  }
};

export default function EventsSection() {
  const events = [
    { 
      id: 2, 
      title: "Cultural Events", 
      description: "Express your creativity through music, dance, and art!",
      image: null,
      category: "Culture"
    },
    { 
      id: 3, 
      title: "Dj Night", 
      description: "Vibe to the beats of the best DJs the city has to offer!",
      image: null,
      category: "Dj"
    },
    { 
      id: 4, 
      title: "Standup Comedy", 
      description: "Super funny comics performing live, to make you laugh your heart out!",
      image: null,
      category: "Comedy"
    },
    { 
      id: 5, 
      title: "Gaming Tournaments", 
      description: "Battle it out in exciting gaming competitions with your squad!",
      image: null,
      category: "Gaming"
    },
    { 
      id: 6, 
      title: "Hackathon", 
      description: "Build innovative solutions that make real world impact!",
      image: null,
      category: "Tech"
    },
    {
      id: 7, 
      title: "Fun nd Fun", 
      description: "Promise you'll show up and well set the stage!!",
      image: null,
      category: "Tech"
    }
  ];

  const EventCard = ({ event }) => (
    <div className="event-card">
      <div className="event-card-image">
        {event.image ? (
          <img src={event.image} alt={event.title} className="event-image" />
        ) : (
          <div className="event-image-placeholder">
            <div className="category-icon-wrapper">
              {getCategoryIcon(event.category)}
            </div>
          </div>
        )}
      </div>
      <div className="event-card-content">
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-description">{event.description}</p>
      </div>
    </div>
  );

  return (
    <section className="events-section" id="events">
      <div className="events-container">
        <div className="events-header">
          <h2 className="events-title">Featured Events</h2>
          <p className="events-subtitle">
            Discover exciting events and competitions happening at Ranvita 2026
          </p>
        </div>
        
        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}