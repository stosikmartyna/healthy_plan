import React from 'react';
import { Header } from './Header/Header';
import { Calendar } from './Calendar/Calendar';
import { Container } from './Planner.styles';
import { HealthyPlan } from '../../utils/types';

interface PlannerProps {
    healthyPlan: HealthyPlan;
}

export const Planner: React.FC<PlannerProps> = ({ healthyPlan }) => {
    const {week, proteinOptions} = healthyPlan;
    return (
        <Container>
            <Header weekNumber={week.number} proteinOptions={proteinOptions} />
            <Calendar week={healthyPlan.week} />
        </Container>
    );
};