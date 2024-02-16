import Link from "next/link";
import ActiveLink from "./ActiveLink";
import { Menus } from '../../../types/mainMenu.types';
import  Styles   from "./../header.module.css";

export default async function MenuJson(){

  const menuArray: Menus =  [
    { "href": "/", "title": "Home","order":0},
    { "href": "/about", "title": "About KKU","order":1},
    { "href": "/news", "title": "News","order":2},
    { "href": "/admission", "title": "Admission","order":3},
    { "href": "/rolleges", "title": "Colleges","order":4},
    { "href": "/reseach", "title": "Reseach","order":5},  
    { "href": "/student-live", "title": "Student Live","order":6},    
  ]

 
const menuL = menuArray.map((menu) => {
    return (
 
    /* -----------if menu have't actives link
      <li className="level-1" key={menu.href}>
           <Link className="active"  href={menu.href}>
              <span>{menu.title}</span>
          </Link>                           
      </li>
      ----------------------------------------*/

    // ------------- if menu have actives link
    <>
      <ActiveLink activeClassName="active" key={menu.href} href={menu.href}>
              <span>{menu.title}</span>                              
      </ActiveLink>  
    </>
    );
  });



  return(
    <nav  className={Styles.mainmenu}>
        <ul className="d-flex" >
                {menuL}
        </ul>
    </nav>
  );
}