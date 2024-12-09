import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb'; // 导入你的 MongoDB 配置

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("blogs"); // 默认连接的数据库
    const users = await db.collection('users').find().toArray(); // 查询所有用户

    return NextResponse.json(users); // 返回查询结果
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
  }
}
