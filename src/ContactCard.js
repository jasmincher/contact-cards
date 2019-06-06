import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function ContactCard(props) {
    return (
        <div className="person">
            <h2>{props.name}</h2>
            <p>Mobile Number: {props.mobileNum}</p>
            <p>Email: {props.email}</p>
        </div>
    );
}

export default ContactCard;
