import { UserITem } from './componets/UserITem';
import { Search } from './componets/Search';
import logo from './logo.svg';
import { useEffect, useState } from 'react';



function App() {
  const [users, setUsers] = useState([]);
  const[search, setSearch]= useState("");

  useEffect(()=>{
    fetch("https://random-data-api.com/api/users/random_user?size=30")
    .then((res)=> res.json())
    .then((data)=> setUsers(data));
  },[])

  return (
    <div className="App">
     <Search search= {search} setSearch={setSearch}/>

     {users.filter((user)=>
     user.first_name.toLowerCase().includes(search.toLowerCase())
     )
     .map((user)=>(<UserITem key={user.first_name} user={user}/>
      ))}

     {/*{users.map((user, index) =>(
     <UserITem
     key={index}
     user={user}
     />
     ))}*/}
     
    
    </div>
  );
}

export default App;
