import React from 'react';
import { WorkoutCell, WorkoutCellImgWrapper, GreyWorkoutIcon } from './Calendar.styles';

interface CalendarWorkoutCellProps {
    isWorkout: boolean;
}

export const CalendarWorkoutCell: React.FC<CalendarWorkoutCellProps> = ({ isWorkout }) => {
    return (
        <WorkoutCell>
            {isWorkout ? (
                <WorkoutCellImgWrapper>
                    <img src='./images/workout_orange.svg' alt='checked workout icon' />
                    <img src='./images/check.svg' alt='check icon' />
                </WorkoutCellImgWrapper>
            ) : (
                <GreyWorkoutIcon>
                    <img src='./images/workout_grey.svg' alt='unchecked workout icon' />
                </GreyWorkoutIcon>
            )}
        </WorkoutCell>
    )
}