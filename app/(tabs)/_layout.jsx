import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fb8500',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='home' size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='contact'
        options={{
          headerShown: false,
          title: 'Contact Us',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='users' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='things'
        options={{
          headerShown: false,
          title: 'LeBron',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='list-alt' size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
