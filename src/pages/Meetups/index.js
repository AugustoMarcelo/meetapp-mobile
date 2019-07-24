import React, { useState, useEffect, useMemo } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

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

export default function Meetups() {
    const [date, setDate] = useState(new Date());
    const [page, setPage] = useState(1);
    const [meetups, setMeetups] = useState([]);

    const dateFormatted = useMemo(
        () => format(date, "d 'de' MMMM", { locale: pt }),
        [date]
    );

    const dateParamFormatted = useMemo(() => format(date, 'yyyy-MM-dd'), [
        date,
    ]);

    useEffect(() => {
        async function loadMeetups() {
            const response = await api.get('meetups', {
                params: {
                    date: dateParamFormatted,
                    page,
                },
            });

            setMeetups(response.data);
        }

        loadMeetups();
    }, [date, dateParamFormatted, page]);

    function handlePrevDay() {
        setDate(subDays(date, 1));
    }

    function handleNextDay() {
        setDate(addDays(date, 1));
    }

    return (
        <Background>
            <Header>
                <Image source={logo} style={{ width: 24, height: 24 }} />
            </Header>
            <Container>
                <DateSelector>
                    <TouchableOpacity onPress={handlePrevDay}>
                        <Icon name="chevron-left" size={30} color="#fff" />
                    </TouchableOpacity>
                    <DateSelectorText>{dateFormatted}</DateSelectorText>
                    <TouchableOpacity onPress={handleNextDay}>
                        <Icon
                            name="keyboard-arrow-right"
                            size={30}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </DateSelector>
                <List
                    data={meetups}
                    keyExtractor={item => String(item.id)}
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
