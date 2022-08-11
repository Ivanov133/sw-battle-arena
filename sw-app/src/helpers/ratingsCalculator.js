export const calcRating = (ratingList) => {
    if (ratingList) {
        let ratingsSum = 0
        const ratingsCount = ratingList.length

        ratingList.forEach(r => {
            ratingsSum += Number(r.rating_value)
        })

        const result = ratingsSum / ratingsCount


        return Math.round(result * 100) / 100
    }
}
