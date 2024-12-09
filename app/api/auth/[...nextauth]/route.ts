import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // 从 Google Cloud Platform 获取
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  httpOptions: {
    timeout: 10000, // 10秒
  },
  secret: process.env.NEXTAUTH_SECRET, // 用于加密 JWT 的密钥
  session: {
    strategy: "jwt", // 使用 JWT 存储会话信息
  },
  cookie: { 
    httpOnly: true,  // 防止客户端访问 cookie
    secure: false,   // 在开发模式下，使用 HTTP 而不是 HTTPS，因此需要设置为 false
    sameSite: "lax", // 确保跨站点时能够发送 cookie
  },
  debug: true, // 打开调试模式
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
