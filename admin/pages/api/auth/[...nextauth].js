import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "268054753201-kgjk2cdmo2ucipkq4ge5scpvecj9q1o1.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
