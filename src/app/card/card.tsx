import styles from './card.module.css'

export default function Card(props: any) {
    function flip() {
        console.log("increment like count");
    }
    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                <div className={styles.front}>
                    <img src={'images/'+props.image} className={styles.cardImage}></img>
                </div>
                <div className={styles.back}>
                    <h3 className={styles.cardHeader}>{props.header}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
