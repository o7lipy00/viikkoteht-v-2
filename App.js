import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, Pressable, BackHandler }
 from 'react-native';

export default function App() {
  const[modalVisible, setModalVisible] = useState(false);// TILAMUUTTUJA JOKA ON ALUKSI

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Show Modal</Text>
      </Pressable>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
       
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is modal</Text>
            <Pressable
              style={[styles.button, styles.closeButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalContent: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    height: 200,
  },
  closeButton: {
    marginTop: 80, 
  },
});
