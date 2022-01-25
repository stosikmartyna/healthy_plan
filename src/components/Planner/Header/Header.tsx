import React from 'react';
import { ProteinOptions } from '../../../utils/types';
import { ArrowIcon, Button, Container, Icon, IconsWrapper, ProteinsWrapper, SliderWrapper, Stepper, StepperWrapper } from './Header.styles';

interface HeaderProps {
    weekNumber: number;
    weeksNumbers: number[];
    proteinOptions: ProteinOptions;
    goToNextWeek: () => void;
    goToPreviousWeek: () => void;
}

export const Header: React.FC<HeaderProps> = ({ weekNumber, weeksNumbers, proteinOptions, goToNextWeek, goToPreviousWeek }) => {
    const isPreviousWeekButtonDisabled = weekNumber === Math.min(...weeksNumbers);
    const isNextWeekButtonDisabled = weekNumber === Math.max(...weeksNumbers);

    return (
        <Container>
            <StepperWrapper>
                <p>Your 12 week progress</p>
                <Stepper />
            </StepperWrapper>
            <SliderWrapper>
                <Button onClick={goToPreviousWeek} disabled={isPreviousWeekButtonDisabled}>
                    <ArrowIcon src='/images/arrow_left.svg' alt='arrow left icon' />
                </Button>
                <p>Week {weekNumber}</p>
                <Button onClick={goToNextWeek} disabled={isNextWeekButtonDisabled}>
                    <ArrowIcon src='/images/arrow_right.svg' alt='arrow right icon' />
                </Button>
            </SliderWrapper>
            <ProteinsWrapper>
                <p>Select your protein options</p>
                <IconsWrapper>
                    <Icon src='/images/vege.svg' alt='vege icon' isChecked={proteinOptions.vege} />
                    <Icon src='/images/dairy.svg' alt='daity icon' isChecked={proteinOptions.dairy} />
                    <Icon src='/images/meat.svg' alt='meat icon' isChecked={proteinOptions.meat} />
                    <Icon src='/images/fish.svg' alt='fish icon' isChecked={proteinOptions.fish} />
                    <Icon src='/images/poultry.svg' alt='polutry icon' isChecked={proteinOptions.polutry} />
                </IconsWrapper>
            </ProteinsWrapper>
        </Container>
    );
};