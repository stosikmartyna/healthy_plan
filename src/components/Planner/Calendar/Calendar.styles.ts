import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const Container = styled.div``;

export const Table = styled.table`
    background-color: ${colors.white};
    border-collapse: collapse;
    margin: 0 auto;
    width: 90%;

    th {
        border-right: 2px solid ${colors.calendarBorder};
        border-bottom: 2px solid ${colors.calendarBorder};
        border-left: 2px solid transparent;
        border-top: 2px solid transparent;
        color: ${colors.green};
        font-size: 24px;
        font-weight: 200;
        padding: .75rem 0;
        text-transform: uppercase;

        :hover {
            color: #FF801A;
            border: 2px solid ${colors.orange};
        }
    }

    th:nth-child(1) {
        background-color: ${colors.calendarBorder};
        border: none;

        :hover {
            border: none;
        }
    }

    th:last-child {
        border-right: 2px solid transparent;

        :hover {
            border: 2px solid ${colors.orange};
        }
    }

    td {
        border-right: 2px solid ${colors.calendarBorder};
        border-bottom: 2px solid ${colors.calendarBorder};
        color: ${colors.textGrey};
        font-size: 13px;
        padding: 0 .3rem;
        max-width: 126px;
    }

    td > span {
        margin-top: 10px;
        margin-left: 15px;
    }

    td > span, img {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    td:first-child {
        background-color: ${colors.calendarBorder};
        border-right: none;
        border-bottom: 2px solid ${colors.tdBorderBottomGrey};
        font-size: 13px;
        padding: 2rem 0;
        max-width: 85px;
        text-align: center;
    }

    td:last-child {
        border-right: none;
        border-bottom: none;
    }
`;

export const SundayColumn = styled.td`
    align-items: center;
    display: flex;
    /* position: absolute; */
    transform: rotate(-90deg);

    img {
        width: 32px;
    }

    span {
        font-size: 35px;
    }
`;

export const PrintCell = styled.td`
    align-items: center;
    display: flex;

    img {
        margin-right: 5px;
    }
`;

export const WorkoutRow = styled.tr`
    background-color: ${colors.calendarBorder};

`;