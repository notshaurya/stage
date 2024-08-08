"use client";
import fetchStoriesAction from "@/actions/fetch-stories-action";
import Popover from "@/components/popover";
import { iStory } from "@/lib/types";
import { useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import Story from "./story";

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
                {stories && stories.map((story: iStory, i: number) => <Story id={i} story={story} key={i} />)}
            </div>
            <Popover />
        </>
    );
}
