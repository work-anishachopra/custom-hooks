import React from "react";
import useFetch from "../hooks/useFetch";

const DemoUseFetch: React.FC = () => {
  const { data, loading, error } = useFetch({
    URL: "https://jsonplaceholder.typicode.com/users",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {Array.isArray(data) &&
          data.map((user: any) => (
            <li key={user.id}>
              {user.name} — <em>{user.email}</em>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DemoUseFetch;
