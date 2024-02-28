import React from 'react'
import { ASSET_URL } from '../../utils/UrlData'

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className='m-4 p-4 border-b-2 text-left flex justify-between w-100'>
                     <div className=' w-9/12 px-2'>
                    <div className='py-2'>
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice /100 }</span>
                    </div>
                    <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                    <div className='w-3/12'>
                        {/* <div className='absolute'>
                     <button className='bg-white shadow-lg m-20 rounded p-2'>Add +</button>
                     </div> */}
                     <img src={ASSET_URL+item.card.info.imageId} className='w-[150px] h-50 py-2'></img>
                     </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList