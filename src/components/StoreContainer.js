import React from "react";


function StoreContainer({stores}) {

  console.log(stores);

  const storelist = stores.map((store)=>{
  return ( 
      <div>
        <main>
          <ul>
          <li>{store.name}</li>
          <img src={store.image}/>
          </ul>
        </main>
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