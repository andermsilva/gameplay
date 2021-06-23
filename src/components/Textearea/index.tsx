import React, { useState } from "react";

import { View, ImageBackground, TextInput, TextInputProps } from 'react-native';

import { Feather } from "@expo/vector-icons";
import { RectButton } from 'react-native-gesture-handler';

import { Background } from "../Background";
import { Header } from "../Header";
import { CategorySelect } from "../CategorySelect";
import { GuildIcon } from "../GuildIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";



export function Textarea({ ...rest }: TextInputProps) {

    return (
        <TextInput
            style={styles.container}

            {...rest}
        />
    );
}
