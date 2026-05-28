import ContactModel from"../models/ContactModel.js"

// add contact
const createContact = async (req,res) =>{
    try{
        const { name,email,message } = req.body;
        const newContact = ContactModel({
            name:name,
            email:email,
            message:message
        })
        await newContact.save()
        res.send(newContact)

    } catch (error){
        res.status(500).json({message: error.message})
    }
}

//read
const readContact = async (req, res) =>{
    const readData = await ContactModel.find()
    if(readData){
        res.send(readData)
    }
}

//delete
const deleteMessage = async (req, res) =>{
    try {
        const deleted = await ContactModel.deleteOne({_id: req.params.id})
        if(deleted){
            res.send(deleted)
        }
    } catch (error) {
        res.status(400).json({message: message.error})
    }
}

//get total messages
const totalMessages = async(req, res) =>{
    try {
        const meassage = await ContactModel.countDocuments()
        res.status(200).json({
            meassage
        })

        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


export default  {createContact,readContact, deleteMessage, totalMessages}