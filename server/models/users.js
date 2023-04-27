const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 15,
  },
  reviews: [
    { type: String },
  ],
});

userSchema.pre("save", function (next) {
    if (this.password || this.isModified("password")) {
        const saltRounds = 10;
        this.password = bcrypt.hashSync(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
