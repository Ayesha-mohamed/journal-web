import AdminModel from"../models/adminModel.js";
import bcrypt from"bcryptjs";
import jwt from"jsonwebtoken";
import adminModel from "../models/adminModel.js";

const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existEmail = await AdminModel.findOne({ email });
    if (existEmail) {
      return res.status(400).send({ error: "The email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newData = new AdminModel({
      name,
      email,
      password: hashPassword
   
    });

    await newData.save();
    res.send(newData);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};




//
const adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existEmail = await AdminModel.findOne({ email });
    if (!existEmail) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const checkPassword = await bcrypt.compare(password, existEmail.password);
    if (!checkPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: existEmail._id,
        name: existEmail.name,
        email: existEmail.email,
        role: existEmail.role,
      },
      process.env.JWT_SECRET, 
      { expiresIn: "7d" }
    );

    res.send({
      message: "success login",
      admin: {
        name: existEmail.name,
        email: existEmail.email,
        role: existEmail.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ error: "server error", details: error.message });
  }
};

//get total admins
const totalAdmins = async(req, res) =>{
  try {
    const adminsTotal = await adminModel.countDocuments()
    res.status(200).json({
      adminsTotal
    })

  } catch (error) {
    res.status(400).json({message: error.message})
  } 
}

export default { createAdmin, adminlogin, totalAdmins };

