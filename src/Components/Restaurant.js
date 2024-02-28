import React, { useContext } from 'react'
import { ASSET_URL } from '../../utils/UrlData';
import UsersContext from '../../utils/UsersContext';

export const Restaurant = (props)  =>{
    const {restaurant} = props;

    const {user} = useContext(UsersContext)
    // console.log(restaurant)
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = restaurant?.info
    return (
        <div className="m-4 p-3 w-[240px] bg-slate-100 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-lg hover:bg-slate-200 hover:cursor-pointer">
    <img className="h-[150px] w-[100%]  rounded-lg" src={ASSET_URL+cloudinaryImageId} alt="Restaurant Logo" />
    <h3 className='font-bold text-xl py-4'>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating}</h4> 
    <h4>{sla.slaString}</h4>
    <h4>{costForTwo}</h4>
    <h4>user : {user}</h4>
</div>
    )
}


export const IsVeg = (Restaurant) =>{
    return (props) =>{
      return (
     <div>
        <label className='bg-green-900 text-white px-4 py-2 m-3 rounded absolute z-10'>Veg</label>
        <Restaurant {...props}/>
     </div>
      )
    }
  }


// export default Restaurant