import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [color, setColor] = useState('#FFFFFF');
  const handleColorChange = () => {
    let hexColorCode = '123456ABCDEF';
    let colormake = '#';

    for (let i = 0; i < 6; i++) {
      colormake += hexColorCode[Math.round(Math.random() * 6)];
    }
    setColor(colormake);
  };
  return (
    <View style={[styles.container, {backgroundColor: color, height: '100%'}]}>
      <TouchableOpacity onPress={handleColorChange}>
        <View style={styles.btn}>
          <Text style={styles.Text}>Random color : [ {color} ]</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderWidth: 1,
    borderColor: '#ffffff',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: '#6A14BD',
  },
  Text: {
    color: '#fff',
    fontSize: 16,
  },
});
