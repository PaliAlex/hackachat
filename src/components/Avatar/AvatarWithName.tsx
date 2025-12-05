import React from "react";

interface AvatarWithNameProps {
    name: string;
    onClick?: () => void;
    size?: number; // розмір аватара в px
    bgColor?: string; // колір фону аватара
    textColor?: string; // колір літери
}

export const AvatarWithName: React.FC<AvatarWithNameProps> = ({
    name,
    onClick,
    size = 40,
    bgColor = "bg-blue-500",
    textColor = "text-white",
}) => {
    const firstLetter = name.charAt(0).toUpperCase();

    return (
        <div
            className="flex items-center gap-3 cursor-pointer hover:brightness-75 border border-solid p-[5px] rounded-[15px] "
            onClick={onClick}
        >
            <div
                className={`flex items-center justify-center ${bgColor} ${textColor} rounded-full font-bold`}
                style={{ width: size, height: size }}
            >
                {firstLetter}
            </div>
            <span className="font-medium text-gray-800">{name}</span>
        </div>
    );
};
