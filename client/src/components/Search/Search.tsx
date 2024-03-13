import styles from './Search.module.css'
import SearchSvg from '../../icons/search.svg?react';
import { SearchProps } from './Search.props';

export const Search = ({onSearch, ...props}: SearchProps) => {
    return (
        <div className={styles.input_wrapper} {...props}>
            <input onChange={onSearch} className={styles.input} type="text"/>
            <SearchSvg className={styles.icon}/>
        </div>
    )
}