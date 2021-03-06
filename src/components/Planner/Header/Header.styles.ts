import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
    margin: 0 auto;
    width: 90%;
`;

export const StepperWrapper = styled.div`
    display: flex;
    flex-direction: column;

    p {
        color: ${colors.textGrey};
        font-size: 9px;
        margin: 0;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
`;

export const Stepper = styled.div`
    background-color: ${colors.green};
    height: 5px;
    width: 200px;
`;

export const SliderWrapper = styled.div`
    display: flex;

    p {
        color: ${colors.orange};
        font-size: 48px;
        margin: 0 2rem;
        text-align: center;
    }
`;

interface ButtonProps {
    disabled: boolean;
}

export const Button = styled.button<ButtonProps>`
    align-items: center;
    background-color: ${({disabled}) => disabled ? `${colors.calendarBorder}` : `${colors.backgroundGrey}`};
    border: 1px solid ${colors.borderGrey};
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    padding: 0 .6rem;
    transition: border-color .2s ease-in-out;

    :hover {
        border-color: ${colors.textGrey};
    }
`;

export const ArrowIcon = styled.img`
    width: 10px;
`;

export const ProteinsWrapper = styled.div`
    p {
        color: ${colors.textGrey};
        font-size: 9px;
        margin: 0;
        margin-bottom: .75rem;
        text-transform: uppercase;
    }
`;

export const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface IconProps {
    isChecked: boolean;
}

export const Icon = styled.img<IconProps>`
    background-image: ${({isChecked}) => !isChecked && `url('./images/slash.svg')`};
    margin-right: .75rem;
`;