"use client"
import {motion} from "framer-motion";
interface ProgressBarProps{
    value: number;
    color?: string;
}
export default function ProgressBar({value, color = "#00d4ff"}: ProgressBarProps){
    return(
        <div className="w-full">
            <div className="h-1.5 w-full rounded-full bg-[#1e2832] overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${value}%` }}
                    style={{ backgroundColor: color }}
                    transition={{
                        duration:1.2,
                        ease:[0.25,0.46,0.45,0.94],
                        delay:0.3
                    }}
                />
            </div>
        </div>

    )

}