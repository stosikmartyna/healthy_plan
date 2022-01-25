import React, { useEffect, useState } from 'react';
import { Header } from './Header/Header';
import { Calendar } from './Calendar/Calendar';
import { Container } from './Planner.styles';
import { HealthyPlan, Week } from '../../utils/types';

const initialWeekNumber = 7;

interface PlannerProps {
    healthyPlan: HealthyPlan;
}

export const Planner: React.FC<PlannerProps> = ({ healthyPlan }) => {
    const [currentWeek, setCurrentWeek] = useState<Week>();
    const [currentWeekNumber, setCurrentWeekNumber] = useState<number>(initialWeekNumber);

    const {weeks, proteinOptions} = healthyPlan;
    const weeksNumbers = weeks.map(week => week.number);

    const goToNextWeek = () => {
        setCurrentWeekNumber(currentWeekNumber + 1);
    }

    const goToPreviousWeek = () => {
        setCurrentWeekNumber(currentWeekNumber - 1);
    }

    useEffect(() => {
        const activeWeek = weeks.find(week => week.number === currentWeekNumber);
        setCurrentWeek(activeWeek)
    }, [currentWeekNumber])

    return (
        <Container>
            {currentWeek && (
                <>
                    <Header 
                        weekNumber={currentWeek.number} 
                        proteinOptions={proteinOptions} 
                        goToNextWeek={goToNextWeek}  
                        goToPreviousWeek={goToPreviousWeek}
                        weeksNumbers={weeksNumbers}
                    />
                    <Calendar week={currentWeek} />
                </>
            )}
        </Container>
    );
};