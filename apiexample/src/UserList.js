import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";

const UserList = () => {
  const [usersList, setusersList] = useState([]);
  useEffect(async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/users");
    setusersList(result.data);
  }, []);

  return (
    <div>
      <ul>
        {usersList.map((item) => (
          <li key={item.id}>
            {item.name} as {item.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
