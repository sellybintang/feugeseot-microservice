const router = require('express').Router();
const { searchCarsService } = require('../controllers/carsController');
const carsRoutes = require ('./carsRoutes');

router.use('/carsService', carsRoutes)

// Search
// router.use ('/searchService', searchCarsService);

module.exports = router