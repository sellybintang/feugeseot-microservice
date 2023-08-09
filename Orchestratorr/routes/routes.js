const { readService, searchService } = require('../aggregate/aggregate');

const router =require('express').Router();


router.get('/combinedRead', readService);
router.get('/combinedSearch', searchService);

module.exports=router