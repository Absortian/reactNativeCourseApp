import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Image, Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { Styles } from './RegisterScreen.styles';
import { RegisterForm } from '../../../components/Auth';

export function RegisterScreen(){
    return(
        <ScrollView>
            <Image source={require("../../../../assets/img/conejo.png")} style={Styles.image} placeholderStyle={{ backgroundColor: 'transparent' }} />
            <KeyboardAwareScrollView style={Styles.content}>
                <RegisterForm />
            </KeyboardAwareScrollView>
        </ScrollView>
    );
}