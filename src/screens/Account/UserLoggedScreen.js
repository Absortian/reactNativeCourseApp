import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { getAuth } from 'firebase/auth';
export function UserLoggedScreen(){


    const logoutFunction = () => {
        const auth = getAuth();
        auth.signOut();
    }

    return(
        <View>
            <Text>UserLoggedScreen</Text>
            <Button title="Logout" onPress={logoutFunction}/>
        </View>
    );
}