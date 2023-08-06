const mongoose = require('mongoose');
const fileDataSchema = new mongoose.Schema({
    agent: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    policy_mode: {
        type: Number,
        required: true
    },
    producer: {
        type: String
    },
    policy_number: {
        type: String,
        required: true
    },
    premium_amount: {
        type: Number
    },
    policy_type: {
        type: String
    },
    company_name: {
        type: String
    },
    category_name: {
        type: String
    },
    policy_start_date: {
        type: Date
    },
    policy_end_date: {
        type: Date
    },
    csr: {
        type: String
    },
    account_name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    firstname: {
        type: String
    },
    city: {
        type: String
    },
    account_type: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        tytpe: Number
    },
    dob: {
        type: Date
    },
    primary: {
        type: String
    },
    Applicant_ID: {
        type: String
    },
    agency_id:{
        type:String
    },
    hasActive_ClientPolicy:{
        type:String
    }
})
module.exports = mongoose.model('fileField', fileDataSchema);