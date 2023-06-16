import { StyleSheet, Text, View } from 'react-native';
import Index from './src/Screens/Index';
import Button from './Button';

export default function App() {
  return (
    <View style={styles.view}>
      
     <Index/>
     {/* <View style={styles.viewConMargin} >
     <Button style={styles.viewDivBoton}/>
     <Button style={styles.viewDivBoton}/>
     </View> */}
     
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
  viewConMargin:{
    flex: 1,
    marginTop: 320,
    backgroundColor:"#668557", 
  },
  viewDivBoton: {
    marginTop: 350,
    padding: 70,
    margin:10,
    alignItems: 'center',
    shadowRadius: 15,
  }
});
