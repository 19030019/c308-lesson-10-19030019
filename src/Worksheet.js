import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Worksheet: () => React$Node = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Enter Name'}
        style={styles.textInputStyle}
        onChangeText={(text) => setName(text)}
      />
      <Picker
        selectedValue={year}
        onValueChange={(itemValue, itemIndex) => setYear(itemValue)}>
        <Picker.Item label={'Year 1'} value={'Year 1'} />
        <Picker.Item label={'Year 2'} value={'Year 2'} />
        <Picker.Item label={'Year 3'} value={'Year 3'} />
      </Picker>
      <Text>My name is {name}</Text>
      <Text>I am in {year}</Text>
      <TouchableHighlight>
        <View style={styles.textHighlight}>
          <Image style={styles.image} source={require('./images/tick.png')} />
          <Text style={styles.text}>Confirm</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  container: {
    padding: 10,
  },
  textHighlight: {
    borderColor: 'lightgreen',
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
  },
});

export default Worksheet;
