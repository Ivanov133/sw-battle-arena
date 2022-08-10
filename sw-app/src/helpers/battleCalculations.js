/* Based on the characters stats - dueling, force and total power, calculate what are
the odds of one beating the other */




export function calcOdds(stat1, stat2) {
    let difference = Math.abs(stat1 - stat2)

    if (difference > 50 ) {
        difference += 50
    } else if (difference > 30 ) {
        difference += 45
    } else if (difference > 25 ) {
        difference += 30
    } else if (difference > 10 ) {
        difference += 25
    } else if (difference > 5 ) {
        difference += 20
    } else if (difference >= 1 ) {
        difference += 10
    }
    
    let percentage1 = 0
    let percentage2 = 100

    while ((percentage2 - percentage1) > difference) {
        percentage1 += 1
        percentage2 -= 1
    }

    if (stat1 === 0 && stat2 > 30) {
        percentage1 = 0
        percentage2 = 100
    }

    if (stat1 >= stat2) {
        return [percentage2, percentage1]
    } else {
        return [percentage1, percentage2]
    }
}
