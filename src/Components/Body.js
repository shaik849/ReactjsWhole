import React, { useEffect, useState } from 'react'
import { DATA_URL } from '../../utils/UrlData'
import {Restaurant, IsVeg} from './Restaurant'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineState from '../../utils/useOnlineState'

function Body() {
    const onlineStatus = useOnlineState()
   const [userData, setUserData] = useState([])
   const [searchText, setSearchText] = useState('')
   const [filterData, setFilterData] = useState([])

   const IsVegRes = IsVeg(Restaurant)
useEffect(() => {
   fetchData();
}, [])

const fetchData = async () =>{
    try{
    const data = await fetch(DATA_URL)
     const jsonData = await data.json();
     setUserData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilterData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    catch(e){
        // console.log(e)
       return (<Error />)
    }
}

   const filterTopRestaurant = () =>{
   let filterData = userData.filter((data) =>(
         data.info.avgRating > 4.1
        ))
        setUserData(filterData)
        setFilterData(filterData)
   }

   const searchFun = () =>{
    // console.log(searchText)
     const filterData = userData.filter((data) =>(data.info.name.toLowerCase().includes(searchText.toLowerCase())))
    //  console.log(filterData)
     setFilterData(filterData)
   }
//    console.log(onlineStatus)
   if(onlineStatus === false) {
    return <h1>Check internet connection</h1>
   }

//    if(userData.length === 0){
//     return (<Shimmer></Shimmer>)
//    }
    return (
        <div className="">
           <div className="flex my-2 justify-center">
            <div className='flex'>
                <input type="text" placeholder='Search' className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                <button className="p-[5px] mx-2 bg-gray-100 rounded-lg" onClick={searchFun}>Search</button>
            </div>
            <button className="p-[5px] bg-gray-100 rounded-lg" onClick={filterTopRestaurant}>Filter rated Restaurant</button>
           </div>
            <div className="flex justify-center flex-wrap"> 
             {userData.length === 0 ? <Shimmer /> :(filterData.map((restaurant) =>(
            <Link key={restaurant.info.id}  to={"/restaurant/"+restaurant.info.id}>{restaurant?.info?.veg || false ? <IsVegRes key={restaurant.info.id} restaurant={restaurant} /> :<Restaurant key={restaurant.info.id} restaurant={restaurant} />}</Link>
                )))}
         </div>
        </div>
    )
}

export default Body