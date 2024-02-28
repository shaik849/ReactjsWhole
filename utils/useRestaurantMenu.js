import { useEffect, useState } from 'react'
import { MENU_URL } from './UrlData';

const useRestaurantMenu = (resId) => {
    const [menuData, setMenuData] = useState(null)

     useEffect(() => {
      fetchMenu();
    }, [])

    const fetchMenu = async () =>{
        const fetchMenu = await fetch(MENU_URL+resId)
        const jsonData = await fetchMenu.json();
       setMenuData(jsonData);
    //    console.log(jsonData)
    }
  return menuData;
}

export default useRestaurantMenu;