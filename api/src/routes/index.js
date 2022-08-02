const { Router } = require('express');
const { getAll, getGameByName } = require('./controlers');
const { Videogame, Genre } = require('./../db'); 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', async (req, res)=>{
    try{
        let { name } = req.query;
        if(name){
            const gamesName = await getGameByName(name);
            if(gamesName.length > 0){
                res.send(gamesName);
            }else{
                res.send('No games found');
            }
        }else{
            const gamesApi = await getAll();
            res.send(gamesApi);
        }
    }
    catch(err){
        return err;
    }
})

router.post('/videogames', async (req, res) =>{
    const {name, description, date, rating, platforms, image, genre} = req.body;

        const newGame = await Videogame.create({
            name, 
            description,
            date,
            rating,
            platforms,
            image
        });
        const genres = await Genre.findAll({
            where: {
                name: genre
            }
        });
        newGame.addGenre(genres);
        return res.status(200).send('newGame created');
        // res.json(newGame);

})

module.exports = router;
