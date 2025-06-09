"use client"

import { motion } from "framer-motion"

interface LoadingSkeletonProps {
  className?: string
  variant?: "text" | "card" | "image" | "button"
}

const LoadingSkeleton = ({ className = "", variant = "text" }: LoadingSkeletonProps) => {
  const baseClasses =
    "bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded animate-pulse"

  const variants = {
    text: "h-4 w-full",
    card: "h-48 w-full",
    image: "h-64 w-full",
    button: "h-10 w-32",
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    />
  )
}

export default LoadingSkeleton
