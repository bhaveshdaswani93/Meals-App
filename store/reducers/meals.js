import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE, FILTER_MEAL } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favMeals: []
};

const mealsReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      isMealFav = state.favMeals.findIndex(meal => meal.id === action.mealId);
      if (isMealFav >= 0) {
        const newFavMeal = state.favMeals.filter(
          meal => meal.id !== action.mealId
        );
        return {
          ...state,
          favMeals: newFavMeal
        };
      } else {
        const newFavMeal = state.favMeals.concat(
          state.meals.find(meal => meal.id === action.mealId)
        );
        return {
          ...state,
          favMeals: newFavMeal
        };
      }
    case FILTER_MEAL:
      const appliedFilter = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilter.isGluteenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilter.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilter.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilter.isVegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredMeals: filteredMeals
      };
    default:
      return state;
  }
};

export default mealsReducers;
