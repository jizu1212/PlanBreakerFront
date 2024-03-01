import React, { useEffect, useState } from 'react';
import User from '../../types/User';
import { API_URL } from '../../configs/config';
function UserInfo() {
  // State to store the user data
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    // Fetch the user data from your Spring Boot backend
    fetch(`${API_URL}/sampleUserInfo`)
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        console.log("Fetched data:", data);
        // Map the backend structure to the frontend structure
        const mappedData = {
          name: data.username,
          description:data.description.description,
        };
        setUser(mappedData); // Set the mapped user data in state
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []); // The empty dependency array means this effect runs only once on mount

  // Display a loading message until the data is fetched
  if (!user) {
    return <div>Loading user info...</div>;
  }

  // Render the user information
  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
    </div>
  );
}

export default UserInfo;