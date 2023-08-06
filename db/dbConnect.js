const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/assesment',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res=>{
    console.log('db is connect....');
}).catch(err=>{
    console.log(err);
})