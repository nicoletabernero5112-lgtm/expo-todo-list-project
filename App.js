import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, View} from 'react-native';
import { Input, Button, Checkbox } from '@rneui/themed';

export default function App() {
 const [tasks, setTasks] = useState([
    {key: '1', description: 'Item 1', completed: false},
    {key: '2', description: 'Item 2', completed: true},
    {key: '3', description: 'Item 3', completed: false},
 ]);
const [newTask, setNewTask] = useState('');


const addTask = () => {
  if (newTask.trim() !== '') return;
    const newTask = {key: (tasks.length +1 ).toString(), description: newTask, completed: false}
    setTasks([...tasks, newTask]);
    setNewTask('');
};

 const renderItem = ({item}) => {
  return (<Checkbox title={item.description} 
    checked={item.completed} 
    onPress={() => taskCompletion(item.key)}
    textStyle={item.completed
      ? styles.completed
      : styles.description
    }>{item.description}
    </Checkbox>
    )
 };
const taskCompletion = (id) => {
  setTasks(tasks.map(task => task.key === id ? {...task, completed: !task.completed} : task))
};

  return (<View style={styles.container}>
    <Input placeholder='New Task' value={newTask} changeText={setNewTask} />
    <Button title= '+ Task' onPress={addTask} />
    <FlatList data={tasks} renderItem={renderItem}></FlatList>
  </View>)



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  description: {
    backgroundColor: '#edb4b4',
    padding: 15,
  },
  completed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  }
});
