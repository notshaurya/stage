import openStoryAction from "@/actions/open-story-action";
import showContentAction from "@/actions/show-content-action";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useContentSwitcher() {
    const [currentContentIndex, setCurrentContent] = useState(0);

    const { isOpen } = useSelector((state: any) => state.openStoryReducer);
    const { stories } = useSelector((state: any) => state.fetchStoriesReducer);
    const { id, content } = useSelector((state: any) => state.showContentReducer);

    const dispatch = useDispatch();

    const timer = useRef<ReturnType<typeof setTimeout>>();

    async function fetchContent(id: number) {
        const response = await fetch("/api/contents", { method: "POST", body: JSON.stringify({ id }) });
        const result = await response.json();
        dispatch(showContentAction({ id, content: result }));
    }

    function nextContent() {
        if (content[currentContentIndex + 1]) setCurrentContent(currentContentIndex + 1);
        else {
            setCurrentContent(0);
            if (stories[id]) {
                dispatch(openStoryAction({ ...stories[id] }));
                fetchContent(id + 1);
            } else {
                clearTimeout(timer.current);
                dispatch(openStoryAction({ isOpen: false }));
            }
        }
    }

    function previousContent() {
        if (content[currentContentIndex - 1]) setCurrentContent(currentContentIndex - 1);
        else {
            if (stories[id - 2]) {
                setCurrentContent(content.length - 1);
                fetchContent(id - 1);
                dispatch(openStoryAction({ ...stories[id - 2] }));
            } else {
                dispatch(openStoryAction({ isOpen: false }));
                clearTimeout(timer.current);
            }
        }
    }

    useEffect(() => {
        if (isOpen && content) {
            timer.current = setTimeout(() => {
                nextContent();
            }, 5000);
        } else {
            clearTimeout(timer.current);
        }
        return () => {
            clearTimeout(timer.current);
        };
    }, [isOpen, currentContentIndex, content]);

    return {
        currentContent: content ? content[currentContentIndex] : {},
        index: currentContentIndex,
        nextContent,
        previousContent,
    };
}
