import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Image, TouchableOpacity } from 'react-native';
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
    EmptyContainer,
    List,
    DateSelector,
    DateSelectorText,
} from './styles';

import { subscribeRequest } from '~/store/modules/subscription/actions';

export default function Meetups() {
    const [date, setDate] = useState(new Date());
    const [page, setPage] = useState(1);
    const [meetups, setMeetups] = useState([]);

    const dispatch = useDispatch();

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

    function handleSubscribe(meetup_id) {
        dispatch(subscribeRequest(meetup_id));
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
                {meetups.length ? (
                    <List
                        data={meetups}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (
                            <Meetup
                                data={item}
                                onSubscribe={() => handleSubscribe(item.id)}
                            />
                        )}
                    />
                ) : (
                    <EmptyContainer>
                        <Icon
                            name="sentiment-dissatisfied"
                            size={20}
                            color="#999"
                            style={{ marginRight: 5 }}
                        />
                        <Text>No meetups found on this date</Text>
                    </EmptyContainer>
                )}
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
