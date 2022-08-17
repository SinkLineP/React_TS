import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams() as {
    id: string;
  }
  const navigate = useNavigate();


  useEffect(() => {
    fetchUser();
  }, [])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + id);
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/users')}>Back</button>
      <h1>Страница пользователя <i style={
        {
          color: "blue"
        }
      }>{user?.name}</i></h1>
      <div style={
        {
          background: "lightgray",
          border: "1px solid black",
          width: 230,
          maxWidth: 400,
          padding: 10,
          borderRadius: 5,
        }
      }>
        <div>Email: <i style={{color: "green"}}>{user?.email}</i></div>
        <div>Адресс<br />
          <div style={{marginLeft: 10}}>
            Город: <i style={{color: "green"}}>{user?.address.city}</i>; <br />
            Улица: <i style={{color: "green"}}>{user?.address.street}</i>; <br />
            ZIP-Code: <i style={{color: "green"}}>{user?.address.zipcode}</i>;
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItemPage;