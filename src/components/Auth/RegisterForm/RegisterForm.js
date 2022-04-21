import { React } from 'react';
import { View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { Styles } from './RegisterForm.styles';
import { useFormik } from "formik";
import { initialValues } from './RegisterForm.data';

export function RegisterForm(){

    const formik = useFormik({
        initialValues: initialValues(),
        onSubmit: formValue => {
            console.log(formValue);
        }
    });

    return(
        <View style={Styles.content}>
            <Input onChangeText={text => formik.setFieldValue("email",text)} placeholder='Correo electrónico' containerStyle={Styles.input} leftIcon={{ type: 'font-awesome', name: 'envelope-o' }} />
            <Input onChangeText={text => formik.setFieldValue("password",text)} placeholder='Contraseña' containerStyle={Styles.input} leftIcon={{ type: 'font-awesome', name: 'key' }} secureTextEntry />
            <Input onChangeText={text => formik.setFieldValue("passwordConfirmation",text)} placeholder='Confirmar contraseña' containerStyle={Styles.input} leftIcon={{ type: 'font-awesome', name: 'key' }} secureTextEntry />
            <Button title='Registrarse' containerStyle={Styles.btnContainer} buttonStyle={Styles.btn} onPress={() => formik.handleSubmit()}/>
        </View>
    );
}