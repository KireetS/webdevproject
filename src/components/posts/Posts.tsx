import React, { useEffect, useState } from "react";
import { TweetDataTypes, TwitterCard } from "./PostCard";
import axios, { Axios } from "axios";
import { headers } from "next/headers";

const Posts = () => {
    const [data, setData] = useState([]);


    // check your backend port and backend code is running
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(
                    "http://localhost:3001/api/tweet/fetch/all"
                );
                console.log(resp.data.tweets);
                setData(resp.data.tweets);
            } catch (error) {
                console.log("Error: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data.map((tweet: any) => (
                <TwitterCard
                    key={tweet._id}
                    title={tweet.content}
                    name={tweet.userCredentials.name}
                    username={"username"}
                    time={tweet.createdAt}
                    totalComments={tweet.comments}
                    reTweeets={tweet.retweet}
                    totalLikes={tweet.numberOfLikes}
                    views={tweet.views}
                />
            ))}
        </div>
    );
};

export default Posts;
