import { parse } from "path";
import { likes, retweet, views, comments } from "../../../public/icons/LRV.jsx";
import React from "react";

export type TweetDataTypes = {
    _id: any;
    profilePicture: any;
    name: String;
    username: String;
    title: String;
    time: String;
    date: String;
    likes: String;
    comments: String;
    retweet: String;
    views: String;
};

function handleTime(time: string) {
    const tweetCreatedAt = new Date(time);
    const currentDate = new Date();

    const tweetAgeMilliseconds =
        currentDate.getTime() - tweetCreatedAt.getTime();

    const tweetAgeSeconds = Math.floor(tweetAgeMilliseconds / 1000);
    const tweetAgeMinutes = Math.floor(tweetAgeSeconds / 60);
    const tweetAgeHours = Math.floor(tweetAgeMinutes / 60);
    const tweetAgeDays = Math.floor(tweetAgeHours / 24);

    if (tweetAgeDays > 1 && tweetAgeDays < 24) {
        return `${tweetAgeDays} days`;
    } else if (tweetAgeDays == 1) {
        return `${tweetAgeDays} day`;
    } else if (tweetAgeHours > 0 && tweetAgeHours < 24) {
        return `${tweetAgeHours} hours`;
    } else if (tweetAgeMinutes > 0 && tweetAgeMinutes < 60) {
        return `${tweetAgeMinutes} minutes`;
    } else {
        return "Less than a minute";
    }
}

export const TwitterCard = (props: any) => {
    const commentsLength = props.comments ? props.comments.length : 0;
    const retweetNumber = props.reTweets ? props.reTweets.length  : 0

    return (
        <div className="grid grid-cols-7">
            <div className="col-span-2"></div>

            <div className="flex-rows col-span-3 border-2 border-slate-400 p-2 pt-4">
                <div className="flex">
                    <img
                        className="h-14 w-14 rounded-full "
                        src="./pfp.png"
                        alt="Profile Picture"
                    ></img>
                    <div className="flex flex-col ml-2 w-full">
                        <div className="flex items-center">
                            <div className="font-semibold pl-2">
                                {props.name}
                            </div>
                            <div className="text-sky-400/75 px-2">
                                username ||
                            </div>
                            <div className="text-sky-400/75">
                                {handleTime(props.time)}
                            </div>
                        </div>
                        <div className="pl-2">{props.title}</div>
                        <div className="flex px-2 pt-2 space-x-4 h-8">
                            <div className="flex pr-12 basis-1/5">
                                {comments} {commentsLength}
                            </div>
                            <div className="flex pr-12 basis-1/5 ">
                                {retweet} {retweetNumber}
                            </div>
                            <div className="flex pr-12 basis-1/5">
                                {likes} {props.totalLikes}
                            </div>
                            <div className="flex pr-12 basis-1/5">
                                {views} {0}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cols-span-5"></div>
        </div>
    );
};
