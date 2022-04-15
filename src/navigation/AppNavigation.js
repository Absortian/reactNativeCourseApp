// Dependencias
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
// Stacks
import { RestaurantStack } from './RestaurantStack';
import { FavoritesStack } from './FavoritesStack';
import { RankingStack } from './RankingStack';
import { SearchStack } from './SearchStack';
import { AccountStack } from './AccountStack';
// Configs
import { StacksConfig } from '../utils';
// Componentes

const Tab = createBottomTabNavigator();

export function AppNavigation(){
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarActiveTintColor: '#00A680',
            tabBarInactiveTintColor: '#646464',
            tabBarIcon: ({color, size}) => screenOptions(route, color, size)
        })}>
            <Tab.Screen name={StacksConfig.restaurant.tab} component={RestaurantStack} options={{
                title: StacksConfig.restaurant.title
            }} />
            <Tab.Screen name={StacksConfig.favorites.tab} component={FavoritesStack} options={{
                title: StacksConfig.favorites.title
            }}/>
            <Tab.Screen name={StacksConfig.ranking.tab} component={RankingStack} options={{
                title: StacksConfig.ranking.title
            }}/>
            <Tab.Screen name={StacksConfig.search.tab} component={SearchStack} options={{
                title: StacksConfig.search.title
            }}/>
            <Tab.Screen name={StacksConfig.account.tab} component={AccountStack} options={{
                title: StacksConfig.account.title
            }}/>
        </Tab.Navigator>
    );
}

function screenOptions(route, color, size){
    let iconName;
    switch(route.name){
        case StacksConfig.restaurant.tab:
            iconName = 'compass-outline';
            break;
        case StacksConfig.favorites.tab:
            iconName = 'heart-outline';
            break;
        case StacksConfig.ranking.tab:
            iconName = 'star-outline';
            break;
        case StacksConfig.search.tab:
            iconName = 'magnify';
            break;
        case StacksConfig.account.tab:
            iconName = 'account';
            break;
    }
    return (
        <Icon type='material-community' name={iconName} color={color} size={size} />
    );
}