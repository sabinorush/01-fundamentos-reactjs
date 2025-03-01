import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post(props) {
  console.log(props)
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
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href=''>  #novoprojeto</a>{' '}
          <a href=''>  #nlw</a>{' '}
          <a href=''> #rocketseat </a>
          </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário'/>

      <footer>
        <button type='submit'>Publicar</button>
      </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}