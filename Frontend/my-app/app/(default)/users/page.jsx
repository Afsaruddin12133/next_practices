"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("http://localhost:5000/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  const handleUserId = async (_id) => {
    console.log(_id);
    
   await fetch(`http://localhost:5000/users/${_id}`,{
      method: 'DELETE',
    });
    setUsers(users.filter((user) => user._id !== _id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User List</h1>
      <div className="w-full max-w-md space-y-4">
        {users.map((user) => (
          <div key={user._id} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500 text-sm">Password: {user.password}</p>
            <Button className="mx-auto" onClick={() => handleUserId(user._id)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
