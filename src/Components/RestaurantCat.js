import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCat = (props) => {
    // const [showItems, setShowitems] = useState(false)

    const handleClick = () => {
        props.showIndex()
    }
    const {title, itemCards} = props.data
  return (
    <div>
    <div className='w-6/12 bg-gray shadow-lg p-4 mx-auto my-4 '>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold text-lgs'>{title} ({itemCards.length})</span>
        <span>🔽</span>
        </div>
        {props.showItems && <ItemList items={itemCards}/>}
    </div>
    </div>
  )
}

export default RestaurantCat