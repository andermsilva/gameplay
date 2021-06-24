import React from 'react';

import { View, Text, Image, FlatList } from 'react-native';

import { styles } from './styles'

import IllustrationImg from '../../assest/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { Guild, GuildPrpps } from '../../components/Guild';

type Props = {
    handleGuildSelect: (guild: GuildPrpps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
    const guilds = [
        {
            id: '1',
            nome: 'Lendarios',
            icon: 'Image.png',
            owner: true
        },
        {
            id: '2',
            nome: 'Fortinaite',
            icon: 'Image.png',
            owner: true
        },
        {
            id: '3',
            nome: 'Lendarios',
            icon: 'Image.png',
            owner: true
        },
        {
            id: '4',
            nome: 'Fortinaite',
            icon: 'Image.png',
            owner: true
        },
        {
            id: '5',
            nome: 'Lendarios',
            icon: 'Image.png',
            owner: true
        },
        {
            id: '6',
            nome: 'Fortinaite',
            icon: 'Image.png',
            owner: true
        },
        {
            id: '7',
            nome: 'Lendarios',
            icon: 'Image.png',
            owner: true
        },
        {
            id: '8',
            nome: 'Fortinaite',
            icon: 'Image.png',
            owner: true
        }
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        onPress={() => handleGuildSelect(item)}
                        data={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                ListHeaderComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}

                style={styles.guilds}
            />
        </View>

    );
}