import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


const posts = [
  {
    id: 1,
    author: { 
      avatarUrl: "https://pbs.twimg.com/profile_images/1817738431595696128/OOS20G8L_400x400.jpg",
      name: "Gustavo Sabino",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,' },
      { type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-03-01 18:00:00'),
  },
  {
    id: 2,
    author: { 
      avatarUrl: "https://media.licdn.com/dms/image/v2/D4E35AQHZ6V0N3_ScLw/profile-framedphoto-shrink_200_200/B4EZVNI_wOGwAc-/0/1740755959217?e=1741561200&v=beta&t=kp_6NAHef1260oGP0KQTjtHxM8Wc37GmyGDi_Me0IA8",
      name: "Isabella Guillermo",
      role: "Química & Gostosa"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,' },
      { type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-02-28 20:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}