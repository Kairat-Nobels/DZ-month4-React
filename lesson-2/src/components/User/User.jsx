import styles from './user.module.css'

function User({ data, person })
{
    console.log(styles);
    return (
        <li>
           <span className={styles.textBlue}> {data.name}</span>
        </li>
    )
}
export default User