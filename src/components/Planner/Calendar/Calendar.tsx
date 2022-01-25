import React from 'react';
import { Week } from '../../../utils/types';
import { Container, Table, SundayColumn, WorkoutRow, PrintCell } from './Calendar.styles';
import { CalendarCarbCell } from './CalendarCarbCell';
import { CalendarMealCell } from './CalendarMealCell';
import { CalendarWorkoutCell } from './CalendarWorkoutCell';

interface CalendarProps {
    week: Week;
}

export const Calendar: React.FC<CalendarProps> = ({ week }) => {
    const {monday, tuesday, wednesday, thursday, friday, saturday, sunday} = week.plan;

    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th />
                        <th>Day {monday.day}</th>
                        <th>Day {tuesday.day}</th>
                        <th>Day {wednesday.day}</th>
                        <th>Day {thursday.day}</th>
                        <th>Day {friday.day}</th>
                        <th>Day {saturday.day}</th>
                        <th>Day {sunday.day}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>6:00AM</td>
                        <CalendarMealCell meal={monday.breakfast} />
                        <CalendarMealCell meal={tuesday.breakfast} />
                        <CalendarMealCell meal={wednesday.breakfast} />
                        <CalendarMealCell meal={thursday.breakfast} />
                        <CalendarMealCell meal={friday.breakfast} />
                        <CalendarMealCell meal={saturday.breakfast} />
                        <td>{/* sunday */}</td>
                    </tr>
                    <tr>
                        <td>9:00AM</td>
                        <CalendarMealCell meal={monday.lunch} />
                        <CalendarMealCell meal={tuesday.lunch} />
                        <CalendarMealCell meal={wednesday.lunch} />
                        <CalendarMealCell meal={thursday.lunch} />
                        <CalendarMealCell meal={friday.lunch} />
                        <CalendarMealCell meal={saturday.lunch} />
                        <td>{/* sunday */}</td>
                    </tr>
                    <tr>
                        <td>12:00PM</td>
                        <CalendarMealCell meal={monday.dinner} />
                        <CalendarMealCell meal={tuesday.dinner} />
                        <CalendarMealCell meal={wednesday.dinner} />
                        <CalendarMealCell meal={thursday.dinner} />
                        <CalendarMealCell meal={friday.dinner} />
                        <CalendarMealCell meal={saturday.dinner} />
                        <td>{/* sunday */}</td>
                    </tr>
                    <tr>
                        <td>3:00PM</td>
                        <CalendarMealCell meal={monday.mealAfterDinner} />
                        <CalendarMealCell meal={tuesday.mealAfterDinner} />
                        <CalendarMealCell meal={wednesday.mealAfterDinner} />
                        <CalendarMealCell meal={thursday.mealAfterDinner} />
                        <CalendarMealCell meal={friday.mealAfterDinner} />
                        <CalendarMealCell meal={saturday.mealAfterDinner} />
                        <td>{/* sunday */}</td>
                    </tr>
                    <tr>
                        <td>6:00PM</td>
                        <CalendarMealCell meal={monday.supper} />
                        <CalendarMealCell meal={tuesday.supper} />
                        <CalendarMealCell meal={wednesday.supper} />
                        <CalendarMealCell meal={thursday.supper} />
                        <CalendarMealCell meal={friday.supper} />
                        <CalendarMealCell meal={saturday.supper} />
                        <td>{/* sunday */}</td>
                    </tr>
                    <tr>
                        <td />
                        <CalendarCarbCell carb={monday.carb} />
                        <CalendarCarbCell carb={tuesday.carb} />
                        <CalendarCarbCell carb={wednesday.carb} />
                        <CalendarCarbCell carb={thursday.carb} />
                        <CalendarCarbCell carb={friday.carb} />
                        <CalendarCarbCell carb={saturday.carb} />
                        <SundayColumn>
                            <img src='./images/circle.svg' alt='circle icon' />
                            <span>Guilt-free day</span>
                        </SundayColumn>
                    </tr>
                    <WorkoutRow>
                        <td>Workout</td>
                        <CalendarWorkoutCell isWorkout={monday.isWorkout} />
                        <CalendarWorkoutCell isWorkout={tuesday.isWorkout} />
                        <CalendarWorkoutCell isWorkout={wednesday.isWorkout} />
                        <CalendarWorkoutCell isWorkout={thursday.isWorkout} />
                        <CalendarWorkoutCell isWorkout={friday.isWorkout} />
                        <CalendarWorkoutCell isWorkout={saturday.isWorkout} />
                        <PrintCell>
                            <img src='./images/print.svg' alt='print icon' />
                            <span>Print</span>
                        </PrintCell>
                    </WorkoutRow>
                </tbody>
            </Table>
        </Container>
    );
};