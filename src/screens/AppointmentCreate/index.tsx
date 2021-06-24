import React, { useState } from "react";

import { View, Platform, Text, KeyboardAvoidingView, ScrollView } from 'react-native';

import { Feather } from "@expo/vector-icons";
import { RectButton } from 'react-native-gesture-handler';

import { Guilds } from "../Guilds";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { Textarea } from "../../components/Textearea";

import { Button } from "../../components/Button";
import { SmallInput } from "../../components/SmallInut";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { ModalView } from "../../components/ModalView";
import { Guild, GuildPrpps } from "../../components/Guild";




export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuid] = useState<GuildPrpps>({} as GuildPrpps)

    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }
    function handleCloseGuilds() {
        setOpenGuildsModal(false);
    }
    function handleOpenGuildSelect(guildSelect: GuildPrpps) {
        setGuid(guildSelect);

        setOpenGuildsModal(false);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}>

            <ScrollView>
                <Header
                    title='Agendar Partida'

                />

                <Text
                    style={[styles.label,
                    { marginLeft: 24, marginTop: 36, marginBottom: 18 }
                    ]}
                >
                    Cateoria
                </Text>

                <CategorySelect
                    hasCheckBox
                    setCategory={setCategory}
                    categorySelected={category}
                />
                <View style={styles.form}>
                    <RectButton onPress={handleOpenGuilds}>
                        <View style={styles.select}>
                            {
                                guild.icon ?
                                    <GuildIcon />
                                    :
                                    <View style={styles.image} />

                            }
                            <View style={styles.selectBody}>
                                <Text style={styles.label}>
                                    {
                                        guild.nome ? guild.nome : '  selecione um servidor'
                                    }

                                </Text>
                            </View>
                            <Feather
                                name='chevron-right'
                                color={theme.colors.heading}
                                size={18}
                            />

                        </View>
                    </RectButton>


                    <View style={styles.field}>
                        <View>
                            <Text style={styles.label}>
                                Dia e mês

                            </Text>

                            <View style={styles.colunm}>

                                <SmallInput maxLength={2} />

                                <Text style={styles.divider}>/</Text>

                                <SmallInput maxLength={2} />

                            </View>
                        </View>
                        <View>
                            <Text style={styles.label}>
                                Hora e minuto

                            </Text>

                            <View style={styles.colunm}>

                                <SmallInput maxLength={2} />

                                <Text style={styles.divider}>:</Text>

                                <SmallInput maxLength={2} />

                            </View>
                        </View>
                    </View>

                    <View style={[styles.field, { marginBottom: 12 }]}>
                        <Text style={styles.label}>Descrição</Text>

                        <Text style={styles.caracteresLimit}>Max 100 caracteres </Text>
                    </View>
                    <Textarea
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}

                    />

                    <View style={styles.footer}>
                        <Button title='Agendar' />
                    </View>
                </View>
            </ScrollView>

            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                <Guilds handleGuildSelect={handleOpenGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    );
}
