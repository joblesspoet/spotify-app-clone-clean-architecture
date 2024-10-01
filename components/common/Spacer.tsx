import React from 'react';
import { View } from 'react-native';

interface SpacerProps {
  type: 'horizontal' | 'vertical';
  size: number;
}

const Spacer: React.FC<SpacerProps> = ({ type, size }) => {
  const style = type === 'horizontal' ? { width: size } : { height: size };

  return <View style={{ ...style }} />;
};

export default Spacer;
