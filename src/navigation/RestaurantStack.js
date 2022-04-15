import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";
import { AddRestaurantScreen } from "../screens/Restaurants/AddRestaurantScreen";
import { StacksConfig } from '../utils';

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={StacksConfig.restaurant.screens.restaurants.tab} component={RestaurantsScreen} options={{title: StacksConfig.restaurant.screens.restaurants.title}} />
            <Stack.Screen name={StacksConfig.restaurant.screens.addRestaurant.tab} component={AddRestaurantScreen} options={{title: StacksConfig.restaurant.screens.addRestaurant.title}} />
        </Stack.Navigator>
    );
}