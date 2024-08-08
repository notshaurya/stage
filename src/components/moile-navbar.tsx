import { BatteryCharging, Signal, Wifi } from "lucide-react";
export default function MobileNavbar() {
    return (
        <div className="flex justify-between items-center border-b-2">
            <p className="font-semibold">5:26</p>
            <div className="flex justify-center items-center gap-2 ">
                <Signal />
                <Wifi />
                <BatteryCharging />
            </div>
        </div>
    );
}
