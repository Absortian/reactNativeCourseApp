import { React, useState } from 'react';
import { View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { Styles } from './RegisterForm.styles';
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from "@react-navigation/native";
import { StacksConfig } from "../../../utils";
import { initialValues, validationSchema } from './RegisterForm.data';
import Toast from 'react-native-toast-message';

export function RegisterForm(){

    const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async formValue => {
            try {
                const auth = getAuth();
                await createUserWithEmailAndPassword(auth, formValue.email, formValue.password);
                navigation.navigate(StacksConfig.account.tab, { screen: StacksConfig.account.screens.accountBase.tab });
            } catch (error) {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: 'Error al crear el usuario.'
                });
                //console.log(error);
            }
        }
    });

    return(
        <View style={Styles.content}>
            <Input
                errorMessage={formik.errors.email}
                onChangeText={text => formik.setFieldValue("email",text)}
                placeholder='Correo electrónico'
                containerStyle={Styles.input}
                leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
            />
            <Input
                errorMessage={formik.errors.password}
                onChangeText={text => formik.setFieldValue("password",text)}
                placeholder='Contraseña'
                containerStyle={Styles.input}
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                rightIcon={{ type: 'font-awesome', name: 'eye', onPress: () => setShowPassword(!showPassword) }}
                secureTextEntry={!showPassword}
            />
            <Input
                errorMessage={formik.errors.passwordConfirmation}
                onChangeText={text => formik.setFieldValue("passwordConfirmation",text)} placeholder='Confirmar contraseña'
                containerStyle={Styles.input}
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                rightIcon={{ type: 'font-awesome', name: 'eye', onPress: () => setShowPassword(!showPassword) }}
                secureTextEntry={!showPassword}
            />
            <Button
                title='Registrarse'
                containerStyle={Styles.btnContainer}
                buttonStyle={Styles.btn}
                onPress={() => formik.handleSubmit()}
            />
        </View>
    );
}