const { Router } = require('express');
const router = Router();
const { getActivities, postActivity} = require("./controllers/activity_controller")

router.post('/activity',postActivity)

router.get('/activities', getActivities)

module.exports = router;