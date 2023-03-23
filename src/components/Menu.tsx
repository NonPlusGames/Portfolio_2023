/*
Menu component that sends the selected page to the parent.
It receives potential transition positions and the current page as a prop.
*/
import { useState } from 'react';
import { CSSProperties } from 'react';
import './Menu.css';



interface Props{
    targetScale: number; 
    currentPage: string;
    onSelectItem: (item: string) =>void;
}

function Menu(props: Props){

    const {targetScale, currentPage, onSelectItem} = props;
    const [isShrinking, setIsShrinking] = useState<boolean>(false);

    //css style for the size and position of this component after clicking on it the first time
    const menuStyles: CSSProperties = {
        height: `4em `,
        transform : `scale(${targetScale})`
        
    };

    //trigger transition animation 
    const handleShrink = () =>{
        setIsShrinking(true);
    };

    /*
    creates an list of menu items that when clicked will send the selected item as a prop
    to the parent and set it as current page and will shrink and reposition the menu 
    according to the position props from the parent.
    */
    return (
        <>
            <ul className="nav justify-content-center" style={isShrinking ? menuStyles : {}} onClick={handleShrink}>
                <li className="nav-item" onClick={()=>{onSelectItem("menu"); console.log(currentPage);}}>
                    <a className={currentPage==="menu" ? "nav-link active": "nav-link"} href="#">WEB</a>
                </li>
                <li className="nav-item" onClick={()=>{onSelectItem("game"); console.log(currentPage);}}>
                    <a className={currentPage==="game" ? "nav-link active": "nav-link"}  href="#">GAME</a>
                </li>
                <li className="nav-item" onClick={()=>{onSelectItem("edit"); console.log(currentPage);}}>
                    <a className={currentPage==="edit" ? "nav-link active": "nav-link"} href="#">EDIT</a>
                </li>
            </ul>
        </>
    );
}

export default Menu;