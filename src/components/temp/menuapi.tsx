export default async function MenuApi(){

  const response = await fetch('http://kku.aaa:81/ar/system/menu/main/linkset');
  const getMenu = await response.json();
  const listMenu = getMenu.linkset[0];
  const allMenu = { ...listMenu }
  const newsFirst =  allMenu["item"]




  console.log("aaaa")
  console.log(newsFirst)
  // console.log(listMenu)
  // console.log(getMenu.linkset[0].item[0])
  // console.log(getMenu.linkset[0][...item]})
  // console.log(response.linkset[0])


  const menuL = newsFirst.map((menu: any) => {
    return (
      <div key={menu.title}>          
          <h2>{menu.title}</h2>
      </div>

    );
  });


    // const menuL1 = newsFirst.map((menu: any) => {
  //   return (
  //     <div key={menu.title}>          
  //         <h2>{menu.title}</h2>
  //     </div>

  //   );
  // });

  

  return(

    <h1>
      {/* {getMenu.linkset[0].item[0]} */}
      Main Menu
      {menuL}
    </h1>

  );
}