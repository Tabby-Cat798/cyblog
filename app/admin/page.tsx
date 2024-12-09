'use client'; // 表示这是一个客户端组件

import { useState } from 'react';

const Page = () => {
  const [users, setUsers] = useState<any[]>([]);

  // 点击按钮时触发
  const fetchUsers = async () => {
    const response = await fetch('/api/get-users');
    const data = await response.json();
    setUsers(data); // 更新 state
  };

  return (
    <div>
      <h1>Users List</h1>
      <button onClick={fetchUsers}>Fetch Users</button>
      
      <ul>
        {users.length > 0 ? (
          users.map((user: any) => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
};

export default Page;
