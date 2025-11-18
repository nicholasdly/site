import { type ClassValue, clsx } from "clsx";
import { differenceInCalendarDays } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  const now = new Date();

  if (differenceInCalendarDays(now, date) > 1) {
    return Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).format(date);
  }

  if (differenceInCalendarDays(now, date) == 1) {
    return "Yesterday";
  }

  return Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}
