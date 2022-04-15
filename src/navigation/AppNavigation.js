import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { ScreenConfig } from '../utils';
import { RestaurantsScreen } from '../screens/Restaurants/RestaurantsScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { RankingScreen } from '../screens/RankingScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { AccountScreen } from '../screens/AccountScreen';

import { AddRestaurant } from "../screens/Restaurants/AddRestaurantScreen";

const Tab = createBottomTabNavigator();

export function AppNavigation(){
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarActiveTintColor: '#00A680',
            tabBarInactiveTintColor: '#646464',
            tabBarIcon: ({color, size}) => screenOptions(route, color, size)
        })}>
            <Tab.Screen name={ScreenConfig.restaurant.tab} component={RestaurantsScreen} options={{
                title: ScreenConfig.restaurant.title
            }} />
            <Tab.Screen name={ScreenConfig.favorites.tab} component={FavoritesScreen} options={{
                title: ScreenConfig.favorites.title
            }}/>
            <Tab.Screen name={ScreenConfig.ranking.tab} component={RankingScreen} options={{
                title: ScreenConfig.ranking.title
            }}/>
            <Tab.Screen name={ScreenConfig.search.tab} component={SearchScreen} options={{
                title: ScreenConfig.search.title
            }}/>
            <Tab.Screen name={ScreenConfig.account.tab} component={AccountScreen} options={{
                title: ScreenConfig.account.title
            }}/>
        </Tab.Navigator>
    );
}

function screenOptions(route, color, size){
    let iconName;
    switch(route.name){
        case ScreenConfig.restaurant.tab:
            iconName = 'compass-outline';
            break;
        case ScreenConfig.favorites.tab:
            iconName = 'heart-outline';
            break;
        case ScreenConfig.ranking.tab:
            iconName = 'star-outline';
            break;
        case ScreenConfig.search.tab:
            iconName = 'magnify';
            break;
        case ScreenConfig.account.tab:
            iconName = 'account';
            break;
    }
    return (
        <Icon type='material-community' name={iconName} color={color} size={size} />
    );
}