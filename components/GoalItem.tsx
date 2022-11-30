import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({
  item,
  removeGoalHander,
}: {
  item: string;
  removeGoalHander: (key: string) => void | null;
}) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={() => removeGoalHander(item)}
        style={(pressData) => pressData.pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
