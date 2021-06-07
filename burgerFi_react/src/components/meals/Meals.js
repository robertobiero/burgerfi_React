import { Fragment } from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';

const Meals = () => {

    return (
        <Fragment>
            <MealsSummary />
        
                <AvailableMeals />
        </Fragment>
        
        
        )

};

export default Meals;