
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card } from "@material-ui/core";
import MealItem from './MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const useStyles = makeStyles({
    root: {
   
        minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
       
    },
    card: {
        maxWidth: "750%",
        minHeight: "40vh",
        minWidth: "80vh",
        
      
    }
});

const AvailableMeals = () => {

    const classes = useStyles();

    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (

        <Grid
            className={classes.root}
            spacing={0}
            alignItems="center"
   
        >
            <Card className={classes.card}>
                {mealsList}
            </Card>
        </Grid>
    );
       
       



};
export default AvailableMeals