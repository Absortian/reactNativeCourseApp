import React from 'react';
import { ScrollView } from 'react-native';
import { Image } from "react-native-elements"
import { Styles } from './LoginScreen.styles';
import { LoginForm } from '../../../components/Auth';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

export function LoginScreen(){

    return(
        <ScrollView>
            <Image source={require("../../../../assets/img/conejo.png")} style={Styles.image} placeholderStyle={{ backgroundColor: 'transparent' }} />
            <KeyboardAwareScrollView>
                <LoginForm />
            </KeyboardAwareScrollView>
        </ScrollView>
    );
}