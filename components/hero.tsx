import { siteConfig } from "@/config/site";
import { LogoStrokeIn } from "./icons";


export default function Hero() {
    return (
        <div className="flex-1 flex items-center p-0">
            <div className="max-w-2xl text-center mx-auto">
                <h1 className="font-serif text-[100px] font-bold text-light">{siteConfig.name}</h1>
            </div>
        </div>
    );
}