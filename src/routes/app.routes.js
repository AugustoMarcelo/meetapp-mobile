import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Meetups from '../pages/Meetups';
import Profile from '../pages/Profile';
import Subscriptions from '../pages/Subscriptions';

const Tabs = createBottomTabNavigator();

function tabBarIcon(color, iconName) {
  return <Icon name={iconName} color={color} size={26} />;
}

export default function AppRoutes() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#2b1a2f',
          height: 60,
          borderWidth: 0,
        },
        tabStyle: {
          paddingVertical: 6,
        },
        labelStyle: {
          fontSize: 14,
        },
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255,255,255,0.6)',
      }}
    >
      <Tabs.Screen
        name="Meetups"
        component={Meetups}
        options={{
          tabBarLabel: 'Meetups',
          tabBarIcon: ({ color }) => tabBarIcon(color, 'format-list-bulleted'),
        }}
      />
      <Tabs.Screen
        name="Subscriptions"
        component={Subscriptions}
        options={{
          tabBarLabel: 'Inscrições',
          tabBarIcon: ({ color }) => tabBarIcon(color, 'local-offer'),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => tabBarIcon(color, 'person'),
        }}
      />
    </Tabs.Navigator>
  );
}
