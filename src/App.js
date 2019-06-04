import React, {useState} from 'react';
import './Style/App.css';
import {Desc} from './Desc.js';
import {SearchBar} from './SearchBar.js'
import {Card} from './Result.js';
import moment from 'moment';

const sortRepos = (sortOrder, reposToSort) => {
    let sortFn = (a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime();

    if (sortOrder === '1') {
        sortFn = (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    }

    return reposToSort.sort(sortFn);
};

export const useMyState = () => {
    const [userName, setUserName] = useState('');
    const [repos, setRepos] = useState(undefined);
    const [sort, setSort] = useState('0');

    return {userName, setUserName, repos, setRepos,sort, setSort};
};

export const App = (props) => {
    const {userName, setUserName, repos, setRepos,sort, setSort} = useMyState();
    const onSortChange = (event) => {
        const newSort = event.target.value;
        setSort(newSort);
        const newRepos = sortRepos(newSort, repos);
        setRepos(newRepos);
    };

    const onUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userName.length === 0) {
            setRepos(undefined);
        } else {
            fetch(props.api + userName + "/repos")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    const newRepos = sortRepos(sort, data);
                    setRepos(newRepos);
                });
        }
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} onChange={onUserNameChange} userName={userName}/>
            {repos !== undefined && <Desc length={repos.length} top={props.top} value={sort} onChange={onSortChange}/>}
            {repos && <ul>
                {repos.slice(0, props.top).map(repo =>
                    <Card key={repo.id}
                          href={repo.html_url}
                          name={repo.name}
                          description={repo.description}
                          updatedAt={moment(repo.updated_at, "YYYYMMDD").fromNow()}
                    />
                )}
            </ul>}
        </div>
    );
};

App.defaultProps = {
    top: 10,
    api: 'https://api.github.com/users/'
};

export default App;
