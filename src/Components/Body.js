import React, { useState } from 'react'
import data from '../../utils/Mockdata'
import Restaurant from './Restaurant'

function Body() {
   const [userData, setUserData] = useState(data)
   const filterTopRestaurant = () =>{
   let filterData = userData.filter((data) =>(
         data.info.avgRating > 4
        ))
        setUserData(filterData)
   }

    return (
        <div className="body">
           <div className="filter">
            <button className="filter-btn" onClick={filterTopRestaurant}>Filter rated Restaurant</button>
           </div>
            <div className="res-container"> 
             {userData.map((restarent) =>(
             <Restaurant key={restarent.info.id} restarent={restarent} />
                ))}
         </div>
        </div>
    )
}

export default Body