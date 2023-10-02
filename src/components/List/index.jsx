import React from 'react';
import Image from 'components/Image';
import './list.scss';

const List = ({content}) => {
    const { listItems, image } = content
    return (
        <div className='list-container'>
            <ul>
                {listItems.map((item) => {
                    return (<li>{item}</li>)
                })}
            </ul>
            {image &&
                <div className='image-container'>
                    <Image {...image} />
                </div>
            }   
        </div>
    )
}

export default List