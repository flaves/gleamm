import React, { FormHTMLAttributes, forwardRef, ReactNode } from 'react';

export type Props = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
  name: string;
};

export const Form = forwardRef<HTMLFormElement, Props>((props, ref) => {
  return (
    <form ref={ref} {...props}>
      {props.children}
    </form>
  );
});
