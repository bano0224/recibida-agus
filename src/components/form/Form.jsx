import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { db, storage } from "../../firebase";
import style from './Form.module.css'

export const Form = () => {

    const [progress, setProgress] = useState(0)
    const [input, setInput] = useState({
        name:"",
        message:"",
        image:"",
        date:""
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    
    const handleUpload = (e) => {
        console.log(e.target.name);
        uploadImageAsPromise({
          type: e.target.name,
          img: e.target.files[0],
          name: e.target.files[0]?.name,
        });
      };

      const uploadImageAsPromise = (imageFile) => {
        const { type, img, name } = imageFile;
        const metadata = {
          contentType: "image/jpeg",
        };
        try {
            const storageRef = ref(storage, "recibida/" + name);
            const uploadTask = uploadBytesResumable(storageRef, img, metadata);
    
            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                /* console.log("Upload is " + prog + "% done"); */
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                  case "storage/unauthorized":
                    // User doesn't have permission to access the object
                    break;
                  case "storage/canceled":
                    // User canceled the upload
                    break;
    
                  // ...
    
                  case "storage/unknown":
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }
              },
              () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  console.log("File available at", downloadURL);
                  addDoc(collection(db, `recibida-imagenes`), {
                    img: downloadURL,
                    name: name,
                  });
                  setInput({ ...input, image: downloadURL, date: new Date() });

                });
              }
            );
        } catch (err) {
            console.error(err);
          }
        }

    const handleSubmit = async() => {
        try {
            await addDoc(collection(db, `saludos`), input);
            window.location.reload();
            
          } catch (e) {
            console.error("Error al guardar el mensaje:", e);
          }
    }

        console.log(progress, "iinpuuut")

    return(
    <div className={style.container}>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nombre</label>
            <input onChange={(e) => handleChange(e)} type="text" className="form-control" name="name" id="exampleFormControlInput1" placeholder="Derek Shepherd"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
            <textarea onChange={(e) => handleChange(e)} className="form-control" name="message" placeholder="Agustina: 'Es un hermoso día para salvar vidas'" id="exampleFormControlTextarea1" rows="3" maxLength={140}></textarea>
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Elegir imagen</label>
            <input onChange={(e) => handleUpload(e)} class="form-control" type="file" id="formFile"/>
            <div class="progress mt-3">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Success example" style={{width: progress + "%"}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
                <span>{`${progress} %`}</span>
        </div>
        <div className="mt-2">
            <button onClick={() => handleSubmit()} disabled={(input.name === "" || input.message === "" || input.image === "") ? true : false} type="button" className="btn" style={{backgroundColor: "#FFB3B3", color:"#fff"}}>Enviar</button>
        </div>
    </div>
    )
}