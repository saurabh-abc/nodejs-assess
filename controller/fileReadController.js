const fileModel = require('../model/fileModel');
var csv = require('csvtojson');
const readfileApis = {
    readCsvFile: (req, res) => {
        csv().fromFile(req.file.path)
            .then((jsonData) => {
                var fileData = [];
                for (var i = 0; i < jsonData.length; i++) {
                    var obj = {};
                    obj.agent = jsonData[i]['agent'];
                    obj.userType = jsonData[i]['userType'];
                    obj.policy_mode = jsonData[i]['policy_mode']
                    obj.producer = jsonData[i]['producer'];
                    obj.policy_number = jsonData[i]['policy_number'];
                    obj.premium_amount_written = jsonData[i]['premium_amount_written']
                    obj.premium_amount = jsonData[i]['premium_amount'];
                    obj.policy_type = jsonData[i]['policy_type'];
                    obj.company_name = jsonData[i]['company_name']
                    obj.category_name = jsonData[i]['category_name']
                    obj.policy_start_date = jsonData[i]['policy_start_date'];
                    obj.policy_end_date = jsonData[i]['policy_end_date'];
                    obj.csr = jsonData[i]['csr']
                    obj.account_name = jsonData[i]['account_name']
                    obj.email = jsonData[i]['email'];
                    obj.gender = jsonData[i]['gender'];
                    obj.firstname = jsonData[i]['firstname']
                    obj.city = jsonData[i]['city']
                    obj.account_type = jsonData[i]['account_type'];
                    obj.phone = jsonData[i]['phone'];
                    obj.address = jsonData[i]['address']
                    obj.state = jsonData[i]['state']
                    obj.zip = jsonData[i]['zip'];
                    obj.dob = jsonData[i]['dob'];
                    obj.Applicant_ID = jsonData[i]['Applicant ID']
                    obj.agency_id = jsonData[i]['agency_id']
                    obj.hasActive_ClientPolicy = jsonData[i]['hasActive ClientPolicy'];
                    fileData.push(obj);
                }
                fileModel.insertMany(fileData).then(function () {
                    res.status(200).send({
                        message: "Successfully Uploaded!"
                    });
                }).catch(function (error) {
                    res.status(500).send({
                        message: "failure",
                        error
                    });
                });
            }).catch(err => {
                console.log(err);
            })
    }
}
module.exports = readfileApis;