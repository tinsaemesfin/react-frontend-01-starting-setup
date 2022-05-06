import React from "react";
import UsersList from "../components/UsersList";
import faker from "@faker-js/faker";

const Users = () => {
    const USERS = [
    {
      id: "U1",
      name: 'Tinsae Mesfin',
      image: 'https:// cdn.pixabay.com/photo/2022/04/19/19/48/boy-7143682_960_720.jpg',
      placeCount: 3,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;
