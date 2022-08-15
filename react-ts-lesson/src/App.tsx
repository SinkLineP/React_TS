import React from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";

const App = () => {
  const users: IUser[] = [
    {id: 1, name: "Artem", email: "pfdsfpsdp@gmail.com", address: {city: "Moscow", street: "Lenina", zipcode: "12345"}},
    {id: 2, name: "Misha", email: "pfcvcxvxcvcxvdp@gmail.com", address: {city: "SPB", street: "Kirova", zipcode: "09876"}},
  ]
  return (
    <div>
      <Card onClick={(num) => console.log("click ", num)} variant={CardVariant.outlined} width={"200px"} height={"100px"}>
        <button>Create</button>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;