import React from 'react';
import escapeHtml from 'escape-html';
import config from '../server/config';

const items = ({name, age, createdAt}, index) => <li key={index}>{name} - {age} years old</li>;

const Incontext = ({list}) => {
    return (
        <div className="user-list">
            <ul>
            {
                list.map(items)
            }
            </ul>
            <form id="ic-form" method="post" action="/payment">
                
            </form>
            
        </div>
    )  
};

export default Incontext;