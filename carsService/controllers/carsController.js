const {Cars}= require('../models')


// create new cars
const createCars = async(req,res)=>{
    try{
        const nameCar = await Cars.findOne({where:{name:req.body.name}})
        if (nameCar){
            if(nameCar.car_type !== req.body.car_type)
            res.status (401).json({
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
        const readAllCars= await Cars.findAll()
        res.status(200).json({
            status:'Succesfully',
            message:'Succesfully for Read data', readAllCars
        })
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
            res.status(401).json({
                status:'Failed',
                message:'id not found'
            })
        }

        const deleteDataCars = await Cars.destroy({where:{id}})
        res.status(200).json({
            status:'Succes',
            message:'Data have been deleted', deleteDataCars
        })
    }catch{
        res.status(500).json({
            status:'Succes',
            message:'Data fail to deleted'
        })
    }
};

const searchCars = async (req, res) =>{
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
    searchCars
}