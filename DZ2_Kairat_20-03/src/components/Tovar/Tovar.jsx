import styles from './tovar.module.css'
function Tovar({ data })
{
    return (
        <div className={styles.tovar}>
            <img src={data.image} alt="pizza" />
            <h3>{data.name} 40см</h3>
            <p>Цена: <span> {data.price} cом</span></p>
        </div>
    )
}
export default Tovar