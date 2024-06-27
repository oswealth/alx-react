import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

/**
 * 
 */
function Notifications() {
  const buttonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    float: 'right'
  }
  return (
    <div className="Notifications">
      <button 
        aria-label="Close"
        style={ buttonStyle }
        onClick={ () => console.log('Close button has been clicked') }
        >
          <img className="close-icon" src={closeIcon} alt="Close" />
        </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default priority">New course available</li>
        <li data-priority="urgent priority">New resume available</li>
        <li data-priority="urgent priority" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
}

export default Notifications;
