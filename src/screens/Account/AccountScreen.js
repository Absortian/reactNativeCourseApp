import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from "./UserGuestScreen";
import { UserLoggedScreen } from "./UserLoggedScreen";

export function AccountScreen(){

    const [hasLogged, setHasLogged] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user){
                setHasLogged(true);
            }else{
                setHasLogged(false);
            }
        });
    }, [hasLogged]);

    if(hasLogged){
        return <UserLoggedScreen />
    }else{
        return <UserGuestScreen />
    }
}