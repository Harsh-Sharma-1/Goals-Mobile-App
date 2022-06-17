import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem({ text, onDeleteItem, index }) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#2c0560' }}
                onPress={onDeleteItem.bind(this, index)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 4,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        padding: 8,
        color: 'white',
    },
    pressedItem: {
        opacity: 0.5,
    },
});

export default GoalItem;
