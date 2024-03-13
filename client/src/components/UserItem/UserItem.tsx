import styles from './UserItem.module.css';
import { UserItemProps } from './UserItem.props';
import PhoneSvg from '../../icons/phone.svg?react';
import EmailSvg from '../../icons/email.svg?react';
import { useUserInfoStore } from '../../store/user-info.store';

export const UserItem = ({user, ...props}: UserItemProps) => {
    const {setUser} = useUserInfoStore();
    const onClick = () => {
        setUser(user);
    }

    return (
        <div className={styles.item} onClick={onClick} {...props}>
            <div className={styles.item__header}>{user.name}</div>
            <div className={styles.item__main}>
                <div className={styles.item__info}>
                    <PhoneSvg className={styles.icon}/>
                    <span>{user.phone}</span>
                </div>
                <div className={styles.item__info}>
                    <EmailSvg className={styles.icon}/>
                    <span>{user.email}</span>
                </div>
            </div>
        </div>
    )
}