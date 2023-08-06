const userModel = require('../model/userModel');
const userApis = {
    creatUser: async (req, res) => {
        const userData = new userModel({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            city: req.body.city,
            dob: req.body.dob
        });
        try {
            const usercreaed = await userData.save();
            res.status(200).send({
                message: "user created Successfully!",
                usercreaed
            });
            console.log(userData);
        } catch (error) {
            res.status(500).send({
                message: "failure",
                error
            });
        }
    },
    fetchUser: async (req, res) => {
        try {
            const getAllUser = await userModel.find();
            res.status(200).send({
                message: "user fetched Successfully!",
                getAllUser
            });
        } catch (error) {
            res.status(500).send({
                message: "failure",
                error
            });
        }
    },
    updateUser: async (req, res) => {
        try {
            const userUpdate = await userModel.updateOne({ name: req.body.name }, { $set: { email: req.body.email } })
            res.status(200).send({
                message: "user updated Successfully!",
                userUpdate
            });
        } catch (error) {
            res.status(500).send({
                message: "failure",
                error
            });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const deleteUser = await userModel.deleteOne({ name: req.body.name });
            res.status(200).send({
                message: "user deleted Successfully!",
                deleteUser
            });
        } catch (error) {
            res.status(500).send({
                message: "failure",
                error
            });
        }
    }
}
module.exports = userApis;