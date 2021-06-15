const { Activity } = require("../../db.js");

async function postActivity(req,res){
  const { name, difficulty, season, duration, country }= req.body
  try {
     const newact = await Activity.create({ name, difficulty, duration, season, })
    await newact.addCountry(country)
    res.send("activity added")
  } catch (error) {
    res.status(404);
    res.json({error: "can't create activity"});
  }
}

async function getActivities(req, res) {
	try {
     let act = await Activity.findAll()
     if (act.length<1){res.send("no activities")}
 	res.json(act)
  } catch (error) {
    res.send('oops')
  }
}

module.exports = {
    postActivity,
    getActivities
}