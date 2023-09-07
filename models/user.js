import { Schema, model, models } from "mongoose";

// const mongoose = require('mongoose')

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"], // the statement would come if false
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    // Regular Expression to validate username
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

// The 'models' object provided by the Mongoose library stores all the registered models.
//* If a model 'User' already exists in 'models' object, it assigns the existing model to 'User' varaible.
// It prevents redefing the model and ensures that existing model is used.
//* If a model 'User' does not exist in 'models' object, the model function from Mongoose is called to create the model.
// The newly created model is then assigned to the 'User' variable.

const User = models.User || model("User", UserSchema);

export default User;
