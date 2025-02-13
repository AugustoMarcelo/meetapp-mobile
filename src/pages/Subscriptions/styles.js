import styled from 'styled-components/native';

export const Header = styled.View`
  height: 64px;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Container = styled.View`
  flex: 1;
`;

export const EmptyContainer = styled.View`
  flex-direction: row;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 20, paddingBottom: 20 },
})``;
