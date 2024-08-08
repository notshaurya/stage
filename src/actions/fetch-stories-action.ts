import { FETCH_STORIES } from "@/lib/constants";
import { iStories } from "@/lib/types";

export default function fetchStoriesAction(payload: iStories) {
    return {
        type: FETCH_STORIES,
        payload,
    };
}
