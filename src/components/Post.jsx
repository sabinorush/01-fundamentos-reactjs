import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar} 
            src="https://pbs.twimg.com/profile_images/1817738431595696128/OOS20G8L_400x400.jpg" 
          />
          <div className={styles.authorInfo}>
            <strong>Gustavo Sabino</strong>
            <span>Web Developer</span>
          </div>
        </div>

       <time title="11 de maio ás 8:13h" dateTime="2022-05-11 08:13:00">Publicado há 1hr</time> 
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href=''>  #novoprojeto</a>{' '}
          <a href=''>  #nlw</a>{' '}
          <a href=''> #rocketseat </a>
          </p>
      </div>
    </article>
  )
}