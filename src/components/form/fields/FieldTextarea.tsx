import React, { RefObject } from 'react';
import { useController } from 'react-hook-form';
import { Textarea } from '../text-area/Textarea';

type Props = {
  inputRef?: RefObject<HTMLTextAreaElement>;
  name: string;
};

export function FieldTextarea(props: Props) {
  const { inputRef, name } = props;

  const {
    field,
    fieldState: { invalid },
  } = useController({
    name,
    defaultValue: ``,
    rules: {
      required: true,
      minLength: 10,
    },
  });

  return (
    <Textarea
      ref={inputRef}
      value={field.value}
      onChange={(e) => field.onChange(e.target.value)}
      placeholder="Votre message"
      isInvalid={invalid}
    />
  );
}
