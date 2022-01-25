import React from 'react';
import {MaterialIcons} from "@expo/vector-icons";

type PropsType = {
    navigation: any
    tintColor: string | undefined
    pressColor: string | undefined
    pressOpacity: number | undefined
}

const HeaderIcon = ({navigation, tintColor, pressOpacity}: PropsType) => {

    const wrapper = () => {
        navigation()
    }

    return (<MaterialIcons name="drag-handle"
                           size={34}
                           color={tintColor}
                           style={{opacity: pressOpacity}}
                           onPress={wrapper}/>
    );
};

export {
    HeaderIcon
}