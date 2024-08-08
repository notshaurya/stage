export default function PreviousController({ previousContent }: { previousContent: () => void }) {
    return <div className="h-full w-1/2 fixed left-0 bg-transparent" onClick={previousContent}></div>;
}
