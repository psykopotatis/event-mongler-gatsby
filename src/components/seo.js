import React from "react";


const Seo = ({title, description, pathname, children}) => {
    return (
        <>
            <title>klubbguiden.se</title>
            <meta property="og:title" content="Vad händer i helgen?"/>
            <meta property="og:description" content="Den bästa guiden till Stockholms klubbar, open airs och technofester!"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="http://klubbguiden.se"/>
            <meta property="og:image" content="http://klubbguiden.se/images/ogimage.png"/>
            <script src="https://kit.fontawesome.com/afa5550e98.js" crossOrigin="anonymous"></script>
            {children}
        </>
    )
}

export default Seo;