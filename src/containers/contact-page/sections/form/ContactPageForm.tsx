import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { graphql } from 'gatsby';
import { motion, useAnimation } from 'framer-motion';
import { useToast } from '@chakra-ui/react';
import { _ContactPageForm } from '../../entities/_ContactPage';
import { DefaultProps } from '../../../../types/DefaultProps';
import { factory } from '../../../../theme/factory';
import { FieldPhoneNumber } from '../../../../components/form/fields/FieldPhoneNumber';
import { Form } from '../../../../components/form/form/Form';
import { Button } from '../../../../components/button/Button';
import { FieldFirstname } from '../../../../components/form/fields/FieldFirstname';
import { FieldLastname } from '../../../../components/form/fields/FieldLastname';
import { FieldEmail } from '../../../../components/form/fields/FieldEmail';
import { FieldTextarea } from '../../../../components/form/fields/FieldTextarea';
import { useTranslation } from '../../../../hooks/use-translations';
import {
  ContactSuccessMessage,
  ContactSuccessMessageData,
} from './components/ContactSuccessMessage';

export type ContactPageFormSectionData = _ContactPageForm;

type Props = DefaultProps<ContactPageFormSectionData>;

const MotionDiv = motion(factory.div);

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  message: string;
  // eslint-disable-next-line
  'form-name': string;
};

export function ContactPageFormSection(props: Props) {
  const { data } = props;
  const methods = useForm<FormValues>();
  const controls = useAnimation();
  const toast = useToast();
  const { t } = useTranslation();

  const { handleSubmit, reset, clearErrors, register } = methods;

  const contactSuccessMessageData: ContactSuccessMessageData = {
    heading: data.successHeading,
    text: data.successText,
  };

  const onSubmit = handleSubmit(async (data): Promise<void> => {
    try {
      const res = await fetch(`/`, {
        method: `POST`,
        headers: { 'Content-Type': `application/x-www-form-urlencoded` },
        body: new URLSearchParams(data).toString(),
      });
      if (!res.ok) {
        throw new Error();
      }
      reset();
      clearErrors();
      await controls.start(`visible`);
      setTimeout(async () => {
        await controls.start(`hidden`);
      }, 8000);
    } catch (e) {
      toast({
        title: t(`errors.contact_error.title`),
        description: t(`errors.contact_error.description`),
        status: `error`,
        position: `top-right`,
        duration: 8000,
        isClosable: true,
      });
    }
  });

  const formVariants = {
    visible: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const successVariants = {
    visible: {
      opacity: 1,
      display: `block`,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      display: `none`,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <factory.div width={[`100%`, null, null, `66%`]} mb={[10, null, null, 0]}>
      <factory.div mb={10}>{data.heading}</factory.div>
      <factory.div position="relative">
        <MotionDiv
          initial="hidden"
          variants={formVariants}
          animate={controls}
          zIndex={2}
        >
          <FormProvider {...methods}>
            <Form
              data-netlify="true"
              name="contact"
              onSubmit={onSubmit}
              method="post"
            >
              <input type="hidden" value="contact" {...register(`form-name`)} />
              <factory.div
                display="flex"
                flexDirection="column"
                gap={3}
                maxWidth={[`100%`, null, null, 652]}
                mb={5}
              >
                <factory.div
                  display="flex"
                  flexDirection={[`column`, null, `row`]}
                  gap={3}
                  width="100%"
                >
                  <FieldFirstname name="firstname" />
                  <FieldLastname name="lastname" />
                </factory.div>
                <factory.div
                  display="flex"
                  flexDirection={[`column`, null, `row`]}
                  gap={3}
                  width="100%"
                >
                  <FieldPhoneNumber name="phone" />
                  <FieldEmail name="email" />
                </factory.div>
                <factory.div width="100%">
                  <FieldTextarea name="message" />
                </factory.div>
              </factory.div>
              <factory.div textAlign={[`center`, null, null, `left`]}>
                <Button type="submit" icon="paper-plane">
                  {t(`placeholders.button`)}
                </Button>
              </factory.div>
            </Form>
          </FormProvider>
        </MotionDiv>
        <MotionDiv
          position="absolute"
          top={0}
          initial="hidden"
          variants={successVariants}
          animate={controls}
          zIndex={1}
          display="none"
        >
          <ContactSuccessMessage data={contactSuccessMessageData} />
        </MotionDiv>
      </factory.div>
    </factory.div>
  );
}

export const contactPageFormSectionFragment = graphql`
  fragment ContactPageFormSectionFragment on PrismicContactPageData {
    heading {
      richText
    }
    contact_success_heading {
      text
    }
    contact_success_text {
      text
    }
  }
`;
