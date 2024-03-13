import styles from './UserInfoPopup.module.css';
import { Dialog } from "@headlessui/react";
import { useUserInfoStore } from '../../store/user-info.store';
import CloseIcon from '../../icons/close.svg?react';

export const UserInfoPopup = () => {
    const {isPopupOpen, user, setUser} = useUserInfoStore();

    const closePopup = () => {
        setUser(null);
    }

    if(!user) return;

    return (
        <Dialog open={isPopupOpen} onClose={closePopup}> 
            <div className={styles.popup_bg}>
                <Dialog.Panel className={styles.popup}>
                    <Dialog.Title className={styles.popup_title}>
                        <span>{user?.name}</span>
                        <button className={styles.popup_close} onClick={closePopup}>
                            <CloseIcon/>
                        </button>
                    </Dialog.Title>

                    <div className={styles.main_info}>
                        <span className={styles.info_label}>Телефон: </span> 
                        <span className={styles.info_value}>{user.phone}</span>

                        <span className={styles.info_label}>Почта: </span> 
                        <span className={styles.info_value}>{user.email}</span>

                        <span className={styles.info_label}>Дата приема: </span> 
                        <span className={styles.info_value}>{user.hire_date}</span>

                        <span className={styles.info_label}>Должность: </span> 
                        <span className={styles.info_value}>{user.position_name}</span>

                        <span className={styles.info_label}>Подразделение: </span> 
                        <span className={styles.info_value}>{user.department}</span>
                    </div>

                    <div className={styles.additional_info}>
                        <span className={styles.info_label}>Дополнительная информация: </span>
                        <span className={styles.info_value}>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</span>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}