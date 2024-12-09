// app/api/articles/route.js
import { insertArticle, getArticles, updateArticle, deleteArticle } from '../../../lib/database';

export async function GET() {
  // 获取所有文章
  const articles = await getArticles();
  return new Response(JSON.stringify(articles), { status: 200 });
}

export async function POST(request) {
  // 插入一篇新文章
  const articleData = await request.json();
  const result = await insertArticle(articleData);
  return new Response(JSON.stringify(result), { status: 201 });
}

export async function PUT(request) {
  // 更新文章
  const { articleId, updateData } = await request.json();
  const result = await updateArticle(articleId, updateData);
  return new Response(JSON.stringify(result), { status: 200 });
}

export async function DELETE(request) {
  // 删除文章
  const { articleId } = await request.json();
  const result = await deleteArticle(articleId);
  return new Response(JSON.stringify(result), { status: 200 });
}
