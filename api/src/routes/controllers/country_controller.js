
const { Country, Activity } = require("../../db.js");
const { Op } = require("sequelize");

async function getCountries (req, res){
  let countries;
  let { name, region } = req.query;


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
    attributes: ["alpha3Code", "name", "flag","region","population","subregion"],
    include: { model: Activity, required: false },
  
  });
  return res.json(countries);
}


async function getForId(req, res){
  const idCountry = req.params.idCountry;
  const country= await Country.findByPk(idCountry, { include: Activity}) //findbypkmethod obtains only a single entry from the table, using the provided primary key.
  if (!country){return res.json({error: "there is no country with that id"})}
  res.json(country)
}


module.exports = {
    getCountries,
    getForId
}