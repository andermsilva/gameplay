import React from 'react';

import { View, FlatList } from 'react-native';

import { styles } from './styles'

import { ListDivider } from '../../components/ListDivider';
import { Guild, GuildProps } from '../../components/Guild';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
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