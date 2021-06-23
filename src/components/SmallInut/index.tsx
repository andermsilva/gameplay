import React, { useState } from "react";

import { View, ImageBackground, TextInput, TextInputProps } from 'react-native';

import { Feather } from "@expo/vector-icons";
import { RectButton } from 'react-native-gesture-handler';

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";



export function SmallInput({ ...rest }: TextInputProps) {

    return (
        <TextInput
            style={styles.container}
            keyboardType='numeric'
            {...rest}
        />
    );
}
