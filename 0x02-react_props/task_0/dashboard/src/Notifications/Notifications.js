import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/closeIcon.png';
import { getLatestNotification } from "../utils/utils.js";

function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            <button
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '15px',
                    cursor: 'pointer',
                    color: '#3a3a3a',
                    background: 'transparent',
                    border: 'none'
                }}
                aria-label="Close"
                onClick={() => console.log('Close button has been clicked')}
            >
                <img src={closeIcon} alt="close-icon" width={'10px'} height={'10px'} />
            </button>
        </div>
    );
}

export default Notifications;
