import styled from 'styled-components/native';

export const Header = styled.View`
    height: 64px;
    background: rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
`;

export const Container = styled.View`
    flex: 1;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 20, paddingBottom: 20 },
})``;

export const DateSelector = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`;

export const DateSelectorText = styled.Text`
    font-size: 20px;
    margin: 0 10px;
    color: #fff;
    font-weight: bold;
`;
