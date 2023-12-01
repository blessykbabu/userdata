import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
  
    phone: {
        type: String,
        required: true
    },

      place:{
        type:String,
        required:true
    },

    district:{
      type:String
  },

  state:{
    type:String
},

role:{
  type:String
},

date:{
  type:String
},

jdate:{
  type:String
},

exp:{
  type:String
},
cemail:{
  type:String
},
id:{
  type:String,
  unique:true
},
password:{
  type:String
}
});

export default mongoose.model.employees || mongoose.model("employee", schema);
