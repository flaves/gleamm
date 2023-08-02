import React, { RefObject } from 'react';
import { useController } from 'react-hook-form';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { Input } from '../input/Input';
import { Icon } from '../../icon/Icon';

type Props = {
  inputRef?: RefObject<HTMLInputElement>;
  name: string;
};

export function FieldPhoneNumber(props: Props) {
  const { inputRef, name } = props;

  const {
    field,
    fieldState: { invalid },
  } = useController({
    name,
    defaultValue: ``,
    rules: {
      validate: (value) => isMobilePhone(value, `fr-BE`),
    },
  });

  return (
    <Input
      ref={inputRef}
      value={field.value}
      onChange={(e) => field.onChange(e.target.value)}
      placeholder="Numéro de téléphone"
      rightIcon={invalid && <Icon icon="xmark" />}
      rightIconColor="danger.500"
      isInvalid={invalid}
    />
  );
}
