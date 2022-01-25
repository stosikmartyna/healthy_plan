import React from 'react';

interface CalendarWorkoutCellProps {
    isWorkout: boolean;
}

export const CalendarWorkoutCell: React.FC<CalendarWorkoutCellProps> = ({ isWorkout }) => {
    return (
        <td>
            {isWorkout ? (
                <>
                    <img src='./images/workout_orange.svg' alt='checked workout icon' />
                    <img src='./images/check.svg' alt='check icon' />
                </>
            ) : (
                <img src='./images/workout_grey.svg' alt='unchecked workout icon' />
            )}
        </td>
    )
}