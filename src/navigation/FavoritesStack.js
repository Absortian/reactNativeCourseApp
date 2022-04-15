import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { StacksConfig } from '../utils';

const Stack = createNativeStackNavigator();

export function FavoritesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={StacksConfig.favorites.tab} component={FavoritesScreen} options={{title: StacksConfig.favorites.title}} />
        </Stack.Navigator>
    );
}