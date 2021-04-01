import {TouchableOpacity, Text} from 'react-native';
import React, {FunctionComponent} from 'react';

//types
import {ButtonSubmit} from '../../types';

//styles
import {styles} from './ButtonStyles';

const SubmitButton: FunctionComponent<ButtonSubmit> = ({
  onSubmit,
  isDisabled,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onSubmit}
      disabled={isDisabled}>
      <Text style={styles.text}>Submit</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
