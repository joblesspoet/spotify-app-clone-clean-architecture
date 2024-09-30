import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface LinkButtonProps {
  title: string;  
  onButtonPress: () => void
}

const LinkButton: React.FC<LinkButtonProps> = ({ title, onButtonPress }) => {
  
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onButtonPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: 147,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Satoshi-Medium',
    fontSize: 19
  },
});

export default LinkButton;
