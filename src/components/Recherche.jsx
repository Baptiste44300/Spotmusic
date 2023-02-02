import React, { useState, useEffect } from 'react';
import axios from "axios"
import "../style/Recherche.css"

const Recherche = () => {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");



    

    
    const mapMusic = () => {
        axios
        .get(`${process.env.REACT_APP_SERVER}/music`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    };
    
    useEffect(() => {
        mapMusic();
    }, []);
    
    const handleSearch = (e) => {
        let { value } = e.target;
        setSearchTerm(value);
      };


    return (
        <div>
            <h1>Recherche Musique</h1>
            <div className="SearchMusic">
          <input
            type="text"
            placeholder="🔎  Rechercher une Musique"
            name="search"
            id="SearchBar"
            onChange={handleSearch}
          />
        </div>
            {data.filter((music)=>{
                return music.Titre.toLowerCase().includes(searchTerm.toLowerCase());
            }).map((music) => {
                return(
                    <div className='musique' key={music.id}>
                    <p className='Artiste'>{music.Artiste}</p>
                    <p className='Titre'>{music.Titre}</p>
                    <p className='Genre'>{music.Genre}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Recherche;