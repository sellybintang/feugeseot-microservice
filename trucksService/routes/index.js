const router = require('express').Router();
const { searchTrucks } = require('../controller/trucksController');
const trucksRoutes = require ('./trucksRoutes');

router.use('/trucksService', trucksRoutes)
// Search
router.use ('/searchService', searchTrucks);
module.exports = router