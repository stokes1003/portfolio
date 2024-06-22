import {
  Text,
  Button,
  Container,
  Textarea,
  TextInput,
  Title,
  Stack,
  Space,
} from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../Contact.module.css';

type Props = {
  targetRef: React.RefObject<HTMLDivElement>;
};

function Contact({ targetRef }: Props) {
  const isMobile = useMediaQuery('(max-width: 1050px)');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  if (isMobile) {
    return (
      <Container mt="xl" size="sm" ref={targetRef} mb="sm">
        <Stack h="100%" align="center" justify="center" gap="sm">
          <Stack align="center" justify="center" gap="sm">
            <Title c="#005C78" fw="700" size="40">
              Contact
            </Title>
          </Stack>
          <Container size="xs">
            <Text c="#006989" size="md">
              Have a question or want to work together? Leave your details and
              I'll get back to you as soon as possible.
            </Text>
            <Space h="md" />
            <Stack align="stretch" justify="flex-end" gap="xs">
              <TextInput
                c="#005C78"
                label="Your name"
                placeholder="Your name"
              />
              <TextInput
                c="#005C78"
                label="Email"
                placeholder="Email"
                mt="md"
              />
              <Textarea
                c="#005C78"
                label="Message"
                placeholder="Message"
                mt="md"
              />
              <Space h="sm" />

              <Button color="#006989">Submit</Button>
            </Stack>
          </Container>
        </Stack>
      </Container>
    );
  }
  return (
    <>
      <Container h="70vh" mt="md" pt="md" ref={targetRef}>
        <Stack h="100%" align="center" justify="center" gap="sm">
          <Stack h={100} align="center" justify="center" gap="sm">
            <Title c="#005C78" fw="700" size="40">
              Contact
            </Title>
          </Stack>
          <Container size="xs">
            <Text c="#006989">
              Have a question or want to work together? Leave your details and
              I'll get back to you as soon as possible.
            </Text>
            <form ref={form} onSubmit={sendEmail} className={styles['form']}>
              <label className={styles['label']}>Name</label>
              <input
                type="text"
                name="user_name"
                className={styles['feedback-input']}
                placeholder="Your name"
              />
              <label className={styles['label']}>Email</label>
              <input
                type="email"
                name="user_email"
                className={styles['feedback-input']}
                placeholder="Email"
              />
              <label className={styles['label']}>Message</label>
              <textarea
                name="message"
                className={styles['feedback-input']}
                placeholder="Message"
              />
              <input
                type="submit"
                value="Submit"
                className={styles['submit-button']}
              />
            </form>
          </Container>
        </Stack>
      </Container>
    </>
  );
}
export default Contact;
