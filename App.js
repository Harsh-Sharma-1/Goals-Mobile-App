import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [goals, setGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    const addGoalHandler = (text) => {
        setGoals((state) => [...state, { text, id: Math.random().toString() }]);
        endAddGoalHandler();
    };

    const deleteGoalHandler = (index) => {
        goals.splice(index, 1);
        setGoals((state) => [...state]);
    };

    return (
        <>
            <StatusBar style='light' />
            <View style={styles.appContainer}>
                <Button
                    title='Add New Goal'
                    color='#a065ec'
                    onPress={startAddGoalHandler}
                />
                <GoalInput
                    onAddGoal={addGoalHandler}
                    visible={modalIsVisible}
                    onCancel={endAddGoalHandler}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goals}
                        keyExtractor={(item) => item.id}
                        renderItem={(itemData) => (
                            <GoalItem
                                text={itemData.item.text}
                                onDeleteItem={deleteGoalHandler}
                                index={itemData.index}
                            />
                        )}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 4,
    },
});
