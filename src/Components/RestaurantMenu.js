import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams} from 'react-router';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import RestaurantCat from './RestaurantCat';

const RestaurantMenu =  () => {

    const {resId} = useParams()

    const menuData = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(null)

    const handleShowIndex = (index) => {
      setShowIndex((prevIndex) => (prevIndex === null ? index : null));
    };
    const  {name, cuisines, costForTwoMessage, }  = menuData?.data?.cards[2]?.card?.card?.info || {};
    // const { itemCards, title } = menuData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    const categories = menuData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  return  menuData === null ? <Shimmer /> :(
    <div className='text-center'>
        <h1 className='font-bold my-6'>{name}</h1>
        <h3 className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</h3>
        {
          categories.map((categories, index) => <RestaurantCat key={index} data={categories?.card?.card} showItems={index === showIndex ? true : false}  showIndex={() => handleShowIndex(index)}/>)
        }
    </div>
  )
  
}



export default RestaurantMenu