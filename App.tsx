import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [listOfGoals, setListOfGoals] = useState<string[]>([]);
  const [modalVisible, setModalIsVisable] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState<string | undefined>(
    ''
  );

  const goalInputHandler = (enteredText: string): void => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = (): void => {
    if (enteredGoalText === undefined || enteredGoalText === '') {
      return;
    }
    if (listOfGoals.includes(enteredGoalText)) {
      return;
    }
    setListOfGoals((prev) => [...prev, enteredGoalText] as string[]);
    setEnteredGoalText('');
    modelToggle();
  };
  const removeGoalHander = (key: string): void | null => {
    return setListOfGoals((prev) => prev.filter((x) => x !== key));
  };
  const modelToggle = (): void => {
    setModalIsVisable((prev) => !prev);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={modelToggle} />
        <GoalInput
          modelToggle={modelToggle}
          visible={modalVisible}
          enteredGoalText={enteredGoalText}
          addGoalHandler={addGoalHandler}
          goalInputHandler={goalInputHandler}
        />
        <View style={styles.goalsContainer}>
          {enteredGoalText === '' ? (
            <Text style={{ color: 'white' }}>Please Enter a goal</Text>
          ) : (
            <Text style={{ color: 'white' }}>List of Goals</Text>
          )}
          <FlatList
            data={listOfGoals}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <GoalItem item={item} removeGoalHander={removeGoalHander} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    display: 'flex',
    flex: 1,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});
