import React from 'react';
import './App.css';
import ContactCard from './ContactCard';


function App() {
  return (
    <div className="App">
      <div className="contact1">
        <ContactCard name="Jane Doe" className="person c1" mobileNum="(123) 456-7890" email="jane.doe@gmail.com" />
      </div>

      <div className="contact2">
        <ContactCard name="Jon Doe" mobileNum="(123) 644-3243" email="jon.doe@gmail.com" />
      </div>

      <div className="contact3">
        <ContactCard name="Jock Doe" mobileNum="(123) 232-1346" email="jock.doe@gmail.com" />
      </div>

    </div>
  );
}

export default App;

