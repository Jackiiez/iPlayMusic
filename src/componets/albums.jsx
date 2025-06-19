
import { useEffect, useState } from "react";
import Navigation from "./navigation";
import FeaturedHeader from "./Featured-header";
import Realeases from "./newreleases";
import Featuredalbums from "./featuredAlbums";

export default function Albums() {
 



    return (
       <>
            <FeaturedHeader defaultTitle="Music" defaultText="All Albums" />
            <Featuredalbums/>
    <Realeases/>
           <Navigation/>
            </>
    );
};
