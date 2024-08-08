import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import useContentSwitcher from "@/hooks/use-content-switcher";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useSelector } from "react-redux";

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

function DotIndicator({ list, index }: { list: any; index: number }) {
    return (
        <div className="fixed inset-0 w-full h-fit p-1 flex gap-5 justify-center items-center">
            {list &&
                list.map((_: any, i: number) => (
                    <div className={cn("border-black border-2 rounded-full bg-white", i === index ? "size-3" : "size-1")}></div>
                ))}
        </div>
    );
}

function ProfileInfo({ profileImg, username }: { profileImg: string; username: string }) {
    return (
        <div className="fixed left-3 top-3 flex gap-2 items-center">
            <img src={profileImg} alt="profile picture" width={10} height={10} className="object-cover size-10 rounded-full overflow-hidden z-10" />
            <p className="font-semibold">{username}</p>
        </div>
    );
}

function NextController({ nextContent }: { nextContent: () => void }) {
    return <div className="h-full w-1/2 fixed right-0 bg-transparent" onClick={nextContent}></div>;
}
function PreviousController({ previousContent }: { previousContent: () => void }) {
    return <div className="h-full w-1/2 fixed left-0 bg-transparent" onClick={previousContent}></div>;
}
