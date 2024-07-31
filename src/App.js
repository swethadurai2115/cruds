import { useEffect, useState  } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  
  const getAllUsers = async () => {
    await axios.get("http://localhost:8000/users").then
    ((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }
  useEffect(() => {
   getAllUsers();
  }, []);
 //search function
 const handleSearchChange = (e) => {
  const SearchText=e.target.value.toLowerCase();
  const filteredUsers=users.filter((users) => user.name.
  toLowerCase().includes(SearchText)) || users.city.
  toLowercase().includes(SearchText);
 };
return (
  <>
    <div className="container">
       <h3>CRUD Application</h3>
       <div className="input-search">
      <input type="search" placeholder="Search Text Here" onChange={handleSearchChange}/>
     <button className="btn green">Add Record</button>

<table className="table">
 <thead>
   <tr>
       <th>Id</th>
       <th>Name</th>
       <th>Age</th>
       <th>City</th>
       <th>Edit</th>
      <th>Delete</th>
   </tr>
 </thead>
 <tbody>
 {users && 
    users.map((user, index)=> {
    return(
        <tr key={user.id}>
           <td>{index + 1}</td>
           <td>{user.name}</td>
           <td>{user.age}</td>
           <td>{user.city}</td>
        <td>
          <button className="btn green">Edit</button></td>
          <td><button className="btn red">Delete</button></td>
          </tr>         
  );
 })}
    </tbody>
 </table>
</div>
</div>
</>
);
}
export default App;