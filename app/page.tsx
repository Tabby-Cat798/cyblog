// 'use client';

// import { useState } from 'react';

// const Page = () => {
//   const [users, setUsers] = useState<any[]>([]);

//   const fetchUsers = async () => {
//     const response = await fetch('/api/get-users');
//     const data = await response.json();
//     setUsers(data); 
//   };

//   return (
//     <div>
//       <h1>Users List</h1>
//       <button onClick={fetchUsers}>Fetch Users</button>
      
//       <ul>
//         {users.length > 0 ? (
//           users.map((user: any) => (
//             <li key={user._id}>{user.name} - {user.email}</li>
//           ))
//         ) : (
//           <p>No users found</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Page;

// 例如：在主页显示当前登录用户信息
'use client';

import { signIn, useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return <div>Welcome, {session.user?.name}!</div>;
  }


  return (
    <div>
      <h1>Please log in</h1>
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  );
}



