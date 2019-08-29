export const  TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
export const FILTER_MEAL = 'FILTER_MEAL'

export const  toggleFavourite = (id) =>{
    return { type:TOGGLE_FAVOURITE,mealId:id }
}

export const filterMeal = filters => {
    return { type:FILTER_MEAL,filters:filters }
}