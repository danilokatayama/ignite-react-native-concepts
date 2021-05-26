import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import colors from '../global/colors';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const themes = colors;
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState(themes.light);
  const [darkMode, setMode] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(newTaskTitle)
    {
      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }
      
      setTasks(oldState => [...oldState, newTask])
    }
  }

  function handleChangeTheme(darkMode: boolean) {
    if(darkMode){
      setTheme(themes.dark)
    } else {
      setTheme(themes.light)
    }
    console.log(theme)
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    setTasks(oldState => oldState.map(task => task.id === id ? {...task, done: !task.done} : task))
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(task => task.id !== id))
  }

  return (
    <View style={{backgroundColor: theme.container, flex: 1}}>
      <Header theme={theme} changeTheme={handleChangeTheme}/>

      <TodoInput theme={theme} addTask={handleAddTask} />

      <MyTasksList
        theme={theme}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}