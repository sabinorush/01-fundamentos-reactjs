import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author: {avatar_url: "string", name: "string", role: "string"}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: { 
      avatarUrl: "https://pbs.twimg.com/profile_images/1817738431595696128/OOS20G8L_400x400.jpg",
      name: "Gustavo Sabino",
      role: "Web Developer"
    },
    content: [
      { type: 'phraragraph', content: 'Fala galeraa 👋' },
      { type: 'phraragraph', content:'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,' },
      { type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('20022-02-28 18:00:00'),
  },
  {
    id: 2,
    author: { 
      avatarUrl: "https://scontent-gru1-2.cdninstagram.com/v/t51.2885-19/452250106_1895823237508174_4250897022963860610_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=110&_nc_oc=Q6cZ2AFUaNJENVHiiBsa3THUpyoNsGn-aWOGK-rcq3Wbk2DJrIwC-nR_0e9TZNl0AANPs_keP0FEblquEuhwAOVQUZjX&_nc_ohc=RHewIzVNmgQQ7kNvgHDtInJ&_nc_gid=f50243831c694f07a7a22039fac9fa79&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYA_sfzG4gKOW4KNNZE6E_77ZhNHiVoa0taeQ9UTByzG1g&oe=67C95249&_nc_sid=8b3546",
      name: "Isabella Guillermo",
      role: "Química & Gostosa"
    },
    content: [
      { type: 'phraragraph', content: 'Fala galeraa 👋' },
      { type: 'phraragraph', content:'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,' },
      { type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('20025-02-28 20:00:00'),
  }
]

// iteração -> estrutura de repetição

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