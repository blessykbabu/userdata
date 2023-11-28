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

password:{
  type:String
}
});

export default mongoose.model.Logins || mongoose.model("Login", schema);
