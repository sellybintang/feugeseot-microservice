const router = require('express').Router();
const { createCars, readCars, updateCars, deleteCars, searchCars } = require('../controllers/carsController');

router.post ('/createCars', createCars);
router.get('/readCars', readCars);
router.patch('/updateCars/:id', updateCars);
router.delete('/deleteCars/:id', deleteCars);
router.get('/', searchCars);

module.exports=router