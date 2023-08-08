const {Cars}= require('../models')

// create new cars
const createCars = async(req,res)=>{
    try{
        const nameCar = await Cars.findOne({where:{name:req.body.name}})
        if (nameCar){
            if(nameCar.car_type !== req.body.car_type)
            return res.status (401).json({
                status:'Failed',
                message:'Sorry, your type have been used'   
            })
        } 
        console.log(req.body)

        const createNewCars = await Cars.create(req.body)
        res.status(200).json({
            status: 'Succes',
            message:'Data have created', createNewCars
        })
    }catch(err){
        res.status(500).json({
            status:'Failed',
            message:err.message
        })
    }
};

    

const readCars = async(req,res)=>{
    try{
        const Url = "http://localhost:8080/carsService/readCars"
        const page = parseInt(req.query.page) ||1;
        const perPage = parseInt(req.query.perPage)||10
        const offset = (page-1)*perPage;
        const nextPage = page+1
        let nextPageUrl = null
        const {rows, count}= await Cars.findAndCountAll({
            perPage,
            offset
        });

        const totalPages =Math.ceil(count/perPage)
        if(totalPages<=nextPage){
            nextPageUrl = (`${Url}?page=${nextPage}&perPage=${perPage}`)
        }
        
        if(rows.length>0){
            return res.status(200).json({
                status:'Succesfully',
                message:'Succesfully for Read data',
                data:rows,
                totalCount: count,
                currentPage: page, 
                totalPages,
                nextPageUrl
            })
        }
    }catch(err){
        res.status(500).json({
            status:'Failed',
            message:err.message
        })
    }
};

const updateCars = async(req,res)=>{
    try{
        const id = req.params.id;
        const v_id= await Cars.findOne({where:{id}})
        if(!v_id){
            return res.status(401).json({
                status:'Failed',
                message:'id not found'
            })
        }
        const updateDataCars = await Cars.update(req.body,{where:{id}});
        res.status(200).json({
            status:'Succes',
            message:'Succesfully for updated', updateDataCars
        })
    }catch(err){
        res.status(400).json({
            status:'Failed',
            message:err.message
        })
    };
};

const deleteCars = async(req,res)=>{
    try{
        const id = req.params.id;
        const v_id= await Cars.findOne({where:{id}})
        if(!v_id){
            return res.status(401).json({
                status:'Failed',
                message:'id not found'
            })
        }

        const deleteDataCars = await Cars.destroy({where:{id}})
        res.status(200).json({
            status:'Succes',
            message:'Data have been deleted', deleteDataCars
        })
    }catch(err){
        res.status(500).json({
            status:'Succes',
            message:err.message
        })
    }
};

const searchCarsService = async (req, res) =>{
    try{
        const {
            car_type,
            name,
            code,
            number_of_gears,
            number_of_tires}=req.body
        const searchCars = await Cars.findAll({car_type:car_type, name:name, code:code, number_of_gears:number_of_gears, number_of_tires:number_of_tires})
        res.status(401).json({
            status:'Succes',
            message:'Data succes searched', searchCars
        })
    }catch{
        res.status(500).json({
            status:'Failed',
            message:'Data failed to search', searchCars
        });
    }
}

module.exports={
    createCars,
    readCars,
    updateCars,
    deleteCars,
    searchCarsService
}