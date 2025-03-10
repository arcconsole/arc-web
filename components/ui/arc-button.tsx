import { cn } from "@/lib/utils";
import React from "react";

const ArcButton = ({
  children,
  className,
  side,
  onClick,
  btnType = "button",
}: {
  children: React.ReactNode;
  className?: string;
  side: "left" | "right";
  onClick?: () => void;
  btnType?: "button" | "submit" | "reset";
}) => {
  return (
    <button
      onClick={onClick}
      type={btnType}
      className={cn(
        "bg-[#A645F0] py-2 px-10 text-white text-lg cursor-pointer",
        className,
        side == "left" ? "rounded-bl-full " : "rounded-br-full "
      )}
    >
      {children}
    </button>
  );
};

export default ArcButton;
