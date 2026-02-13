import connectDB from "../config/db";
import User from "../models/user";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";
import { z } from "zod";

// validation
const signupSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

// SIGNUP
export const signupUser = async (req) => {
  try {
    const body = await req.json();
    const { name, email, password } = signupSchema.parse(body);

    await connectDB();

    const existing = await User.findOne({ email });
    if (existing) {
      return Response.json({ message: "Email already exists" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 12);

    await User.create({ name, email, password: hashed });

    return Response.json({ message: "Signup success 🚀" }, { status: 201 });

  }  catch (error) {
  console.log("🔥 REAL ERROR:", error);   // ADD THIS LINE
  return Response.json({ message: error.message }, { status: 500 });
}

};

export const loginUser = async (req) => {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return Response.json({ message: "Wrong password" }, { status: 401 });
    }

    const token = generateToken(user);

    return Response.json({
      message: "Login success 🔥",
      token,
      user:{name:user.name,email:user.email}
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
};
