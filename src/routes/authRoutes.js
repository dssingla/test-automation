import { signupUser, loginUser } from "../controllers/authController";

export async function POST(req) {
  const { pathname } = new URL(req.url);

  if (pathname.includes("signup")) {
    return signupUser(req);
  }

  if (pathname.includes("login")) {
    return loginUser(req);
  }

  return Response.json({ message: "Invalid route" }, { status: 404 });
}
