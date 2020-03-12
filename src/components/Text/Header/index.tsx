import React from 'react';
import {Platform} from 'react-native';
import {Text} from '@ui-kitten/components';

export const HeaderText = (props: {children?: string}) => {
  return (
    <Text
      style={{
        lineHeight: 30,
        fontSize: 30,
        ...Platform.select({
          android: {
            // fontFamily: 'Montserrat 700',
          },
          ios: {
            // fontFamily: 'Montserrat-Regular',
            fontWeight: '700',
          },
        }),
      }}>
      {props.children ?? ''}
    </Text>
  );
};