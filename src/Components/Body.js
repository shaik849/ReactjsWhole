import React, { useEffect, useState } from 'react'
import { DATA_URL } from '../../utils/UrlData'
import Restaurant from './Restaurant'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

function Body() {
   const [userData, setUserData] = useState([])
   const [searchText, setSearchText] = useState('')
   const [filterData, setFilterData] = useState([])
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
        console.log(e)
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
    console.log(searchText)
     const filterData = userData.filter((data) =>(data.info.name.toLowerCase().includes(searchText.toLowerCase())))
     console.log(filterData)
     setFilterData(filterData)
   }

//    if(userData.length === 0){
//     return (<Shimmer></Shimmer>)
//    }

    return (
        <div className="body">
           <div className="filter">
            <div className='search'>
                <input type="text" className='search-box' value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                <button className="search-btn" onClick={searchFun}>Search</button>
            </div>
            <button className="filter-btn" onClick={filterTopRestaurant}>Filter rated Restaurant</button>
           </div>
            <div className="res-container"> 
             {userData.length === 0 ? <Shimmer /> :(filterData.map((restaurant) =>(
            <Link to={"/restaurant/"+restaurant.info.id}><Restaurant key={restaurant.info.id} restaurant={restaurant} /></Link>
                )))}
         </div>
        </div>
    )
}

export default Body