import mongoose from "mongoose";
mongoose.set("runValidators", true);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (value) => {
        return /^[A-Za-z][A-Za-z0-9]{4,9}$/.test(value);
      },
      message:
        "usename must start from Alphabet and min lenght must be 5 characters",
    },
  },
  email: {
    type: String,
    unique: true,
    require: true,
    validate: {
      validator: (value) => {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(value);
      },
      message: "email must be valid",
    },
  },
  password: {
    type: String,
    require: true,
    validate: {
      validator: (value) => {
        return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
          value
        );
      },
      message:
        "password must contain atlist one number, one uppercase letter, one smallercase letter and with minimum of 8 chareacter length ",
    },
  },
  image: {
    type: String,
    default: "",
  },
  searchHistory: {
    type: Array,
    default: [],
  },
});

userSchema.index({ username: 1 });
userSchema.index({ email: 1 });

export const User = mongoose.model("user", userSchema);
