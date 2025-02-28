import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1740324361353-7856adbaa885?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img
            className={styles.avatar} 
            src="https://pbs.twimg.com/profile_images/1817738431595696128/OOS20G8L_400x400.jpg"
        />

        <strong>Gustavo Sabino</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
            <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}