import React from 'react';
import { capitalizeFirstLetter } from './Calendar.helpers';
import { CarbCell } from './Calendar.styles';

interface CalendarCarbCellProps {
    carb: 'low' | 'high';
}

export const CalendarCarbCell: React.FC<CalendarCarbCellProps> = ({ carb }) => {
    return (
        <CarbCell>
            <span>
                {capitalizeFirstLetter(carb)}-carb
            </span>
        </CarbCell>
    )
}