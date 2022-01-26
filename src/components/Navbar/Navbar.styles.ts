import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.navbarBorder};
    display: flex;
    justify-content: center;
    width: 100vw;
`;

export const TabsWrapper = styled.div`
    margin: 1.5rem;
`;

export const Text = styled.span`
    color: ${colors.navbarText};
    cursor: pointer;
    letter-spacing: .5px;
    padding: 0 1.5rem .5rem 1.5rem;
    position: relative;
    text-transform: uppercase;
    transition: color .3s ease-out;

    :hover {
        color: ${colors.orange};
    }

    ::after {
        content: '';
        border-bottom: 3px solid ${colors.orangeAfter};
        border-radius: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0 auto;
        opacity: 0;
        right: 0;
        transition: opacity .3s, width .3s, transform .3s;
        width: 20%;
    }

    :hover::after {
        opacity: 1;
	    transform: translate3d(0);
        width: 40%;
    }
`;

export const UserWrapper = styled.div`
    align-items: center;
    display: flex;

    & span {
        color: ${colors.navbarText};
    }
`;

export const Icon = styled.img`
    margin-right: .5rem;
`;

export const VerticalLine = styled.div`
    border-radius: 5px;
	border-right: 2px solid ${colors.verticalGrey};
`;