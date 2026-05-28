import journalschema from "../models/journalschema.js";
import journalmodel  from "../models/journalschema.js";

//create destination
const createJournal = async (req, res) =>{
    try {
        const {title, description, image, type} = req.body
        const destination = journalmodel({
            title,
            description,
            image: req.file ? req.file.filename : undefined,
            type
        })
            await destination.save()
            res.status(201).json(destination)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//read api destination
const getJournals = async (req, res) =>{
    try {
        const destinations = await journalmodel.find()
        res.status(200).json(destinations)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//read single
const getSingleJournal = async (req, res) =>{
    try {
        const singleData = await journalmodel.findById(req.params.id)
        if(singleData){
            res.send(singleData)
        }

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//update function
// const updateJournal = async (req, res) =>{
//     try {
//         const { title, description, type, image } = req.body
//         const updateData = await journalmodel.updateOne(
//             {_id: req.params.id},
//             {$set: {
//                 title: title,
//                 description: description,
//                 type: type,
//                 image: req.file ? req.file.filename : undefined
//             }}
            
//         )

//         if(updateData){
//             res.status(200).json(updateDate)
//         }
        
//     } catch (error) {
//         res.status(500).json({message: error})
//     }



// }

const updateJournal = async (req, res) => {

  try {

    const updateData = {
      title: req.body.title,
      type: req.body.type,
      description: req.body.description,
    };

    // haddii image cusub jiro
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updated = await journalmodel.findByIdAndUpdate(
      req.params.id,
      updateData,
      { returnDocument: "after" }
    );

    res.json(updated);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

//delete
const deleteJournal = async (req, res) =>{
    try {
        const deletej =  await journalmodel.deleteOne({id: req.params_id})
        if(deletej){
            res.send(deletej)
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message })
        
    }
}

//search journals
const searchJournal = async (req, res) =>{
    try {
        const searching = await journalmodel.find({
            $or: [
                {title: {$regex: req.params.key}},
                {description: {$regex: req.params.key}}
            ]
        })
        if(searching){
            res.send(searching)
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//latest 3 
const latestJournal = async(req, res) =>{
    try {
        const latest = await journalmodel.find().sort({ createdAt:-1 }).limit(3)
        res.json(latest)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//total count
const getTotalJournal = async (req, res) =>{
    try {
        const total = await journalmodel.countDocuments()
        res.status(200).json({
            total
        })
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


export {createJournal, getJournals, updateJournal,getSingleJournal , searchJournal, deleteJournal, latestJournal, getTotalJournal
}