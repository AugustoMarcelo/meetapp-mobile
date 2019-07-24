import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import {
    Header,
    Container,
    List,
    DateSelector,
    DateSelectorText,
} from './styles';

const data = [1, 2, 3, 4, 5];

export default function Meetups() {
    return (
        <Background>
            <Header>
                <Image source={logo} style={{ width: 24, height: 24 }} />
            </Header>
            <Container>
                <DateSelector>
                    <TouchableOpacity>
                        <Icon name="chevron-left" size={30} color="#fff" />
                    </TouchableOpacity>
                    <DateSelectorText>31 de Maio</DateSelectorText>
                    <TouchableOpacity>
                        <Icon
                            name="keyboard-arrow-right"
                            size={30}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </DateSelector>
                <List
                    data={data}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }) => <Meetup data={item} />}
                />
            </Container>
        </Background>
    );
}

Meetups.navigationOptions = {
    tabBarLabel: 'Meetups',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="format-list-bulleted" size={20} color={tintColor} />
    ),
};
