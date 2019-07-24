import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
    Container,
    Banner,
    Title,
    InfoContainer,
    Info,
    InfoText,
    SubscribeButton,
} from './styles';

export default function Meetup({ data }) {
    const dateFormatted = useMemo(() => {
        return formatRelative(parseISO(data.date), new Date(), {
            locale: pt,
            addSuffix: true,
        });
    }, [data.date]);

    return (
        <Container>
            <Banner
                source={{
                    uri: data.banner.url
                        ? data.banner.url
                        : 'https://camunda.com/img/events/meetup-example.jpg',
                }}
            />
            <Title>{data.title}</Title>
            <InfoContainer>
                <Info>
                    <Icon name="event" size={18} color="#999" />
                    <InfoText>{dateFormatted}</InfoText>
                </Info>
                <Info>
                    <Icon name="place" size={18} color="#999" />
                    <InfoText>{data.location}</InfoText>
                </Info>
                <Info>
                    <Icon name="person" size={18} color="#999" />
                    <InfoText>Organizador: {data.user.name}</InfoText>
                </Info>
            </InfoContainer>
            <SubscribeButton>Subscribe</SubscribeButton>
        </Container>
    );
}
