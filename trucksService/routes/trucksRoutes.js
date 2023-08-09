const router = require ('express').Router()
const { createTrucks, readTrucks, updateTrucks, deleteTrucks, searchTrucks } = require('../controller/trucksController');


router.post('/createTrucks', createTrucks);
router.get ('/readTrucks', readTrucks);
router.patch('/updateTrucks/:id', updateTrucks);
router.delete('/deleteTrucks/:id', deleteTrucks);
router.get('/searchTrucks', searchTrucks)

module.exports=router