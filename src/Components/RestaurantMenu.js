import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { MENU_URL } from '../../utils/UrlData';
import { useParams} from 'react-router';

const RestaurantMenu =  () => {

    const [menuData, setMenuData] = useState(null)
    const {resId} = useParams()

    useEffect(() => {
      fetchMenu();
    }, [])

    const fetchMenu = async () =>{
        const fetchMenu = await fetch(MENU_URL+resId)
        const jsonData = await fetchMenu.json();
       setMenuData(jsonData);
       console.log(jsonData)
    }
    // console.log(menuData?.data?.cards[2]?.card?.card?.info)
    // const { name, cuisines, costForTwoMessage } = menuData?.data?.cards[2]?.card?.card?.info || {};
    const  {name, cuisines, costForTwoMessage, }  = menuData?.data?.cards[2]?.card?.card?.info || {};
    const { itemCards, title } = menuData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    console.log(itemCards)

  return  menuData === null ? <Shimmer /> :(
    <div className='menu'>
        <h1 className=''>{name}</h1>
        <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
        <h3></h3>
        <h3>Menu</h3>
        <ul>
        {itemCards.map((data) => (
              <li key={data?.card?.info?.id}>{data?.card?.info?.name} - {data?.card?.info?.price ? data?.card?.info?.price / 100 : data?.card?.info?.defaultPrice /100}</li>
        ))}
        </ul>
    </div>
  )
  
}

export default RestaurantMenu