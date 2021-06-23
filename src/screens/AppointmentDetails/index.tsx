import React from "react";

import { View, ImageBackground, Text, FlatList } from 'react-native';
import { Fontisto } from "@expo/vector-icons";

import BannerImg from '../../assest/banner.png';

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Members } from "../../components/Appointment/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";


import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from "../../global/styles/theme";
import { styles } from './styles';


export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Andeson',
            avatar_url: 'https://github.com/andermsilva.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Anderson',
            avatar_url: 'https://github.com/andermsilva.png',
            status: 'offline'
        }
    ];
    return (
        <Background>
            <Header
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto
                            name='share'
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>

                    <Text style={styles.title} >
                        Lendário
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader
                title='Jogadores'
                subtitle='Total 3'
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Members data={item}

                    />

                )}

                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title='Entrar na partida' />

            </View>

        </Background>
    );
}
