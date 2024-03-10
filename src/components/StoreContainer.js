import React, {useState} from "react";
import "./StoreContainer.css";
import MyForm from "./MyForm";


function StoreContainer({stores, handleform, formData}) {

  const iventorylist = stores.map((store)=>{
    store.items.map((item)=>{
      <span>{item}</span>
    })
  })

  const storelist = stores.map((store)=>{
  return ( 
      <div className="store-container">
        <main>
          <ul>
          <h3>{store.name}</h3>
          <img src={store.image}/>
          <ul>inventory:
            {store.items.map((item) => {
              return(
              <li>{item}</li>
              )
            })}
          </ul>
          </ul>
        </main>
      <div>
        <MyForm id={store.id} handleform={handleform} formData={formData}/>
      </div>
      </div>
  )}
  );


  return (
    <div>
    <main>
      {storelist}
    </main>
  </div>
  );
}

export default StoreContainer;