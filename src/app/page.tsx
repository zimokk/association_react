import Card from './card/card'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <Card image="potter.jpg" header="Harry Potter" description="Потому что Рождество и глинтвейн"></Card>
        </div>
        <div className={styles.cell}>
          <Card image="lego.jpeg" header="Лего" description="Потому что восхищенный взгляд собранного мотоцикла помню до сих пор"></Card>
        </div>
        <div className={styles.cell}>
          <Card image="sova.jpg" header="Полумна" description="Так же легко засыпаешь (особенно под фильм)"></Card>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <Card image="polumna.jpeg" header="Полумна" description="Все еще в поисках единорогов"></Card>
        </div>
        <div className={styles.cell}>
          <Card image="violet.png" header="Фиолетовый" description="Нежный и иногда бесячий"></Card>
        </div>
        <div className={styles.cell}>
          <Card image="elba.jpg" header="Эльба" description="Твое фото на пике острова"></Card>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <Card image="otono.jpg" header="Осень" description="Твой день рождения и последние холодные покатушки на мотоцикле"></Card>
        </div>
        <div className={styles.cell}>
          <Card image="eyes.png" header="The Weeknd - In Your Eyes" description="
            In_your_eyes,
            I_see_there's_something burning_inside_you
            Oh,_inside_you.....">
            </Card>
        </div>
        <div className={styles.cell}>
          <Card image="olives.jpeg" header="Оливки" description="Съесть все еще до того, как принесли вино"></Card>
        </div>
      </div>

      <div className={styles.center}>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  )
}
