const login = require ("../controllers/login")
const {getCharById} = require("../controllers/getCharById")
const router = require("express").Router();
const postUser = require('../controllers/postUser')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')

router.get('/character/:id',(req,res)=>{
    getCharById(req,res);
})
router.get('/login', (req,res)=>{
    login(req,res)
} )
router.post('/login',postUser)

router.post('/fav', (req,res)=>{
     postFav(req,res)
})
router.delete('/fav/:id', (req,res)=>{
    deleteFav(req,res)
});

module.exports= router;