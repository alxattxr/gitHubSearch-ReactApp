import React from 'react';
import './Style/App.css';

/******************************************************
 * REPOS COUNT COMPONENT
 ******************************************************/

export const Desc = (props) => {
      return (
          <div>
              <div className='descContainer'>
                  <ReposCount length={props.length} top={props.top}/>
                  <SelectSort value={props.value} onChange={props.onChange}/>
              </div>
              <hr/>
          </div>
      );
};

/******************************************************
 * REPOS COUNT COMPONENT
 ******************************************************/

const WarningMessage = () => {
    return (
        <div>
            <div className='warningMessage'> No repositories found for this username...</div>
        </div>
    );
};

const Count = (props) => {
    return (
        <div>
            <div> Found <strong> {props.length} </strong> repositories. Showing {props.top} :</div>
        </div>
    );
};

const NumberRepos = (props) => {
  return props.length < 1 ? <WarningMessage /> : <Count length={props.length} top={props.top}/>;
};

const ReposCount = (props) => {
    return (
        <div className='repoSubHeader'>
            <h3> Repositories</h3>
            <NumberRepos length={props.length} top={props.top}/>
        </div>
    );
};

/******************************************************
 * SELECT SORT CLASS
 ******************************************************/

const SelectSort = props => (
    <div className='sortContainer'>
        <span className='bolder'> Sort By: </span>
        <select value={props.value} onChange={props.onChange}>
            <option value="0">Most Recent First</option>
            <option value="1">Oldest First</option>
        </select>
    </div>
);
