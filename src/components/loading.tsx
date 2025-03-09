import { Icon } from "@iconify/react";

export default function Loading() {

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#f8f7fd] dark:bg-[#1a1f37] transition-colors duration-200"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="loading-spinner absolute border-l-[#06b6d4] dark:border-l-[#3b82f6]"
          style={{
            width: "12rem",
            height: "12rem",
            borderWidth: "0.5rem",
          }}
        ></div>
        <Icon
          icon="mdi:briefcase-outline"
          className="text-6xl text-gray-800 dark:text-white"
          style={{ width: "6rem", height: "6rem" }}
        />
      </div>
    </div>
  );
}
