import { Header } from "./components/header";
import { Post } from "./Post"

import './global.css';

export function App() {
  return (
    <div> 
      <Header />
      <Post 
        author="Gustavo" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia doloremque quae incidunt eius ea mollitia, cum, aperiam neque dolore nihil odio ad et dolorem sapiente quas sint. Explicabo, et voluptate." 
        />
        <Post 
          author="Isabella"
          content="Linda demais"
        />
  </div> 
)
}

