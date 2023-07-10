import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


interface CustomModalProps {
  showModal?: boolean;
  closeModal?: () => any;
  children?: any;
}

const CustomModal: React.FC<CustomModalProps> = ({
  showModal,
  closeModal,
  children,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        presentationStyle='overFullScreen'
        visible={showModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          // setModalVisible(!modalVisible);
          closeModal
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? '#F9F9F9' : 'white',
                  },
                  styles.closeBtn
                ]} onPress={closeModal}>
                <Icon name="close" size={28} color="#08979D" />
              </Pressable>
            </View>
            {children}
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 3,
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,

  },
  closeBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    padding: 4,
    borderRadius: 50
  }
});

export default CustomModal