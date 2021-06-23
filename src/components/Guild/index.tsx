import React from "react";

import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native';

import { GuildIcon } from "../GuildIcon";

import { Feather } from "@expo/vector-icons";

import { styles } from './styles';
import { theme } from "../../global/styles/theme";


export type GuildPrpps = {
    id: string;
    nome: string;
    icon: string | null;
    owner: boolean;
}

type Props = TouchableOpacityProps & {
    data: GuildPrpps;
}

export function Guild({ data, ...rest }: Props) {
    return (

        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            {...rest}
        >
            <GuildIcon />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.nome}

                    </Text>
                    <Text style={styles.type}>
                        {data.owner ? 'Administrador' : 'Convidado'}

                    </Text>
                </View>
            </View>
            <Feather
                name='chevron-right'
                color={theme.colors.heading}
                size={24}
            />
        </TouchableOpacity>
    );
}