export default function NextController({ nextContent }: { nextContent: () => void }) {
    return <div className="h-full w-1/2 fixed right-0 bg-transparent" onClick={nextContent}></div>;
}
