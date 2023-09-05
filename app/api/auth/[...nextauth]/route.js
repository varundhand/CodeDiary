import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// console.log("env variables", {
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// });

const handler = NextAuth({
  providers: [
    // we should define the options in seperate component
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    // servless route -> lambda function(opens only when called) -> dynamodb
    // if (account.provider === "google") {
    //   return profile.email_verified && profile.email.endsWith("@example.com")
    // }
    // return true // Do different verification for other providers that don't have `email_verified`
  },
});

export { handler as GET, handler as POST };
