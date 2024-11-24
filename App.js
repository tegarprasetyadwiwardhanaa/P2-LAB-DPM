import { StyleSheet, View } from 'react-native';
import Soal1 from './components/Soal1';
import Soal2 from './components/Soal2';

export default function App() {
  return (
    <View style={styles.container}>
      <Soal1 text="TEGAR" />
      <Soal2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d3d3d3",
  },
});
