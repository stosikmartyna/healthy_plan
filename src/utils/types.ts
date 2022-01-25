export interface DailyMeal {
    name: string;
    isEaten: boolean;
    img: string;
}

interface DailyPlan {
    day: number;
    carb: 'low' | 'high';
    isWorkout: boolean;
    breakfast: DailyMeal;
    lunch: DailyMeal;
    dinner: DailyMeal;
    mealAfterDinner: DailyMeal;
    supper: DailyMeal;
}

export interface Week {
    number: number;
    plan: {
        monday: DailyPlan;
        tuesday: DailyPlan;
        wednesday: DailyPlan;
        thursday: DailyPlan;
        friday: DailyPlan;
        saturday: DailyPlan;
        sunday: {
            day: number;
        };
    };
}

export interface ProteinOptions {
    vege: boolean;
    dairy: boolean;
    meat: boolean;
    fish: boolean;
    polutry: boolean;
}

export interface HealthyPlan {
    user: {
        name: string;
        avatar: string;
    };
    proteinOptions: ProteinOptions;
    week: Week,
}