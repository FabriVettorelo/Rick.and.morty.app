const login = require ("../controllers/login")
const {getCharById} = require("../controllers/getCharById")
const router = require("express").Router();
const postUser = require('../controllers/postUser')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const {loadChars} = require('../controllers/loadChars')
const handleFav = require("../controllers/handleFavorites")
const loadUsers = require("../controllers/loadUsers")

router.get('/character/:id',(req,res)=>{
    getCharById(req,res);
})
router.post('/login', (req,res)=>{
    login(req,res)
} )
router.get('/chars', (req,res)=>{
    loadChars(req,res)
} )
router.get('/fav', (req,res)=>{
    handleFav(req,res)
} )
router.post('/users',postUser);
router.get('/users', (req,res)=>{
    loadUsers(req,res)
} )
router.post('/fav', (req,res)=>{
     postFav(req,res)
})
router.delete('/fav/:id', (req,res)=>{
    deleteFav(req,res)
});

module.exports= router;