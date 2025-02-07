"use client"

import { useTheme } from "next-themes"
import { Icon } from "@iconify/react"

export default function Loading() {
  const { theme } = useTheme()

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        theme === "dark" ? "bg-[#1a1f37]" : "bg-[#f8f7fd]"
      } transition-colors duration-200`}
    >
      <div className="relative flex items-center justify-center">
        <div
          className="loading-spinner absolute"
          style={{
            borderLeftColor: theme === "dark" ? "#3b82f6" : "#06b6d4",
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
  )
}

