import React from 'react'

const Skeleton = (props) => {
    const {number} = props;  

    return (
        Array(number).fill(null).map((_, index) => {
            return (
                <div className='resto-food-skeleton' key={index}>
                    <div className='resto-food-skeleton__imgpart shimmerBG'></div>
                    <div className='resto-food-skeleton__heading one shimmerBG'></div>
                    <div className='resto-food-skeleton__heading two shimmerBG'></div>
                    <div className='resto-food-skeleton__heading three shimmerBG'></div>
                </div>
            )
        }) 
    )
}

export default Skeleton