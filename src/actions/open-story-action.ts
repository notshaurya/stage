import { OPEN_STORY } from "@/lib/constants";
import { iOpenStory } from "@/lib/types";

export default function openStoryAction(payload: iOpenStory) {
    return {
        type: OPEN_STORY,
        payload,
    };
}
