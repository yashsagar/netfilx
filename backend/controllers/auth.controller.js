import bcrypt from "bcryptjs";
import { validator, generateToken } from "../utils/index.js";
import { User } from "../models/user.model.js";

export async function signup(req, res) {
  try {
    if (!username || !password || !email)
      return res
        .status(400)
        .json({ success: false, message: "all fields are resuired" });

    const existingUserByUsername = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });

    if (existingUserByUsername)
      return res
        .status(400)
        .json({ success: false, message: "username already taken" });

    if (existingEmail)
      return res.status(400).json({
        success: false,
        message: "already email is assign with other user",
      });

    const validatedValue = validator({ username, password, email });

    if (validatedValue.length === 0) {
      const salt = await bcrypt.genSalt(10);
      const encyptedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({
        username,
        password: encyptedPassword,
        email,
      });

      if (newUser) {
        generateToken(newUser._id, res);
        await newUser.save();
        res.status(200).json({
          success: true,
          user: { ...newUser._doc, password: "" },
        });
      }
    } else {
      res.status(400).json(...validatedValue);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `error in saving the new user ${error.message}`,
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(400)
        .json({ success: false, message: "all fields are required" });
    }
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordCorrect) {
      res.status(400).json({ success: false, message: "invalid credential" });
    }

    if (user) {
      generateToken(user._id, res);
      delete user.password;
      res.status(200).json({ success: true, user });
    }
  } catch (error) {
    console.log(`error in login ${error.message}`);
    res.status(500).json({
      success: false,
      message: `error in login `,
    });
  }
}

export async function logout(req, res) {
  try {
    res.status(200).json({ success: true, message: "logout successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res
      .status(500)
      .json({ success: false, message: `Internal error logout failed` });
  }
}

export async function authCheck(req, res) {
  try {
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    console.log("Error in authCheck controller", error.message);
    res.status(500).json({ success: false, message: "internal server error" });
  }
}
