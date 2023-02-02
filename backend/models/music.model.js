const db = require("../database.js");



const getAll = () => {
    return db.query("SELECT * FROM music")
}

const getById = (id) => {
    return db.query("SELECT * FROM music WHERE id=?", [id])
}

const createMusic = (Titre, Lien, Genre, Artiste) =>{
    return db.query("INSERT INTO music (Titre, Lien, Genre, Artiste) VALUES (?, ?, ?, ?)", [Titre, Lien, Genre, Artiste])
}

const updateMusic = (Titre, Lien, Genre, Artiste, id) => {
    return db.query("UPDATE music SET Titre=?, Lien=?, Genre=?, Artiste=? WHERE id=?", [Titre, Lien, Genre, Artiste, id])
}

const deleteMusic = (id) => {
    return db.query("DELETE FROM music WHERE id=?", [id])
}



module.exports = {
    getAll,
    getById,
    createMusic,
    updateMusic,
    deleteMusic
};