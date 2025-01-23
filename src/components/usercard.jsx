import React from 'react';
import viteLogo from '/vite.svg';



function userCard() {
    const userData = {
        image: viteLogo ,
        name: "Joe Goldberg",
        age: 19,
        email: "joe@example.com",
        phone: 4808392938,
      }
    return (
        <div>
            <img src = {userData.image} alt="Profile Picture" />
            <p>Name: {userData.name}</p>
            <p>Age: {userData.age}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
        </div>
    );
};

export default userCard;
