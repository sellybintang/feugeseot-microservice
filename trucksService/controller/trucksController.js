const {Trucks} = require ('../models')

// Create Trucks

const createTrucks = async (req, res) =>{
    try{
        const{code}=req.body
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

const pagination =async(page, perPage)=>{
    const offset = (page-1)*perPage;
    cons={rows, count}= await Trucks.findAndCountAll({
        limit: perPage,
        offset: offset
    });
    return {
        data:rows,
        totalCount: count,
        currentPage: page, 
        totalPages: Math.ceil(count/perPage),
    }
}

// Read Trucks
const readTrucks = async (req,res) =>{
    try{
        const Url = "http://localhost:8080/trucksService/readTrucks"
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
        const id = req.params.id;
        const v_id= await Trucks.findOne({where:{id}})
        if(!v_id){
            return res.status(401).json({
                status:'Failed',
                message:'id not found'
            })
        }
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
        const id = req.params.id;
        const v_id= await Trucks.findOne({where:{id}})
        if(!v_id){
            return res.status(401).json({
                status:'Failed',
                message:'id not found'
            })
        }
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
        const searchDataTrucks = await Trucks.findAll({name:name, code:code, number_of_gears:number_of_gears, number_of_tires:number_of_tires})
        res.status(401).json({
            status:'Succes',
            message:'Data succes searched', searchDataTrucks
        })
    }catch{
        res.status(500).json({
            status:'Failed',
            message:'Data failed to search'
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