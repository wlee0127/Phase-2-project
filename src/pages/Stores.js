import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import StoreContainer from "../components/StoreContainer";


function Stores() {
   
const [stores, setStores] = useState(null);
const [formData, setFormData] = useState("");

const handleform = (value) => {
 setFormData(value);
}

useEffect(()=>{
    fetch("http://localhost:4000/stores")
    .then((response)=>response.json())
    .then((data)=>{
      setStores(data);
    })
  },[]);

  useEffect(()=>{
    fetch("http://localhost:4000/stores")
    .then((response)=>response.json())
    .then((data)=>{
      setStores(data);
    })
  },[formData]);

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        {stores!==null? (<StoreContainer stores={stores} handleform={handleform} formData={formData}/>):(<p>loading</p>)}
      </main>
    </div>
  );
}

export default Stores;