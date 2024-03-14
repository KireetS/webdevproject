import Posts from "@/components/posts/Posts";
import Searchbar  from "@/components/posts/Searchbar";
import React from "react";

const index = () => {
    return (
        <>
            <Searchbar />
            <Posts />
        </>
    );
};

export default index;
