import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import "../style/AddMusic.css"

const Add = () => {
    const [data, setData] = useState([]);
    const [Titre, setTitre] = useState("");
    const [Lien, setLien] = useState("");
    const [Genre, setGenre] = useState("");
    const [Artiste, setArtiste] = useState("");

    const Ajout = () => {
        axios
        .post(`${process.env.REACT_APP_SERVER}/music`, {
            Titre: Titre,
            Lien: Lien,
            Genre: Genre,
            Artiste: Artiste,
        })
        .catch((err) => {
            console.error(err);
        });
    };


    return (
       <div className='ALL'>
        <h1>Ajouter une musique</h1>
        <div className='ADD_MUSIC'>
            <input className="Add1"type="text"name="TitreChange"placeholder="Entrez le Titre"value={Titre}onChange={(e) => setTitre(e.target.value)}/>
            <input className="Add2"type="text"name="LienChange"placeholder="Entrez le Lien"value={Lien}onChange={(e) => setLien(e.target.value)}/>
            <input className="Add3"type="text"name="GenreChange"placeholder="Entrez le Genre"value={Genre}onChange={(e) => setGenre(e.target.value)}/>
            <input className="Add4"type="text"name="ArtisteChange"placeholder="Entrez le Artiste"value={Artiste}onChange={(e) => setArtiste(e.target.value)}/>

        <div className='button'>   
            <button
                className="buttonValidation"
                type="submit"
                onClick={() => {
                Ajout();
                }}
            >Ajouter
            </button>
        </div>     

        </div>
        </div> 
    );
};

export default Add;