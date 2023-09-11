import React, {forwardRef} from 'react';
import {TextInput} from 'react-native-paper';

import {styles} from './styles';

interface Props {
  right?: React.ReactNode;
  secureTextEntry?: boolean;
  onPressEye?: () => void;
  [key: string]: any;
}

export const TextInputComponent = forwardRef((props: Props, ref: any) => {
  const {right, secureTextEntry, onPressEye, ...rest} = props;

  return (
    <TextInput
      ref={ref}
      style={styles.input}
      mode="flat"
      theme={{
        colors: {
          primary: 'black',
          text: 'red',
          placeholder: 'green',
        },
        roundness: 8,
      }}
      underlineColor={'blue'}
      secureTextEntry={secureTextEntry}
      right={
        right && (
          <TextInput.Icon
            size={20}
            onPress={onPressEye}
            icon={secureTextEntry ? 'eye' : 'eye-off'}
          />
        )
      }
      {...rest}
    />
  );
});
