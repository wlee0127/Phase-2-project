
import React from "react";
import MyMap from "../components/MyMap";
import NavBar from "../components/NavBar";


function Home() {

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <MyMap style={{display: 'flex', justifyContent: 'center'}}/>
      </main>
    </div>
  );
}

export default Home;
