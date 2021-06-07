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
  if (!countries) {const api = await axios.get("https://restcountries.eu/rest/v2/all")
    const mapcountry = api.data.map((c) => ({
      alpha3Code: c.alpha3Code,
      name: c.name,
      flag: c.flag,
      region:c.region,
      capital: c.capital,
      subregion:c.subregion,
      area: c.area,
      population: c.population,
    }))
    await Country.bulkCreate(mapcountry)
  }
  next()
})


router.get("/countries", async (req, res) => {
  let countries;
  let { name, region } = req.query;
  if(name && region){
    name = name
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    region = region
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    countries = await Country.findAll({
        where: {name: { [Op.like]: `%${name}%` },
          region: { [Op.like]: `%${region}%` },
        },
        include: { model: Activity, required: false },
      });
      return  res.json(countries) ;
  }
  if (name) {
    name = name.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    countries = await Country.findAll({
      where: {
        name: { [Op.like]: `%${name}%` },
      },
      include: { model: Activity, required: false },
    });
    return res.json(countries) ;
  }
  if (region) {
    region = region.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    let countries = await Country.findAll({
      where: {
        region: { [Op.like]: `%${region}%` },
      },
      include: { model: Activity, required: false },
    });
    return countries ? res.json(countries) : res.sendStatus(404);
  }
 countries = await Country.findAll({
    attributes: ["alpha3Code", "name", "flag",  "population","subregion"],
    include: { model: Activity, required: false },
  });
  return res.json(countries);
});


router.get("/countries/:idCountry", (req, res) => {
  const idCountry = req.params.idCountry;
  console.log(idCountry);
  if (idCountry) {
    Country.findOne({
      where: { alpha3Code: idCountry},
      include: [{ model: Activity }],
    })
      .then((idCountry) => {
        res.status(200).json(idCountry);
      })
      .catch((err) => {
        return res.status(400).send({ data: err });
      })
  }

})

router.post('/activity', async (req,res)=>{
  const { name, difficulty, season, duration, country }= req.body
  try {
     const newact = await Activity.create({
    name,
    difficulty,
    duration,
    season
  })
  await newact.addCountry(country)
  res.send("sii")
  } catch (error) {
    res.status(404);
    res.json({error: "Did not receive enough data to create new breed"});
  }
 
  
})


module.exports = router;
