import React, { RefObject } from 'react';
import { useController } from 'react-hook-form';
import { Input } from '../input/Input';
import { Icon } from '../../icon/Icon';
import { useTranslation } from '../../../hooks/use-translations';

type Props = {
  inputRef?: RefObject<HTMLInputElement>;
  name: string;
};

export function FieldFirstname(props: Props) {
  const { inputRef, name } = props;
  const { t } = useTranslation();
  const {
    field,
    fieldState: { invalid },
  } = useController({
    name,
    defaultValue: ``,
    rules: {
      required: true,
    },
  });

  return (
    <Input
      ref={inputRef}
      value={field.value}
      onChange={(e) => field.onChange(e.target.value)}
      placeholder={t(`placeholders.firstname`)}
      rightIcon={invalid && <Icon icon="xmark" />}
      rightIconColor="danger.500"
      isInvalid={invalid}
    />
  );
}
