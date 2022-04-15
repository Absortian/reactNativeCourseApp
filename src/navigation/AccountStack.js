import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/AccountScreen";
import { StacksConfig } from '../utils';

const Stack = createNativeStackNavigator();

export function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={StacksConfig.account.tab} component={AccountScreen} options={{title: StacksConfig.account.title}} />
        </Stack.Navigator>
    );
}