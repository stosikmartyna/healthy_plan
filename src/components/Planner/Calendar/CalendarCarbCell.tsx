import React from 'react';
import { transformTextToUpperCase } from './Calendar.helpers';
import { CarbCell } from './Calendar.styles';

interface CalendarCarbCellProps {
    carb: 'low' | 'high';
}

export const CalendarCarbCell: React.FC<CalendarCarbCellProps> = ({ carb }) => {
    const textToTransform = `${carb}-carb`;
    return (
        <CarbCell>
            <span>
                {transformTextToUpperCase(textToTransform)}
            </span>
        </CarbCell>
    )
}