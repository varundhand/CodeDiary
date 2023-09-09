import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/user";
import { connectToDB } from "@/utils/database";

// console.log("env variables", {
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// });

// console.log(process.env.GOOGLE_ID);

const handler = NextAuth({
  providers: [
    // we should define the options in seperate component
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // existing user through session cookies
      console.log("session", session);
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser._id.toString(); // '_id' is the id of the user

      return session;
    },
    async signIn({ profile }) {
      // console.log("in here");
      console.log(profile);
      try {
        await connectToDB();

        // checking if user already exists
        const userExists = await User.findOne({
          email: profile.email,
        });

        // if user doesnt exist, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name?.replace(/\s/g, "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  // secret: "IamVeryHandsome",
});

export { handler as GET, handler as POST };
