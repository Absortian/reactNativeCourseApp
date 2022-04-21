import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Image, Button } from "react-native-elements"
import { Styles } from './LoginScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { StacksConfig } from '../../../utils';

export function LoginScreen(){

    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate(StacksConfig.account.tab, { screen: StacksConfig.account.screens.register.tab });
    }

    return(
        <ScrollView>
            <Image source={require("../../../../assets/img/conejo.png")} style={Styles.image} placeholderStyle={{ backgroundColor: 'transparent' }} />
            <Text>Estamos en el login</Text>
            <Button onPress={goToRegister} title="Registrarse" />
        </ScrollView>
    );
}