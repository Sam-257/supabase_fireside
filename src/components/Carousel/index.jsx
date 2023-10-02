import React, { useEffect, useState } from 'react';
import Image from 'components/Image';
import useStore from 'hooks/useStore';
import slides from './slides';
import './carousel.scss'
import List from 'components/List';

const makeSlideContent = (slideId) => {
    const { component, props } = slides[slideId];

    switch (component) {
        case 'Image':
            return <Image {...props} />;
        case 'Text':
            return <h4>{props.content}</h4>;
        case 'List':
            return <List {...props} />
        default:
            return <h2>Not found</h2>
    }
};

const Carousel = () => {
    const {storeValue, storeSet} = useStore('slideId');
    const [currentSlideId, setCurrentSlideId] = useState(storeValue);
    const [slide, setSlide] = useState(makeSlideContent(storeValue))

    const handleArrowKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            setCurrentSlideId(prevSlideId => {
                if (prevSlideId > 0) return prevSlideId - 1;
                return prevSlideId;
            })
        } else if (e.key === 'ArrowRight') {
            setCurrentSlideId(prevSlideId => {
                if (prevSlideId < slides.length - 1) return prevSlideId + 1
                return prevSlideId;
            })
        }
    };

    // Set the store if the slide changes
    useEffect(() => {
        if (storeValue === currentSlideId) return;

        storeSet(currentSlideId);
        setSlide(makeSlideContent(currentSlideId))
    }, [currentSlideId, storeSet, storeValue]);

    // Listen to left and right arrow key press so that we can change the currentSlideId
    useEffect(() => {
        document.addEventListener('keydown', handleArrowKeyDown);
        return () => {
            document.removeEventListener('keydown', handleArrowKeyDown);
        };
    }, []); 

    return (
        <div className={`carousel-container ${slides[currentSlideId].styles}`}>
            {slide}
        </div>
    )
}

export default Carousel