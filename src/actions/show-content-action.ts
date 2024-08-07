import { SHOW_CONTENT } from "@/lib/constants";
import { iShowContents } from "@/lib/types";

export default function showContentAction(payload: iShowContents) {
    return {
        type: SHOW_CONTENT,
        payload,
    };
}
