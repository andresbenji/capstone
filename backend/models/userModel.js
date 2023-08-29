// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     phoneNumber: {
//       type: String,
//       required: true,
//       validate: {
//         validator: function (value) {
//           // Custom validation function
//           return value.length <= 9;
//         },
//         message: "Phone number must not exceed 9 characters.",
//       },
//     },
//     isAdmin: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// //compares the entered password with the password taht is in the user database
// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
//   };
  
//   //converts plain text password into hashed passowwrd before its saved into the database
//   userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//       next();
//     }
  
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   });
  
  

// const User = mongoose.model("User", userSchema);

// export default User;
