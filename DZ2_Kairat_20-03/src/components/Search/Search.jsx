import styles from './search.module.css';
function Search()
{
    return (
        <div className={styles.header}>
            <div className={styles.logo}><img src="../../../public/LogoIP.png" alt="" /></div>
            <form method='GET'>
                <input placeholder='Искать здесь...' type="text" />
                <button type='submit'>🔍</button>
            </form>
        </div>
    )
}
export default Search