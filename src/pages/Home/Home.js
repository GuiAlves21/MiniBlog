import styles from './Home.module.css'

import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import PostDetails from '../../components/PostDetails';

const Home = () => {
  const [query,setQuery] = useState("");
  const {documents: post, loading } = useFetchDocuments("posts")

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventdefault();
    
    if(query){
      return navigate(`/search?q=${query}`)
    }

  }
  return (
    <div className={styles.home}>
        <h1>Veja nosso posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input type="text" placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)}/>
          <button className="btn btn-dark">Pesquisar</button>
        </form>
        <div className="post-list">
        {loading && <p>Carregando...</p>}
        {post && post.map((post) => <PostDetails key={post.id} post={post}/>)}
        {post && post.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        </div>
    </div>
  )
}

export default Home