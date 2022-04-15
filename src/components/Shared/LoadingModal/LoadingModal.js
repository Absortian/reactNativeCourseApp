import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Overlay, Text } from 'react-native-elements';
import { Styles } from './LoadingModal.styles';

export function LoadingModal(props){

    const { show, text } = props;

    return(
        <Overlay
            isVisible={show}
            overlayStyle={Styles.overlay}
        >
            <View style={Styles.view}>
                <ActivityIndicator size="large" color={"#00a680"} />
                {text && <Text style={Styles.text}>{text}</Text>}
            </View>
        </Overlay>
    );
}

LoadingModal.defaultProps = {
    show: false
};