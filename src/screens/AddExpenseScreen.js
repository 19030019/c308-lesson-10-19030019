import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const AddExpenseScreen = () => {
  const [cat, setCat] = useState('');
  return (
    <View style={styles.container}>
      <TextInput placeholder={'Enter amount'} style={styles.textInputStyle} />
      <TextInput
        placeholder={'Enter description'}
        style={styles.textInputStyle}
      />
      <Picker
        selectedValue={cat}
        onValueChange={(cat, itemIndex) => setCat(cat)}>
        <Picker.Item label={'Select Category'} value={'Select Category'} />
        <Picker.Item label={'Entertainment'} value={'Entertainment'} />
        <Picker.Item label={'Food'} value={'Food'} />
        <Picker.Item label={'Transportation'} value={'Transportation'} />
      </Picker>
      <View style={styles.alignment}>
        <TouchableHighlight>
          <View style={styles.textHighlight}>
            <Image
              style={styles.image}
              source={require('../images/expense_icon.png')}
            />
            <Text style={styles.text}>Add Expense</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.textHighlight2}>
            <Image
              style={styles.image}
              source={require('../images/info_icon.png')}
            />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: '#86B2CA',
    borderWidth: 1,
    margin: 3,
  },
  container: {
    padding: 10,
  },
  textHighlight: {
    borderColor: '#86B2CA',
    backgroundColor: '#86B2CA',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
  },
  textHighlight2: {
    borderColor: '#86B2CA',
    backgroundColor: '#86B2CA',
    marginLeft: 230,
  },
  image: {
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
  },
  alignment: {
    flexDirection: 'row',
  },
});

export default AddExpenseScreen;
