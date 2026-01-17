// components/mobile/IconGrid.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../styles/theme';

export default function IconGrid({ menu, columns = 3 }) {
  debugger    
  return (
    <View style={styles.grid}>
      {menu.map((item) => (
        <TouchableOpacity key={item.id}>
          <Text>{item.label}</Text> 
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: theme.spacing.sm,
  },
});
