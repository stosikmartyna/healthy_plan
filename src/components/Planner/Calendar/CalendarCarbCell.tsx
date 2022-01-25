import React from 'react';
import { capitalizeFirstLetter } from './Calendar.helpers';

interface CalendarCarbCellProps {
    carb: 'low' | 'high';
}

export const CalendarCarbCell: React.FC<CalendarCarbCellProps> = ({ carb }) => {
    return (
        <td>{capitalizeFirstLetter(carb)}-carb</td>
    )
}