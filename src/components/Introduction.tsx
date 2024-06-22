import {
  Text,
  Button,
  Flex,
  Container,
  Stack,
  Space,
  Title,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
  scrollIntoView: (
    params?: { alignment?: 'start' | 'end' | 'center' } | undefined
  ) => void;
};

function Introduction({ scrollIntoView }: Props) {
  const isMobile = useMediaQuery('(max-width: 500px)');

  if (isMobile) {
    return (
      <>
        <Container h="100vh">
          <Stack h="100%" align="center" justify="center" gap="sm">
            <Flex justify="center" rowGap="sm">
              <Title c="#005C78" size="40">
                Hello, I'm{' '}
                <Text span size="lg" c="#E88D67" inherit>
                  Sam
                </Text>
                .
              </Title>
            </Flex>
            <Title c="#005C78" size="40" style={{ textAlign: 'center' }}>
              I'm a software engineer.
            </Title>

            <Button
              variant="outline"
              color="#006989"
              onClick={() =>
                scrollIntoView({
                  alignment: 'center',
                })
              }
            >
              View My Work
              <Space w="xs" />
              <FontAwesomeIcon icon={faArrowDown} />
            </Button>
          </Stack>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container h="100vh">
        <Stack h="100%" align="center" justify="center" gap="sm">
          <Flex justify="center" rowGap="sm">
            <Title c="#005C78" size="40">
              Hello, I'm{' '}
              <Text span size="lg" c="#E88D67" inherit>
                Sam
              </Text>
              .
            </Title>
          </Flex>
          <Title c="#005C78" size="40" style={{ textAlign: 'center' }}>
            I'm a software engineer.
          </Title>

          <Button
            variant="outline"
            color="#006989"
            onClick={() =>
              scrollIntoView({
                alignment: 'center',
              })
            }
          >
            View My Work
            <Space w="xs" />
            <FontAwesomeIcon icon={faArrowDown} />
          </Button>
        </Stack>
      </Container>
    </>
  );
}

export default Introduction;
