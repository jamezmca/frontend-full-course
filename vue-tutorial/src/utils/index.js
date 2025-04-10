export function calculateTimeLeft(birthDate, lifeExpectancy) {
    const now = new Date()
    const birth = new Date(birthDate)
    const expectedDeath = new Date(birth.setFullYear(birth.getFullYear() + lifeExpectancy))

    if (now >= expectedDeath) {
        console.log("You have surpassed the life expectancy!")
        return ({
            years: '-',
            months: '-',
            weeks: '-',
            days: '-',
            hours: '-',
            minutes: '-',
            seconds: '-'
        })
    }

    const millisecondsLeft = expectedDeath - now
    const secondsLeft = Math.floor(millisecondsLeft / 1000)
    const minutesLeft = Math.floor(secondsLeft / 60)
    const hoursLeft = Math.floor(minutesLeft / 60)
    const daysLeft = Math.floor(hoursLeft / 24)
    const weeksLeft = Math.floor(daysLeft / 7)

    // Approximate months and years
    const monthsLeft = Math.floor(daysLeft / 30.44)
    const yearsLeft = Math.floor(monthsLeft / 12)

    return {
        years: yearsLeft,
        months: monthsLeft,
        weeks: weeksLeft,
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft
    }
}

export function getTimePercentage() {
    const now = new Date()

    // Year
    const startOfYear = new Date(now.getFullYear(), 0, 1)
    const endOfYear = new Date(now.getFullYear() + 1, 0, 1)
    const yearPercentage = ((now - startOfYear) / (endOfYear - startOfYear)) * 100

    // Month
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)
    const monthPercentage = ((now - startOfMonth) / (endOfMonth - startOfMonth)) * 100

    // Week (ISO week: Monday = 0, Sunday = 6)
    const startOfWeek = new Date(now)
    startOfWeek.setDate(now.getDate() - now.getDay())
    startOfWeek.setHours(0, 0, 0, 0)
    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(startOfWeek.getDate() + 7)
    const weekPercentage = ((now - startOfWeek) / (endOfWeek - startOfWeek)) * 100

    // Day
    const startOfDay = new Date(now)
    startOfDay.setHours(0, 0, 0, 0)
    const endOfDay = new Date(startOfDay)
    endOfDay.setDate(startOfDay.getDate() + 1)
    const dayPercentage = ((now - startOfDay) / (endOfDay - startOfDay)) * 100

    // Hour
    const startOfHour = new Date(now)
    startOfHour.setMinutes(0, 0, 0)
    const endOfHour = new Date(startOfHour)
    endOfHour.setHours(startOfHour.getHours() + 1)
    const hourPercentage = ((now - startOfHour) / (endOfHour - startOfHour)) * 100

    // Minute
    const startOfMinute = new Date(now)
    startOfMinute.setSeconds(0, 0)
    const endOfMinute = new Date(startOfMinute)
    endOfMinute.setMinutes(startOfMinute.getMinutes() + 1)
    const minutePercentage = ((now - startOfMinute) / (endOfMinute - startOfMinute)) * 100

    return {
        years: yearPercentage.toFixed(1) * 360 / 100,
        months: monthPercentage.toFixed(1) * 360 / 100,
        weeks: weekPercentage.toFixed(1) * 360 / 100,
        days: dayPercentage.toFixed(1) * 360 / 100,
        hours: hourPercentage.toFixed(1) * 360 / 100,
        minutes: minutePercentage.toFixed(1) * 360 / 100
    }
}


export function getLifePercentageLived(birthDate, lifeExpectancy) {
    const birth = new Date(birthDate)
    const now = new Date()
    const expectedDeath = new Date(birth)
    expectedDeath.setFullYear(birth.getFullYear() + lifeExpectancy)

    const lifeLived = now - birth
    const totalLife = expectedDeath - birth
    const lifePercentage = (lifeLived / totalLife) * 100
    return lifePercentage.toFixed(1) + "%"
}