import { FETCH_STORIES } from "@/lib/constants";

export default function fetchStoriesReducer(state = {}, action: any) {
    switch (action.type) {
        case FETCH_STORIES:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
