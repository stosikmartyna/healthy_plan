import React from 'react';
import { ProteinOptions } from '../../../utils/types';
import { ArrowIcon, Button, Container, Icon, IconsWrapper, ProteinsWrapper, SliderWrapper, Stepper, StepperWrapper } from './Header.styles';

interface HeaderProps {
    weekNumber: number;
    proteinOptions: ProteinOptions;
}

export const Header: React.FC<HeaderProps> = ({ weekNumber, proteinOptions }) => {
    return (
        <Container>
            <StepperWrapper>
                <p>Your 12 week progress</p>
                <Stepper />
            </StepperWrapper>
            <SliderWrapper>
                <Button>
                    <ArrowIcon src='/images/arrow_left.svg' alt='arrow left icon' />
                </Button>
                <p>Week {weekNumber}</p>
                <Button>
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