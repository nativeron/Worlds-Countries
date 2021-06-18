const { Router } = require('express');
const { default: axios } = require("axios");
const { Country } = require("../db.js");
const {getCountries, getForId} = require("./controllers/country_controller")

const router = Router();

router.use(async (req, res, next) => {  
  const countries = await Country.count();
  if (!countries) {
    const api = await axios.get(
      "https://restcountries.eu/rest/v2/all"
    );
    const countrymap = api.data.map((c) => ({
      alpha3Code: c.alpha3Code,
      name: c.name,
      flag: c.flag,
      region:c.region===''?'None':c.region,
      capital: c.capital,
      subregion:c.subregion,
      area: c.area,
      population: c.population,
    }));
    await Country.bulkCreate(countrymap); 
  }
  next();
});

router.get("/countries", getCountries)
router.get("/countries/:idCountry", getForId)

module.exports = router;