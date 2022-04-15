import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RankingScreen } from "../screens/RankingScreen";
import { StacksConfig } from '../utils';

const Stack = createNativeStackNavigator();

export function RankingStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={StacksConfig.ranking.tab} component={RankingScreen} options={{title: StacksConfig.ranking.title}} />
        </Stack.Navigator>
    );
}