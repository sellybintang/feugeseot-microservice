const {Trucks} = require ('../models')

// Create Trucks

const createTrucks = async (req, res) =>{
    try{
        const createNewTrucks = await Trucks.create (req.body)
        res.status(200).json({
            status:'Succes',
            message:'Seccesfully for create data trucks', createNewTrucks
        })
    }catch{
        res.status(500).json({
            status: 'Failed',
            message:'Failed for create data trucks'
        })
    }
}


// Read Trucks
const readTrucks = async (req,res) =>{
    try{
        const readAllTrucks = await Trucks.findAll()
        res.status(200).json({
            status:'Succes',
            message:'Succesfully for findAll data', readAllTrucks
        })
    }catch{
        res.status(500).json({
            status:'Failed',
            message:'Sorry, your request failed'
        })
    }
}

// Update Data
const updateTrucks = async (req,res)=>{
    try{
        const id = req.params.id
        const updateDataTrucks = await Trucks.update(req.body,{where:{id}})
        res.status(200).json({
            status:'Succes',
            message:'Succesfully for update data', updateDataTrucks
        })
    }catch{
        res.status(500).json({
            status:'Failed',
            message:'Sorry, your request failed'
        })
    }
};

// Delete Data
const deleteTrucks =async (req, res)=>{
    try{
        const id= req.params.id;
        const deleteDataTrucks = await Trucks.destroy ({where:{id}})
        res.status(200).json({
            status:'Succes',
            message:'Succesfully for update data', deleteDataTrucks
        })
    }catch{
        res.status(500).json({
            status:'Failed',
            message:'Sorry, your request failed'
        })
    };
};


const searchTrucks = async (req, res) =>{
    try{
        const {
            name,
            code,
            number_of_gears,
            number_of_tires}=req.body
        const searchTrucks = await Trucks.findAll({name:name, code:code, number_of_gears:number_of_gears, number_of_tires:number_of_tires})
        res.status(401).json({
            status:'Succes',
            message:'Data succes searched', searchTrucks
        })
    }catch{
        res.status(500).json({
            status:'Failed',
            message:'Data failed to search', searchCars
        });
    }
}
module.exports={
    createTrucks,
    readTrucks,
    updateTrucks,
    deleteTrucks,
    searchTrucks
}