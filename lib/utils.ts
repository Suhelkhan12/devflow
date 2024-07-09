import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTimeElapsed(date: Date): string {
  const now = new Date();
  const elapsed = now.getTime() - date.getTime();

  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
      return `${years} year${years === 1 ? '' : 's'} ago`;
  } else if (months > 0) {
      return `${months} month${months === 1 ? '' : 's'} ago`;
  } else if (days > 0) {
      return `${days} day${days === 1 ? '' : 's'} ago`;
  } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (minutes > 0) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else {
      return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
  }
}


export function formatBigNumber(num: number): string {
  let result: string;
  if (num >= 1000000) {
      result = num >= 10000000 ? (num / 1000000).toFixed(0) + "M" : (num / 1000000).toFixed(2) + "M";
  } else if (num >= 1000) {
      result = (num / 1000).toFixed(0) + "K";
  } else {
      result = num.toString();
  }
  return result;
} 

export async function wait(time:number){
    return new Promise((resolve)=>setTimeout(resolve, time))
}