import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const Container = styled.div``;

export const Table = styled.table`
    background-color: ${colors.white};
    border-collapse: separate;
    border-spacing: 0;
    margin: 0 auto;
    width: 90%;

    th {
        border: 2px solid ${colors.calendarBorder};
        border-left: none;
        border-top: none;

        :hover {
            border: 2px solid ${colors.orange};
            color: ${colors.orange};
        }
    }

    th:nth-child(1) {
        background-color: ${colors.calendarBorder};
        border: 2px solid transparent;
    }

    th:last-child {
        border: 2px solid transparent;

        :hover {
            border: 2px solid ${colors.orange};
            color: ${colors.orange};
        }
    }

    tbody {
        position: relative;
    }
`;

export const DayCell = styled.th`
    color: ${colors.green};
    font-size: 24px;
    font-weight: 200;
    padding: .75rem 0;
    text-transform: uppercase;
    width: min-content;
`;

// MEAL TIME CELL
interface MealTimeCellProps {
    isLast?: boolean;
}

export const MealTimeCell = styled.td<MealTimeCellProps>`
    background-color: ${colors.calendarBorder};
    border-bottom: ${({isLast}) => isLast ? 'none' : `2px solid ${colors.tdBorderBottomGrey}`};
    color: ${colors.textGrey};
    text-align: center;
`;

// MEAL ROW
export const MealRow = styled.tr``;

export const MealCell = styled.td`
    border-right: 2px solid ${colors.calendarBorder};
    border-bottom: 2px solid ${colors.calendarBorder};
    color: ${colors.textGrey};
    height: 90px;
    padding: .5rem .5rem 0 .5rem;
    position: relative;
`;

export const MealWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const Text = styled.span`
    width: 80%;
`;

export const MealImg = styled.img`
    margin: 0 auto;
`;

export const RoundCheckIcon = styled.img`
    margin: .4rem;
    position: absolute;
    right: 0;
    top: 0;
    margin: .5rem .75rem 0 0;
    width: 20px;
`;

// CARB ROW
export const CarbRow = styled.tr`
    background-color: ${colors.calendarBorder};
    color: ${colors.textGrey};
`;

export const CarbCell = styled.td`
    border-right: 1px solid ${colors.tdBorderBottomGrey};
    padding: .8rem 0;
    text-align: center;
`;

export const SundayColumn = styled.td`
    align-items: center;
    display: flex;
    position: absolute;
    justify-content: center;
    right: -110px;
    text-transform: uppercase;
    top: 200px;
    transform: rotate(-90deg);
    width: max-content;

    img {
        margin-right: 30px;
        width: 35px;
    }

    span {
        color: ${colors.tdBorderBottomGrey};
        font-size: 35px;
    }
`;

//WORKOUT ROW
export const WorkoutRow = styled.tr`
    background-color: ${colors.calendarBorder};
    
    td:first-child {
        color: ${colors.textGrey};
        border-top: 2px solid ${colors.tdBorderBottomGrey};
        font-size: 13px;
        padding: 0 2rem;
        text-align: center;
    }
`;

export const WorkoutCell = styled.td`
    border-right: 1px solid ${colors.tdBorderBottomGrey};
    border-top: 2px solid ${colors.tdBorderBottomGrey};
    padding: .5rem 0;
`;

export const WorkoutCellImgWrapper = styled.div`
    align-items: center;
    display: flex;
    margin: 0 auto;
    width: min-content;

    img:first-child {
        margin-right: 10px;
    }
`;

export const GreyWorkoutIcon = styled.div`
    margin: 0 auto;
    width: min-content;
`;

//PRINT CELL
export const PrintCell = styled.td`
    align-items: center;
    border-top: 2px solid ${colors.tdBorderBottomGrey};
    color: ${colors.textGrey};
    display: flex;
`;

export const PrintWrapper = styled.div`
    align-items: center;
    display: flex;
    margin: 0 auto;
    padding: .5rem 1.5rem;
    width: min-content;

    img {
        margin-right: 10px;
    }
`;