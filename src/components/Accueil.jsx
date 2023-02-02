import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Accueil.css"

const Modify = () => {
    return (
        <div className='Card_Modify'>

            <Link to="/AddMusic">
                <div className='AddMusic'>
                <p>Ajouter une Musique</p>
                </div>    
            </Link>

            <Link to="/DeleteMusic">
                <div className='DeleteMusic'>
                <p>Supprimer une Musique</p>
                </div>
            </Link>

            <Link to="/ModifyMusic">
            <div className='ModifyMusic'>
                <p>Modifier une Musique</p>
                </div>
            </Link>
            
        </div>
    );
};

export default Modify;