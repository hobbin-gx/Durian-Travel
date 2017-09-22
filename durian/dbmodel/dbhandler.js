//创建 collection ，以及 model，通过model ，去操作数据的增删改查

var mongoose = require("mongoose");
var Schema = mongoose.Schema; //概要计划

var user = {
    name:{type:String},
    password:{type:String},
    library:{type:Array},
    good: {type:Object}
}


//将collection 与model 关联 , 自动创建collection的名字是 users

mongoose.model("user",new Schema(user));


module.exports= {
    user:mongoose.model("user"),
}