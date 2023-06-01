const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {

    try {
        const { id, name,  status, image, species, gender, origin } = req.body;

        if(!id || !name  || !status || !image || !species || !gender || !origin ){
            return res.status(401).send("Faltan datos")
        } 

        await Favorite.findOrCreate({where: { id }, defaults: { id, name, status, image, species, gender,origin }});
        const favList = await Favorite.findAll();

        return res.status(200).send(favList);

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postFav 
