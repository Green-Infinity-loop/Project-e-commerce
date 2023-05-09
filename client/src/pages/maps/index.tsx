import React from "react";
import dynamic from "next/dynamic";
import './maps.module.css'

const DynamicMap = dynamic(() => import ('./mapsDynamic'),{
    ssr:false,
});

function Maps({ pageProps }:any){
    return <DynamicMap {...pageProps} />
}

export default Maps