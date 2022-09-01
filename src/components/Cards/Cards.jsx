import { collection, onSnapshot, query } from "firebase/firestore";
import React, {useState, useEffect} from "react";
import { db } from "../../firebase";
import { Card } from "../card/Card";
import style from './Cards.module.css'


export const Cards = () => {
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
            {post.length > 0 && post?.map((p, i) => (
                <Card key={i} image={p.image} name={p.name} message={p.message} />
            ))}
        </div>
    )
}