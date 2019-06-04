import React from 'react';
import './Style/App.css';

export const SearchBar = (props) => {
    return (
        <div >
            <div className='searchBarContainer'>
                <form onSubmit={props.onSubmit}>
                    <span className='bolder'> GitHub Username : </span>
                    <input className='inputField'
                           type='text'
                           size='40'
                           placeholder='Enter Username Here'
                           onChange={props.onChange}
                           value={props.userName}/>
                    <button type='Submit'>Go</button>
                </form>
            </div>
            <hr/>
        </div>
    )
};
