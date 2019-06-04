import React from 'react';
import './Style/App.css';

export const Card = (props) => {
    return (
        <li>
            <a
                className='repoLink'
                href={props.href}>
                {props.name}
            </a>
            <p>
                {props.description}
            </p>
            <p
                className='updated'>
                Last Updated: {props.updatedAt}
            </p>
        </li>
    );
};
