import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    width: 90%;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        color: ${colors.textGrey};
        font-size: 28px;
        font-weight: 400;
        margin: 0;
    }

    p {
        color: ${colors.textGrey};
        font-family: Arial, Helvetica, sans-serif;
    }
`

export const VerticalLine = styled.div`
    border-radius: 5px;
	border-right: 2px solid ${colors.verticalGrey};
	height: 100%;
`

export const ButtonsWrapper = styled.div`
    display: flex;
`

export const Button = styled.button`
    align-items: center;
    background-color: ${colors.backgroundGrey};
    border: 1px solid ${colors.borderGrey};
    border-radius: 4px;
    color: ${colors.borderGrey};
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    margin-right: 1rem;
    padding: .5rem 1rem;
    transition: filter .2s ease-in-out;
    
    :hover {
        filter: drop-shadow(0 0 0.2rem #e0e0e0);
    }

    span {
        margin: 0 .5rem;
    }
`

export const ArrowIcon = styled.img`
    width: 6px;
`;

export const SystemIcon = styled.img``