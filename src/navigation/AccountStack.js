import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/Account/AccountScreen";
import { LoginScreen } from "../screens/Account/LoginScreen";
import { RegisterScreen } from "../screens/Account/RegisterScreen";
import { StacksConfig } from '../utils';

const Stack = createNativeStackNavigator();

export function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={StacksConfig.account.screens.accountBase.tab} component={AccountScreen} options={{title: StacksConfig.account.screens.accountBase.title}} />
            <Stack.Screen name={StacksConfig.account.screens.login.tab} component={LoginScreen} options={{title: StacksConfig.account.screens.login.title}} />
            <Stack.Screen name={StacksConfig.account.screens.register.tab} component={RegisterScreen} options={{title: StacksConfig.account.screens.register.title}} />
        </Stack.Navigator>
    );
}