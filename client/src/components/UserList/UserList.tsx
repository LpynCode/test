import { UserItem } from '../UserItem/UserItem';
import styles from './UserList.module.css';
import { UserListProps } from './UserList.props';

export const UserList = ({users, ...props}: UserListProps) => {

    
    return (
        <div className={styles.list} {...props}>
            {users && users.map((user) => <UserItem key={user.email} user={user}/>)}
        </div>
    )
}