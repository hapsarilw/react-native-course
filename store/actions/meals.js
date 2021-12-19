export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilter = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings }
};