import React from "react";
import dynamic from "next/dynamic";
import './maps.module.css'
import MapboxMap from "@/components/mapBox/mapBox";

const DynamicMap = dynamic(() => import ('./mapsDynamic'),{
    ssr:false,
});

function Maps({ pageProps }:any){
    return(
        <>
             {/* <DynamicMap {...pageProps} /> */}
             <MapboxMap/>
        </>
    )
}

export default Maps