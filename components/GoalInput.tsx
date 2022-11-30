import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from 'react-native';

const GoalInput = ({
  enteredGoalText,
  addGoalHandler,
  goalInputHandler,
  visible,
  modelToggle,
}: {
  enteredGoalText: string | undefined;
  addGoalHandler: () => void;
  goalInputHandler: (enteredText: string) => void;
  visible: boolean;
  modelToggle: () => void;
}) => {
  return (
    <Modal visible={visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.image} />
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={modelToggle} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    padding: 16,
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 8,
  },
});

export default GoalInput;
