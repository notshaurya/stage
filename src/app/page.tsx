import MobileNavbar from "@/components/moile-navbar";
import Stories from "@/components/stories";

export default function Home() {
    return (
        <div className="w-full h-full p-2">
            <MobileNavbar />
            <h1 className="font-bold text-3xl font-mono my-2">Instagram</h1>
            <Stories />
           
        </div>
    );
}
