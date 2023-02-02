import React, { useState, useEffect} from 'react';
import axios from "axios";
import "../style/Modify.css"

const ModifyM = () => {
    const [data, setData] = useState([]);
    const [Titre, setTitre] = useState("");
    const [Lien, setLien] = useState("");
    const [Genre, setGenre] = useState("");
    const [Artiste, setArtiste] = useState("");
    const [targetId, setTargetId] = useState(null);


    const getMusic = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER}/music`)
            .then((res) => {
                setData(res.data);
                setTargetId(res.data[0].id)
            })
            .catch((err) => {
                console.log(err)
            })
    }

        useEffect(()=>{
            getMusic()

        }, [])


    
    const Modify = () => {

    axios
        .put(`${process.env.REACT_APP_SERVER}/music/${targetId}`, {
            Titre: Titre,
            Lien: Lien,
            Genre: Genre,
            Artiste: Artiste,
        })
        .then(() => {
            getMusic();
        })
        .catch((err) => {
            console.error(err);
        });
    };


return (
   <div className='all'>
    <h1>Modifier une musique</h1>
    <div className='MODIFY_MUSIC'>
        <select
            className="selectMusic"
            onChange={(e) => setTargetId(e.target.value)}
            >
            <option defaultValue={null}>
            Selectionnez votre musique
            </option>
            {data.map((music) => {
            return <option key={music.id} value={music.id}>musique:{music.Titre}</option>;
            })}
        </select>

        <input
        className="Change1"
        type="text"
        name="TitreDeLaMusique"
        placeholder="Entrez le nom de la musique"
        value={Titre}
        onChange={(e) => setTitre(e.target.value)}
        />

        <input
        className="Change2"
        type="text"
        name="TitreDeLaMusique"
        placeholder="Entrez le nom du lien"
        value={Lien}
        onChange={(e) => setLien(e.target.value)}
        />

        <input
        className="Change3"
        type="text"
        name="TitreDeLaMusique"
        placeholder="Entrez le nom du genre"
        value={Genre}
        onChange={(e) => setGenre(e.target.value)}
        />

        <input
        className="Change4"
        type="text"
        name="TitreDeLaMusique"
        placeholder="Entrez le nom de l'artiste"
        value={Artiste}
        onChange={(e) => setArtiste(e.target.value)}
        />      

            <div className='button'>
                <button
                    className="buttonValidation"
                    type="modify"
                    onClick={() => {
                    Modify();
                    }}
                >
                    Modifier
                </button>
            </div>    
        </div>
    </div>  
);
};

export default ModifyM;