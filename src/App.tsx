import TextAdv from "./components/TextAdv";
import Menu from "./components/Menu";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";

function App(){
  const [currentPage, setCurrentPage] = useState("landing");

  /*
  keeps track of what the current page is
  by saving it to [currentPage] after it
  recieves an [item] from the child as a prop
  */
  const handleSelectItem = (item: string) =>{
    setCurrentPage(item);
  } 

  
  return (
    <>
      <div className= "container">
      <Menu targetScale={.57} currentPage={currentPage} onSelectItem={handleSelectItem}/>
      <div className="tacomp"><TextAdv /></div>
      </div>
    </>
  );

}

export default App;