import { useEffect, useState } from 'react';
import { Search } from '../components/Search/Search';
import styles from './App.module.css';
import { UserList } from '../components/UserList/UserList';
import { useUsersStore } from '../store/users.store';
import { useDebounce } from '../hooks/debounce';
import { UserInfoPopup } from '../components/UserInfoPopup/UserInfoPopup';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const debounced = useDebounce(searchQuery);
    const {users, findUserByName, findAllUsers} = useUsersStore();

    useEffect(() => {
      if(!searchQuery) {
        findAllUsers();
      } else {
        findUserByName(debounced);
      }
    }, [debounced]);

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    return (
      <div className={styles.container}>
        <Search onSearch={onSearch}/>
        <UserList users={users}/>
        <UserInfoPopup/>
      </div>
    )
}

export default App
