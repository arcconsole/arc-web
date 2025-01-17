import { cn } from "@/lib/utils";
import React from "react";

const ArcButton = ({
  children,
  className,
  side,
}: {
  children: React.ReactNode;
  className?: string;
  side: "left" | "right";
}) => {
  return (
    <button
      className={cn(
        "bg-[#A645F0] py-2 px-10 text-white text-lg",
        className,
        side == "left" ? "rounded-bl-full " : "rounded-br-full "
      )}
    >
      {children}
    </button>
  );
};

export default ArcButton;
