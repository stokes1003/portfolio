import { Text, Container, Title, Stack, Group } from '@mantine/core';

import { useState, useRef } from 'react';

import { useMediaQuery } from '@mantine/hooks';

import emailjs from '@emailjs/browser';
import styles from '../Contact.module.css';

type Props = {
  targetRef: React.RefObject<HTMLDivElement>;
};

function Contact({ targetRef }: Props) {
  const isMobile = useMediaQuery('(max-width: 1050px)');
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID: string = import.meta.env.VITE_SERVICE_ID as string;
    const templateID: string = import.meta.env.VITE_TEMPLATE_ID as string;
    const publicKey: string = import.meta.env.VITE_PUBLIC_KEY as string;

    if (form.current) {
      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current!.reset();
            setIsSent(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  if (isMobile) {
    return (
      <Container mt="150" size="sm" ref={targetRef} mb="sm">
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
            <form ref={form} onSubmit={sendEmail} className={styles['form']}>
              <label className={styles['label']}>Name</label>
              <input
                type="text"
                name="user_name"
                className={styles['feedback-input']}
                placeholder="Your name"
                required
              />
              <label className={styles['label']}>Email</label>
              <input
                type="email"
                name="user_email"
                className={styles['feedback-input']}
                placeholder="Email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                required
              />
              <label className={styles['label']}>Message</label>
              <textarea
                name="message"
                className={styles['feedback-input']}
                placeholder="Message"
                required
              />
              <input
                type="submit"
                value="Submit"
                className={styles['submit-button']}
              />
              {isSent && (
                <Group mt="md" align="center" justify="center">
                  <Text fw={500} c="#E88D67">
                    Message Sent Successfully
                  </Text>
                </Group>
              )}
            </form>
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
                required
              />
              <label className={styles['label']}>Email</label>
              <input
                type="email"
                name="user_email"
                className={styles['feedback-input']}
                placeholder="Email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                required
              />
              <label className={styles['label']}>Message</label>
              <textarea
                name="message"
                className={styles['feedback-input']}
                placeholder="Message"
                required
              />
              <input
                type="submit"
                value="Submit"
                className={styles['submit-button']}
              />
              {isSent && (
                <Group mt="md" align="center" justify="center">
                  <Text fw={500} c="#E88D67">
                    Message Sent Successfully
                  </Text>
                </Group>
              )}
            </form>
          </Container>
        </Stack>
      </Container>
    </>
  );
}
export default Contact;
