const express = require ('express');
const axios = require ('axios');


exports.readService = async (req, res)=>{
    try{
        const readCarsService = await axios.get('http://localhost:3005/carsService/readCars',
        );
        const readTrucksService = await axios.get('http://localhost:3006/trucksService/readTrucks', 
        )
        const readCombination = [
            ...readCarsService.data.data,
            ...readTrucksService.data.data,
        ];

    
        //  Pagination
        const Url = "http://localhost:3007/combinedRead"
        const page = parseInt(req.query.page) ||1;
        const perPage = parseInt(req.query.perPage)||10

        let nextPageUrl = null
        
        const totalPages =Math.ceil(readCombination.length/perPage)
        const startIndex = (page - 1) * perPage;
        const endIndex = Math.min(startIndex + perPage, readCombination.length);

        const paginatedData = readCombination.slice(startIndex, endIndex);

        console.log(paginatedData)

        const hasNextPage = page < totalPages;

         if(hasNextPage){
            const nextPage = page + 1;
            nextPageUrl = (`${Url}?page=${nextPage}&perPage=${perPage}`)
         }
        
        res.status(200).json({
            status:'Succesfully',
            message:'Succesfully for Read data',
            currentPage: page,
            itemsPerPage: perPage,
            totalItems: readCombination,
            totalPages: totalPages,
            hasNextPage: hasNextPage,
            nextPageUrl: nextPageUrl,
            data: paginatedData
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }

}

exports.searchService = async (req, res)=>{
    try{
        const { name } = req.body; 
        const searchCarsService = await axios.get('http://localhost:3005/carsService/searchCars',
     
        );
        console.log(searchCarsService)
        const searchTrucksService = await axios.get('http://localhost:3006/trucksService/searchTrucks', 
        )
        const searchCombination = {
            service1:searchCarsService.data,
            service2:searchTrucksService.data,
        };
        res.status(200).json({
            message: 'Data Service', searchCombination
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}