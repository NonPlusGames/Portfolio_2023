import TextAdv from "./components/TextAdv";
import Menu from "./components/Menu";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";

function App(){
  const [currentPage, setCurrentPage] = useState("landing");
  const [fade, setFade] = useState("fadeOff");
  /*
  keeps track of what the current page is
  by saving it to [currentPage] after it
  recieves an [item] from the child as a prop
  */
  const handleSelectItem = (item: string) =>{
    setCurrentPage(item);
  } 
  useEffect(() => {
     const timeout = setInterval(() => {
      setFade("fadeOn");
     }, 2000);
  }, [currentPage])
  
  return (
    <>
      <div className= "portfolio container-fluid">
        <Menu targetScale={.45} currentPage={currentPage} onSelectItem={handleSelectItem}/>
        { currentPage=="game" && <div className="tacomp" style={fade=="fadeOn" ? {opacity: "1"} : {opacity:"0"}}><TextAdv /></div> }
      </div>
    </>
  );

}

export default App;