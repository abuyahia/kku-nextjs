import Link from "next/link";
import ActiveLink from "./ActiveLink";
export default async function MenuApi(){

  try {
   
    

  const response = await fetch('http://kku.aaa:81/ar/system/menu/main/linkset');
  const getMenu = await response.json();
  const listMenu = getMenu.linkset[0];
  const allMenu = { ...listMenu }
  const newsFirst =  allMenu["item"]


  const menuL = newsFirst.map((menu: any) => {
    return (

    /* ------------- if you have actives link

    <li className="level-1" key={menu.href}>
      <ActiveLink activeClassName="active"  href={menu.href}>
          <span>{menu.title}</span>
      </ActiveLink>                         
    </li> 
    ------------------------------------------*/

    // ------------- if you have't actives link
      <li className="level-1" key={menu.href}>
          <Link className="active"  href={menu.href}>
              <span>{menu.title}</span>
          </Link>                         
      </li>
    );
  });



  return(
    <nav  className="mainmenu">
        <ul >
                {menuL}
        </ul>
    </nav>
  );

} catch (err) {
  return(<h1>not result</h1>)
 }

}