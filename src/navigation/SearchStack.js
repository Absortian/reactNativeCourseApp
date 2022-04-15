import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens/SearchScreen";
import { StacksConfig } from '../utils';

const Stack = createNativeStackNavigator();

export function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={StacksConfig.search.tab} component={SearchScreen} options={{title: StacksConfig.search.title}} />
        </Stack.Navigator>
    );
}