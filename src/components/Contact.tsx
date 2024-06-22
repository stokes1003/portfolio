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

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('sendEmail function called'); // Log to ensure function is called

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    console.log('Environment variables:', { serviceID, templateID, publicKey }); // Log environment variables

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          serviceID,
          templateID,
          form.current,
          publicKey
        );
        console.log('SUCCESS!', result.text);
        form.current.reset();
        setIsSent(true);
      } catch (error) {
        console.error('FAILED...', error);
      }
    } else {
      console.log('form.current is null');
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
