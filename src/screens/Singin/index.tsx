import React from 'react';

import { View, Text, Image, Alert } from 'react-native';

import { styles } from './styles'

import IllustrationImg from '../../assest/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';

import { useAuth } from '../../hooks/auth';

export function SingIn() {

    const { user, sinIng } = useAuth();

    async function handleSinIng() {

        try {

            await sinIng();


        } catch (error) {
            Alert.alert(error)
        }

    }

    return (
        <Background>

            <View style={styles.container}>
                <Image source={IllustrationImg} style={styles.image} resizeMode='stretch' />

                <View style={styles.content}>
                    <Text style={styles.title}>

                        Conecte-se {`\n`}
                        e organize suas {`\n`}
                        jogatinas

                    </Text>
                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games{`\n`}
                        favoritos com seus amigos
                    </Text>
                    <ButtonIcon
                        title='Entrar com Discord'

                        onPress={handleSinIng}

                    />
                </View>

            </View>

        </Background>
    );
}