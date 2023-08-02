import React, { RefObject } from 'react';
import { useController } from 'react-hook-form';
import { Input } from '../input/Input';
import { Icon } from '../../icon/Icon';

type Props = {
  inputRef?: RefObject<HTMLInputElement>;
  name: string;
};

export function FieldEmail(props: Props) {
  const { inputRef, name } = props;

  const {
    field,
    fieldState: { invalid },
  } = useController({
    name,
    defaultValue: ``,
    rules: {
      required: true,
      pattern:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
  });

  return (
    <Input
      ref={inputRef}
      value={field.value}
      onChange={(e) => field.onChange(e.target.value)}
      placeholder="Email"
      rightIcon={invalid && <Icon icon="xmark" />}
      rightIconColor="danger.500"
      isInvalid={invalid}
    />
  );
}
