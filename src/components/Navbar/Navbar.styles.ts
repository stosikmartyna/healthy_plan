import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.borderGrey};
    display: flex;
    justify-content: center;
    width: 100vw;
`;

export const TabsWrapper = styled.div`
    margin: 1.5rem;
`

export const Text = styled.span`
    color: ${colors.navbarText};
    letter-spacing: .5px;
    padding: 0 1.5rem .5rem 1.5rem;
    position: relative;
    text-transform: uppercase;

    :hover {
        color: ${colors.orange};

        ::after {
            content: '';
            border-bottom: 3px solid ${colors.orangeAfter};
            border-radius: 1px;
            position: absolute;
            bottom: 0;
            margin: 0 auto;
            left: 0;
            right: 0;
            width: 20%;
        }
    }
`

export const UserWrapper = styled.div`
    align-items: center;
    display: flex;

    & span {
        color: ${colors.navbarText};
    }
`

export const Icon = styled.img`
    margin-right: .5rem;
`;

export const VerticalLine = styled.div`
    border-radius: 5px;
	border-right: 2px solid ${colors.verticalGrey};
	height: 100%;
`