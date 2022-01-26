import React from 'react';
import { DailyMeal } from '../../../utils/types';
import { MealCell, MealImg, MealWrapper, RoundCheckIcon, Text } from './Calendar.styles';

interface CalendarMealCellProps {
    meal: DailyMeal;
}

export const CalendarMealCell: React.FC<CalendarMealCellProps> = ({ meal }) => {
    return (
        <MealCell>
            <MealWrapper>
                <Text>{meal.name}</Text>
                {meal.isEaten && <RoundCheckIcon src={'/images/round_check.svg'} alt='checked' />}
                {meal.img && <MealImg src={meal.img} alt='body shake' />}
            </MealWrapper>
        </MealCell>
    )
}