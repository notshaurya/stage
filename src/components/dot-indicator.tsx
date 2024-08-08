import { cn } from "@/lib/utils";

export default function DotIndicator({ list, index }: { list: any; index: number }) {
    return (
        <div className="fixed inset-0 w-full h-fit p-1 flex gap-5 justify-center items-center">
            {list &&
                list.map((_: any, i: number) => (
                    <div key={i} className={cn("border-black border-2 rounded-full bg-white", i === index ? "size-3" : "size-1")}></div>
                ))}
        </div>
    );
}
