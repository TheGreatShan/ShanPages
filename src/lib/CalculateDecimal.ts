interface HoursInterface {
    hours: string[];
    valid: boolean;
}

export function CalculateDecimal(hours: string): number {
    const splittedHours: HoursInterface = InputValidator(hours)
    
    if (!splittedHours.valid) {return 0}

    const minutes: number = parseFloat(splittedHours.hours[1]) / 60
    const hour: number = parseFloat(splittedHours.hours[0])
    const roundedHours = RoundHours(hour + minutes)
    return roundedHours
}


function RoundHours(decimal: number): number {
    return parseFloat(decimal.toFixed(2))
}

function InputValidator(hours: string): HoursInterface {
    if (hours.includes(":") && hours.includes(".")) {
        return { hours: ["", ""], valid: false }
    } else if (hours.includes(":") && !hours.includes(".")) {
        return { hours: hours.split(":"), valid: true }
    }

    return { hours: ["", ""], valid: false }
}