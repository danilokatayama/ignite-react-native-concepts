import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';

interface Theme {
  changeTheme(darkMode: boolean): void;
  theme: any;
}

export function Header({changeTheme, theme}: Theme) {
  const [darkMode, setDarkMode]= useState(false);

  function toogleDarkMode(newValue: boolean) {
    changeTheme(newValue);
    setDarkMode(newValue);
  }

  return (
    <SafeAreaView style={{backgroundColor: theme.headerBackground}}>
      <View style={[styles.header, {backgroundColor: theme.headerBackground}]}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
        <Switch
        thumbColor="#fff"
        style={styles.switch}
        value={darkMode}
        trackColor={{true: theme.container, false: '#9c9c9c'}}
        onValueChange={() => toogleDarkMode(!darkMode)}
      />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#273FAD',
  // },
  header: {
    paddingBottom: 44,
    // backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  switch: {
    position: 'absolute',
    right: 10,
  }
});
