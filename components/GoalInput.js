import { useState } from 'react';
import {
    Button,
    Modal,
    StyleSheet,
    TextInput,
    View,
    Image,
} from 'react-native';

function GoalInput({ onAddGoal, visible, onCancel }) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/goal.png')}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={addGoalHandler}
                            color='#5e0acc'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            color={'#f31282'}
                            onPress={onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

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
        padding: 15,
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: '100%',
        marginBottom: 20,
        backgroundColor: '#e4d0ff',
        borderRadius: 5,
        color: '#120438',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: '40%',
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
});

export default GoalInput;
