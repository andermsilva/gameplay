import React, { useState, useEffect } from "react";

import { View, ImageBackground, Text, FlatList, Alert } from 'react-native';
import { Fontisto } from "@expo/vector-icons";

import BannerImg from '../../assest/banner.png';

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { MemberProps, Members } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

import { Load } from "../../components/Load";


import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from "../../global/styles/theme";
import { styles } from './styles';
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../components/Appointment";
import { api } from "../../services/api";



type Params = {
    guildSelected: AppointmentProps
}

type GuildWidGet = {
    id: string;
    instant_invite: string;
    members: MemberProps[];
    presence_count: number;
}

export function AppointmentDetails() {

    const [widget, setWidget] = useState<GuildWidGet>({} as GuildWidGet);

    const [loading, setLoading] = useState(true);

    async function fetchGuilWidget() {

        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
            setLoading(false);
        } catch (error) {
            Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?')
        } finally {
            setLoading(false);
        }

    }

    const route = useRoute();
    const { guildSelected } = route.params as Params;
    /* 
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
     */

    useEffect(() => {
        fetchGuilWidget();
    }, []);

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
                        {guildSelected.guild.name}
                    </Text>
                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>
            {
                loading ? <Load /> :
                    <>

                        <ListHeader
                            title='Jogadores'
                            subtitle={`Total ${widget.members.length}`}
                        />

                        <FlatList
                            data={widget.members}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Members data={item}

                                />

                            )}

                            ItemSeparatorComponent={() => <ListDivider isCentered />}
                            style={styles.members}
                        />
                    </>
            }
            <View style={styles.footer}>
                <ButtonIcon title='Entrar na partida' />

            </View>

        </Background>
    );
}
