import { StyleSheet, Text, View } from 'react-native';
import Index from './Index';

export default function App() {
  return (
    <View style={{flex: 1}}>
     <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});
