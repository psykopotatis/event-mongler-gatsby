import React from "react";


const Seo = ({title, description, pathname, children, location, url}) => {
    return (
        <>
            <title>klubbguiden.se</title>
            <meta property="og:title" content="Vad händer i helgen?"/>
            <meta property="og:description" content={`Den bästa guiden till ${location}s klubbar, open airs och technofester!`}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={url}/>
            <meta property="og:image" content="http://klubbguiden.se/images/ogimage.png"/>
            <script src="https://kit.fontawesome.com/afa5550e98.js" crossOrigin="anonymous"></script>
            {children}
        </>
    )
}

export default Seo;