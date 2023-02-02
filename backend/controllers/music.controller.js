const musicModel = require("../models/music.model");


const getAll = async (req, res) => {
    try{
        const [result] = await musicModel.getAll()
            return res.status(200).send(result)

            }catch(err){
                console.error(err)
                return res.status(500).send("erreur")
            }
};


const getById = async (req, res) => {
    try{
        const [result] = await musicModel.getById(req.params.id)
            return res.status(200).send(result)

            }catch(err){
                console.error(err)
                return res.status(500).send("erreur")
            }
};


const createMusic = async (req, res) => {
    try{
        const {Titre, Lien, Genre, Artiste} = req.body

        const [result] = await musicModel.createMusic(Titre, Lien, Genre, Artiste) 
        console.log(result)
            if(result.insertId > 0){
                return res.status(201).send(result)
            }else{
                res.status(404).send("existe deja");
            }}catch(err){
            console.error(err)
            return res.status(500).send("erreur")
    }
};


const updateMusic = async (req, res) => {
    try{
        const {Titre, Lien, Genre, Artiste} = req.body
        const {id} = req.params

        const [result] = await musicModel.updateMusic(Titre, Lien, Genre, Artiste, id)
            if(result.affectedRows > 0){
                return res.status(201).send(result)
            } else {
                return res.status(400).send("erreur mise à jour");
            }
    } catch (err) {
        console.error(err)
        return res.status(500).send(err);
    }
};


const deleteMusic = async (req, res) => {
    try{
        const [result] = await musicModel.deleteMusic(req.params.id)
            if(result.affectedRows > 0){
                return res.status(201).send(result)
            }}catch(err){
                console.error(err)
                return res.status(500).send("erreur")
    }
};


module.exports = {
    getAll,
    getById,
    createMusic,
    updateMusic,
    deleteMusic
};