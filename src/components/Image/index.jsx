import React from 'react';
import supabaseLogo from 'assets/supabase-logo-wordmark--light.png';

const imageMapper = {
    supabaseLogo
};

const Image = ({ src, width='100%', height='100%', alt = 'image' }) => {
    return (
        <img 
            src={imageMapper[src]}
            alt={alt}
            width={width}
            height={height} 
        />
    )

};

export default Image;
