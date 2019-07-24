import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Banner,
    Title,
    InfoContainer,
    Info,
    InfoText,
    SubscribeButton,
} from './styles';

export default function Meetup() {
    return (
        <Container>
            <Banner
                source={{
                    uri: 'https://camunda.com/img/events/meetup-example.jpg',
                }}
            />
            <Title>Meetup de react native</Title>
            <InfoContainer>
                <Info>
                    <Icon name="event" size={18} color="#999" />
                    <InfoText>24 de Junho, às 20h</InfoText>
                </Info>
                <Info>
                    <Icon name="place" size={18} color="#999" />
                    <InfoText>Rua Guilherme Gembala, 260</InfoText>
                </Info>
                <Info>
                    <Icon name="person" size={18} color="#999" />
                    <InfoText>Organizador: Diego Fernandes</InfoText>
                </Info>
            </InfoContainer>
            <SubscribeButton>Subscribe</SubscribeButton>
        </Container>
    );
}
