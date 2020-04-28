import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Interaction,
  styled,
} from '@ui-kitten/components';

const CustomButtonComponent = (props) => {
  const { themedStyle, style, dispatch, ...restProps } = props;

  const onPress = () => {
    dispatch([Interaction.ACIVE]);
  }

  return (
    <TouchableOpacity
      style={[themedStyle, style]}
      {...restProps}
      onPress={onPress}
    />
  )
}
CustomButtonComponent.styledComponentName = 'CustomButton';

export const CustomButton = styled(CustomButtonComponent);
