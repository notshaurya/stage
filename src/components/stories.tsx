"use client";
import fetchStoriesAction from "@/actions/fetch-stories-action";
import openStoryAction from "@/actions/open-story-action";
import showContentAction from "@/actions/show-content-action";
import Popover from "@/components/popover";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iStory as iStory } from "@/lib/types";

export default function Stories() {
    const dispatch = useDispatch();
    const { stories } = useSelector((state: any) => state.fetchStoriesReducer);
    async function fetchStories() {
        try {
            const response = await fetch("/api/stories");
            const result = await response.json();
            dispatch(fetchStoriesAction({ stories: result }));
        } catch (error) {
            dispatch(fetchStoriesAction({ stories: [] }));
        }
    }

    useEffect(() => {
        fetchStories();
    }, []);

    return (
        <>
            <div className="w-full flex overflow-x-auto h-fit scroll-smooth">
                {stories && stories.map((story: iStory, i: number) => <Story key={i} story={story} />)}
            </div>
            <Popover />
        </>
    );
}

function Story({ key, story }: { key: number; story: iStory }) {
    const dispatch = useDispatch();
    async function fetchContent() {
        const response = await fetch("/api/contents", { method: "POST", body: JSON.stringify({ id: story.id }) });
        const result = await response.json();
        dispatch(showContentAction({ id: story.id, content: result }));
    }
    function handleShowStory() {
        dispatch(openStoryAction({ ...story, isOpen: true }));
        fetchContent();
    }
    return (
        <div
            key={key}
            className="h-fit max-w-20 min-w-20 mx-1 my-1 flex flex-col justify-center items-center overflow-x-clip"
            onClick={handleShowStory}
        >
            <div className="size-16 rounded-full bg-slate-300 p-2 border-red-600 border-2 border-dashed">
                <img
                    src={story.profileImg}
                    alt="profile picture"
                    width={50}
                    height={50}
                    className="object-cover size-full rounded-full overflow-hidden"
                />
            </div>
            <p className="text-xs text-clip text-center w-full">{story.username == "shaurya_suman" ? "Your story" : story.username}</p>
        </div>
    );
}
