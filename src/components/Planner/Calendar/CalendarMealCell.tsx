import React from 'react';
import { DailyMeal } from '../../../utils/types';

interface CalendarMealCellProps {
    meal: DailyMeal;
}

export const CalendarMealCell: React.FC<CalendarMealCellProps> = ({ meal }) => {
    return (
        <td>
            {meal.name}
            {meal.img && <img src={meal.img} alt='body shake' />}
            {meal.isEaten && <img src={'/images/round_check.svg'} alt='checked' />}
        </td>
    )
}