import React from "react";
import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { View, FlatList, Text } from 'react-native';

import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

import { Appointment } from "../../components/Appointment";

import { styles } from "./styles";

import { } from "react-native";


export function Home() {
    const [category, setCategory] = useState('');
    const navigation = useNavigation();
    const appointments = [
        {
            id: '1',

            guild: {
                id: '1',
                name: 'Lendário',
                icon: null,
                owner: true
            },

            category: '1',
            date: '22/06 às 20:40h',
            descripiton: 'É hoje que vamos chegar ao challenger sem perder um partida da md10'
        },
        {
            id: '2',

            guild: {
                id: '1',
                name: 'Lendário',
                icon: null,
                owner: true
            },

            category: '1',
            date: '22/06 às 20:40h',
            descripiton: 'É hoje que vamos chegar ao challenger sem perder um partida da md10'
        }

    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails')
    }
    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    return (

        <Background >
            <View style={styles.header}>

                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />


            </View>



            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <View style={styles.content}>
                <ListHeader
                    title='Partidas agendadas'
                    subtitle='Total 6'
                />
                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment
                            data={item}
                            onPress={handleAppointmentDetails}

                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}

                />
            </View>

        </Background>
    );
}