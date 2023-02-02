import React, { useState, useEffect} from 'react';
import axios from "axios";
import "../style/Delete.css"

const DeleteM = () => {
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


        const Delete = () => {

            axios
                .delete(`${process.env.REACT_APP_SERVER}/music/${targetId}`, {
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
            <h1>Supprimer une musique</h1>
        <div className='DELETE_MUSIC'>

            <select
                className="selectMusicDelete"
                onChange={(e) => setTargetId(e.target.value)}
                >
                <option defaultValue={null}>
                Selectionnez votre musique
                </option>
                {data.map((music) => {
                return <option key={music.id} value={music.id}>musique:{music.Titre}</option>;
                })}
            </select>


            <div className='button'>
                <button
                    className="buttonValidation"
                    type="modify"
                    onClick={() => {
                    Delete();
                    }}
                >
                    Delete
                </button>
            </div>    
        </div>
        </div>

    );
};

export default DeleteM;