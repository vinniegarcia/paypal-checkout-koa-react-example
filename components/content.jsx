import React from 'react';

const items = ({name, age, createdAt}, index) => <li key={index}>{name} - {age} years old</li>;

const Content = ({list}) => {
    return (
        <div className="user-list">
            <ul>
            {
                list.map(items)
            }
            </ul>
            <form method="post" action="/payment">
                <button type="submit">Make Payment</button>
            </form>
        </div>
    )  
};

export default Content;