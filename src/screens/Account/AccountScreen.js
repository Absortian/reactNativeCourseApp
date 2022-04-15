// Dependencias
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Screens
import { UserGuestScreen } from "./UserGuestScreen";
import { UserLoggedScreen } from "./UserLoggedScreen";
// Components
import { LoadingModal } from "../../components/Shared";

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


    if(hasLogged === null){
        return <LoadingModal show text={"Cargando..."}/>;
    }

    if(hasLogged){
        return <UserLoggedScreen />
    }else{
        return <UserGuestScreen />
    }
}