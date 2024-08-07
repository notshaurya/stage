import { SHOW_CONTENT } from "@/lib/constants";

export default function showContentReducer(state = {}, action: any) {
    switch (action.type) {
        case SHOW_CONTENT:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
