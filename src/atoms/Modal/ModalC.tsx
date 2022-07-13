import React, { useEffect, useState, useCallback } from "react";
import { ModalType } from '../../types/index';
import { View, Modal, TouchableOpacity, ModalProps } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const ModalC = ({ open, children, onClose, testId, top, styleModal,
  colorClose, sizeClose, styleClose, ...otherprops }: ModalType & ModalProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const size = sizeClose ? sizeClose : 24;
  const color = colorClose ? colorClose : 'red';
  const topModal = top ? top : 0;

  if (!open) {
    return null;
  }

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleCloseModal = useCallback(() => {
    if (onClose !== undefined) onClose;
    setIsOpen(false);
  }, [onClose]);

  return (
    <Modal
      testID={testId} animationType={"fade"} transparent visible={isOpen}
      onRequestClose={handleCloseModal} {...otherprops}>
      <TouchableOpacity activeOpacity={1} style={styles.overlayModal} onPress={handleCloseModal}>
        <View style={[styles.cardModal, { ...styleModal }, { marginTop: topModal }]}>
          <MaterialIcon 
            style={[styles.iconClose, { ...styleClose }]}
            name="close"
            onPress={handleCloseModal}
            size={size} color={color} />
          {children}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalC;