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

type Props = {
  targetRef: React.RefObject<HTMLDivElement>;
};

function Contact({ targetRef }: Props) {
  const isMobile = useMediaQuery('(max-width: 1050px)');

  const contactSubmit = (e) => {};

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
    <Container h="70vh" mt="lg" pt="lg" ref={targetRef}>
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
          <Space h="md" />
          <Stack align="stretch" justify="flex-end" gap="xs">
            <TextInput c="#005C78" label="Your name" placeholder="Your name" />
            <TextInput c="#005C78" label="Email" placeholder="Email" mt="md" />
            <Textarea
              c="#005C78"
              label="Message"
              placeholder="Message"
              mt="md"
            />
            <Space h="sm" />

            <Button onSubmit={contactSubmit} color="#006989">
              Submit
            </Button>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
}
export default Contact;
