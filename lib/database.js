// lib/database.js
import clientPromise from './mongodb';  // 引入数据库连接

// 插入一篇文章
export async function insertArticle(articleData) {
  const client = await clientPromise;  // 等待连接
  const db = client.db("blogs");  // 选择数据库
  const collection = db.collection("articles");  // 选择集合

  const result = await collection.insertOne(articleData);  // 插入数据
  return result;
}

// 获取所有文章
export async function getArticles() {
  const client = await clientPromise;
  const db = client.db("blogs");
  const collection = db.collection("articles");

  const articles = await collection.find({}).toArray();  // 查询所有文章
  return articles;
}

// 根据文章ID更新文章内容
export async function updateArticle(articleId, updateData) {
  const client = await clientPromise;
  const db = client.db("blogs");
  const collection = db.collection("articles");

  const result = await collection.updateOne(
    { _id: new ObjectId(articleId) },  // 根据ID查找文章
    { $set: updateData }  // 更新操作
  );
  return result;
}

// 删除文章
export async function deleteArticle(articleId) {
  const client = await clientPromise;
  const db = client.db("blogs");
  const collection = db.collection("articles");

  const result = await collection.deleteOne({ _id: new ObjectId(articleId) });  // 删除文章
  return result;
}
