import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
// Styles
import { Styles } from './UserGuestScreen.styles';
// Configs
import { StacksConfig } from '../../../utils';

export function UserGuestScreen(){

    const navigation = useNavigation();

    const goToLogin = () => {

        navigation.navigate(StacksConfig.account.tab, { screen: StacksConfig.account.screens.login.tab });

    };

    return(
        <ScrollView centerContent={true} style={Styles.content}>
            <Image source={require("../../../../assets/img/conejo.png")} style={Styles.image} placeholderStyle={{ backgroundColor: 'transparent' }} />
            <Text style={Styles.title}>Consulta tu Perfil</Text>
            <Text style={Styles.description}>
                Para poder consultar tu perfil, debes iniciar sesión.
            </Text>
            <Button title={"Ver tu perfil"} onPress={goToLogin} buttonStyle={Styles.btnStyle} />
        </ScrollView>
    );
}