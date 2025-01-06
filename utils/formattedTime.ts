export const formattedTimeMinutes = (seconds: number) => {
    return String(Math.floor(seconds / 60)).padStart(2, '0');
}

export const formattedTimeSeconds = (seconds: number) => {
    return String(seconds % 60).padStart(2, '0')
}

export const minutesToSeconds = (minutes: number) => {
    return minutes * 60
}