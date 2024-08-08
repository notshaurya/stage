import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import useContentSwitcher from "@/hooks/use-content-switcher";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import DotIndicator from "./dot-indicator";
import NextController from "./next-controller";
import PreviousController from "./previous-controller";
import ProfileInfo from "./profile-info";

export default function Popover() {
    const { username, profileImg, isOpen } = useSelector((state: any) => state.openStoryReducer);
    const { content } = useSelector((state: any) => state.showContentReducer);

    const { currentContent, index, nextContent, previousContent, triggerClose } = useContentSwitcher();

    return (
        <Dialog open={isOpen || false}>
            <DialogContent className="size-full">
                <div
                    className="fixed inset-0 flex w-full h-full items-center justify-center bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${currentContent?.content})` }}
                ></div>
                <DotIndicator list={content} index={index} />
                <ProfileInfo profileImg={profileImg} username={username} />
                <PreviousController previousContent={previousContent} />
                <NextController nextContent={nextContent} />
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-80 bg-black z-50">
                    <X className="size-7 bg-white" onClick={triggerClose} />
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
