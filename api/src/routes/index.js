const { Router } = require('express');
const axios = require('axios').default;
const {Country, Activity, countries_act} = require('../db')
const cors = require("cors")
const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser')
const { Op } = require('sequelize');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use(bodyParser.json())
router.use(cors())
router.use(express.json())
router.use(morgan("dev"))


router.use(async (req, res, next) => {
  const countries = await Country.count();
  if (!countries) {
    const api = await axios.get("https://restcountries.eu/rest/v2/all")
    const mapcountry = api.data.map((c) => ({   //axios siempre lo trae en .data a la info
      alpha3Code: c.alpha3Code,
      name: c.name,                       //--->> traemos solo las propiedades q necesitamos!!
      flag: c.flag,
      region:c.region,
      capital: c.capital,
      subregion:c.subregion,
      area: c.area,
      population: c.population,
    }))
    await Country.bulkCreate(mapcountry) //ulkCreate will return an array of model instances/DAOs,
  }
  next() 
})
        //MIDDLEWARE
// Las funciones de middleware pueden realizar las siguientes tareas:

// Ejecutar cualquier código.
// Realizar cambios en la solicitud y los objetos de respuesta.
// Finalizar el ciclo de solicitud/respuestas.
// Invocar la siguiente función de middleware en la pila.



router.get("/countries", async (req, res) => {
  let countries;
  let { name, region } = req.query;
  if(name && region){
    name = name.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    region = region.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    //split() divide un objeto de tipo String en un array (vector) 
    //de cadenas mediante la separación de la cadena en subcadenas.
    //chatAt el caracteren el indice (x) es......
    //toUppercase a mayus
    //El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando 
    //por inicio hasta fin (fin no incluido). El array original no se modificará.
    //slice corta
    //join une

    countries = await Country.findAll({      //buscar todos donde....
        where: {name: { [Op.like]: `%${name}%` },
          region: { [Op.like]: `%${region}%` },
        },
        include: { model: Activity, required: false },  //tenga actividad o no
      });
      if (countries===[]){return res.status(400).send({error: "ups!"})}
      return  res.json(countries) ;
  }


  if (name) {
    name = name.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    countries = await Country.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
      include: { model: Activity, required: false },
    });
    return res.json(countries) ;
  }


  if (region) {
    region = region.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    let countries = await Country.findAll({
      where: { region: { [Op.like]: `%${region}%` },},
      include: { model: Activity, required: false },
    });
    return res.json(countries) 
  }

 countries = await Country.findAll({
    attributes: ["alpha3Code", "name", "flag",  "population","subregion"],
    include: { model: Activity, required: false },
  
  });
  return res.json(countries);
});


router.get("/countries/:idCountry", async(req, res) => {
  const idCountry = req.params.idCountry;
  const country= await Country.findByPk(idCountry, { include: Activity}) //findbypkmethod obtains only a single entry from the table, using the provided primary key.
  if (!country){return res.json({error: ":("})}
  res.json(country)
})

router.post('/activity', async (req,res)=>{
  const { name, difficulty, season, duration, country }= req.body
  try {
     const newact = await Activity.create({
    name,
    difficulty,              //------>creo una const de nueva actividad
    duration,
    season
  })
  await newact.addCountry(country) //-->> creo una actividad y le paso
  res.send("sii")
  } catch (error) {
    res.status(404);
    res.json({error: ":("});
  }
 
  
})


module.exports = router;
