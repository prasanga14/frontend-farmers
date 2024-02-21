import React, { useState } from 'react';
import '../Styles/professional.scss';

// Import images for the professionals
import professional1 from '../Images/farmer2.webp';
import professional2 from '../Images/farmer1.jpg';
import professional3 from '../Images/user.jpg';

const ProfessionalSupport = () => {
  const professionals = [
    {
      id: 1,
      name: 'Suresh Nepal',
      expertise: 'Crop Management',
      email: 'suresh.nepal@gmail.com',
      image: professional1,
    },
    {
      id: 2,
      name: 'Ramesh Pariyar',
      expertise: 'Soil Health',
      email: 'ramesh.pariyar@gmail.com',
      image: professional2,
    },
    {
      id: 3,
      name: 'Ranjit Thapa',
      expertise: 'Pest Control',
      email: 'ranjit.thapa@gmail.com',
      image: professional3,
    },
  ];

  const [currentProfessional, setCurrentProfessional] = useState(0);

  const handlePrev = () => {
    setCurrentProfessional((prev) =>
      prev === 0 ? professionals.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentProfessional((prev) =>
      prev === professionals.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="professional-support">
      <h2>Contact Professionals</h2>
      <div className="slider-container">
        <div className="professional-card">
          <img
            src={professionals[currentProfessional].image}
            alt={professionals[currentProfessional].name}
          />
          <h3>{professionals[currentProfessional].name}</h3>
          <p>{professionals[currentProfessional].expertise}</p>
          <p>Email: {professionals[currentProfessional].email}</p>
        </div>
        <div className="nav-buttons">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSupport;
