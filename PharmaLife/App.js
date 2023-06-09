import { StyleSheet, Text, View } from 'react-native';
import Index from './Index';

export default function App() {
  return (
    <View style={styles.view}>
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
  view: {
    flex: 1,
    backgroundColor:"#668557", 
  },
});

