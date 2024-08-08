import openStoryAction from "@/actions/open-story-action";
import showContentAction from "@/actions/show-content-action";
import { iStory } from "@/lib/types";
import { useId } from "react";
import { useDispatch } from "react-redux";

export default function Story({ id, story }: { id: number; story: iStory }) {
    const uid = useId();
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
            key={id + uid}
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
