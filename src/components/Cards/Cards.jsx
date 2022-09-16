import { collection, onSnapshot, query } from "firebase/firestore";
import React, {useState, useEffect} from "react";
import { db } from "../../firebase";
import { Card } from "../card/Card";
import style from './Cards.module.css'


export const Cards = ({setLoading}) => {
    const[post, setPost] = useState([]);
    

    const getPosts = async () => {
        try {
          const results = query(collection(db, `saludos`));
          onSnapshot(results, (querySnapshot) => {
            const posts = [];
            querySnapshot.forEach((doc) => {
              posts.push({ ...doc.data(), id: doc.id });
            });
            setPost(posts);
            setLoading(false);
          });
        } catch (e) {
          console.error("No hay resultados disponibles:", e);
        }
      };

      useEffect(() => {
        getPosts()
      },[])

    return (
        <div className={style.containerCards}>
            {post.length > 0 ? 
            <>
            {post.length > 0 && post?.map((p, i) => (
                <Card key={i} image={p.image} name={p.name} message={p.message} />
            ))}
            </>
            : <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="visually mr-1">Loading...</span>
          </button>}
        </div>
    )
}