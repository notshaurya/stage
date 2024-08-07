import { OPEN_STORY } from "@/lib/constants";

export default function openStoryReducer(state = {}, action: any) {
    switch (action.type) {
        case OPEN_STORY:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
