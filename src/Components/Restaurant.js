import React from 'react'
import { ASSET_URL } from '../../utils/UrlData';

function Restaurant(props) {
    const {restaurant} = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = restaurant?.info
    return (
        <div className="res-card">
    <img className="res-logo" src={ASSET_URL+cloudinaryImageId} alt="Restaurant Logo" />
    <h3>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating}</h4>
    <h4>{sla.slaString}</h4>
    <h4>{costForTwo}</h4>
</div>
    )
}


export default Restaurant