const router = require('express').Router();
const { searchCars } = require('../controllers/carsController');
const carsRoutes = require ('./carsRoutes');

router.use('/CarsService', carsRoutes)

// Search
router.use ('/searchService', searchCars);

module.exports = router