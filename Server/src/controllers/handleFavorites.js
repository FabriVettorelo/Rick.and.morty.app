const {Favorite}= require('../DB_connection');

const handleFav = async(req,res)=>{
    try {

        const favs = await Favorite.findAll();
        return res.status(200).json(favs)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = handleFav;