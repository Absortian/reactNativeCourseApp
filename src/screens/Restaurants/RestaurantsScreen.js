// Dependencias
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
// Configs
import { StacksConfig } from '../../utils';

export function RestaurantsScreen(props){

    const { navigation } = props;

    console.log(navigation);

    const goToAddRestaurant = () => {
        // Primero le pasamos el tab del stack, luego le decimos qué screen (tab) queremos que se muestre de dentro de ese stack
        navigation.navigate(StacksConfig.restaurant.tab, { screen: StacksConfig.restaurant.screens.addRestaurant.tab });
    }

    return(
        <View>
            <Text>RestaurantsScreen</Text>
            <Button title={'Crear Restaurante'} onPress={goToAddRestaurant}/>
        </View>
    );
}