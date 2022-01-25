import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HealthyPlan } from '../../utils/types';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { Planner } from '../Planner/Planner';
import { Container } from './MainView.styles';

export const MainView: React.FC = () => {
    const [healthyPlan, setHealthyPlan] = useState<HealthyPlan>();

    const getHealthyPlan = async () => {
        try {
            const {data} = await axios.get<HealthyPlan>('./data.json');
            setHealthyPlan(data);
        }
        catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        getHealthyPlan();
    }, []);
    
    return (
        <Container>
            {healthyPlan && (
                <>
                    <Navbar user={healthyPlan.user} />
                    <Planner healthyPlan={healthyPlan} />
                </>
            )}    
            <Footer />
        </Container>
    );
};