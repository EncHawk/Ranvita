import React from 'react';
import './guests.css';

export default function PreviousGuests() {
  // Easy-to-edit array of guest names
  const guestNames = [
    "Jordindian",
    "Dj Tony",
    "Troy Mcilroy",
    "Sunidhi Chauhan",
    "Nucleya",
    "Amit Trivedi"
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedGuests = [...guestNames, ...guestNames];

  return (
    <section className="guests-section" id="guests">
      <div className="guests-container">
        <div className="guests-header">
          <h2 className="guests-title">Not convinced yet?</h2>
          <p className="guests-subtitle">Our Previous Guests:</p>
        </div>
        
        <div className="marquee-wrapper">
          <div className="marquee">
            {duplicatedGuests.map((name, index) => (
              <div key={index} className="guest-name">
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="guests-cta">
          <div className="cta-card">
            <p className="cta-tagline">Ready when you are</p>
            <h3 className="cta-headline">
              The best thing you can do instead of pondering is to Register right away!
            </h3>
            <div className="cta-buttons">
              <a href="https://rapid.grayquest.com/cmru-reg-master" target='_blank' className="cta-btn cta-btn-primary">
                Register Now
              </a>
              <button type="button" className="cta-btn cta-btn-secondary">
                Brochure
              </button>
            </div>
            <div className="cta-accent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

