import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return( 
    <div className={styles.Comment}>
      <img
       src="https://pbs.twimg.com/profile_images/1817738431595696128/OOS20G8L_400x400.jpg"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Sabino</strong>
              <time title="11 de maio ás 8:13h" dateTime="2022-05-11 08:13:00">cerca de 1hr atrás</time> 
            </div>

            <button title='Delete comment'>
              <Trash size={20}/>
            </button>
          </header>

          <p>Muito bom Devon, Parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
   )
}