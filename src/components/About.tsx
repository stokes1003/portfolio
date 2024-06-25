import {
  Text,
  Title,
  Container,
  Stack,
  Grid,
  Image,
  Space,
  Group,
  Paper,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
  targetRef: React.RefObject<HTMLDivElement>;
};

function About({ targetRef }: Props) {
  const isMobile = useMediaQuery('(max-width: 928px)');

  if (isMobile) {
    return (
      <Container h="100%" ref={targetRef}>
        <Stack align="center" justify="center">
          <Title c="#005C78" size="40" fw="700">
            About
          </Title>
        </Stack>
        <Group m="lg" justify="center">
          <Image h="300" w="300" src="/images/AI Headshot.png" />
          <Space h="xl" />
          <Text c="#005C78" size="md">
            I have a passion for building. I love the planning, the problem
            solving, and the learning that comes with taking a project from idea
            to end product. As a software developer, I have utilized React,
            JavaScript and TypeScript as the basic building blocks to create.
            But the beauty of development is that the learning never stops and
            new tools are constantly being added to the toolbox.
          </Text>
        </Group>
        <Group mt="ls" justify="center">
          <Stack h="50%">
            <Paper
              h="110"
              w="100"
              component="a"
              href="https://www.javascript.com/"
              shadow="lg"
              radius="xl"
              withBorder
              p="xl"
              target="_blank"
              rel="noopener"
            >
              <Stack justify="center" align="center" gap="xs">
                <Image
                  w="18"
                  h="5"
                  src="/images/ProgrammingIcons/javascript-icon.webp"
                />
                <Text c="#005C78" size="xs" fw={500}>
                  JavaScript
                </Text>
              </Stack>
            </Paper>

            <Paper
              h="110"
              w="100"
              component="a"
              href="https://expo.dev/"
              shadow="lg"
              radius="xl"
              withBorder
              p="xl"
              target="_blank"
              rel="noopener"
            >
              <Stack justify="center" align="center" gap="xs">
                <Image
                  w="18"
                  h="5"
                  src="/images/ProgrammingIcons/Expo-Logo.webp"
                />
                <Text c="#005C78" size="xs" fw={500}>
                  EXPO
                </Text>
              </Stack>
            </Paper>
            <Paper
              h="110"
              w="100"
              component="a"
              href="https://www.mongodb.com/"
              shadow="lg"
              radius="xl"
              withBorder
              p="xl"
              target="_blank"
              rel="noopener"
            >
              <Stack justify="center" align="center" gap="xs">
                <Image
                  w="18"
                  h="5"
                  src="/images/ProgrammingIcons/MongoDB-Icon.png"
                />
                <Text c="#005C78" size="xs" fw={500}>
                  MongoDB
                </Text>
              </Stack>
            </Paper>
          </Stack>
          <Stack h="100%">
            <Paper
              h="110"
              w="100"
              component="a"
              href="https://html.com/html5/"
              shadow="lg"
              radius="xl"
              withBorder
              p="xl"
              target="_blank"
              rel="noopener"
            >
              <Stack justify="center" align="center" gap="xs">
                <Image
                  w="18"
                  h="5"
                  src="/images/ProgrammingIcons/HTML5-Icon.png"
                />
                <Text c="#005C78" size="xs" fw={500}>
                  HTML5
                </Text>
              </Stack>
            </Paper>
            <Paper
              h="110"
              w="100"
              component="a"
              href="https://www.typescriptlang.org/"
              shadow="lg"
              radius="xl"
              withBorder
              p="xl"
              target="_blank"
              rel="noopener"
            >
              <Stack justify="center" align="center" gap="xs">
                <Image
                  w="18"
                  h="5"
                  src="/images/ProgrammingIcons/TypeScript-Icon.webp"
                />
                <Text c="#005C78" size="xs" fw={500}>
                  TypeScript
                </Text>
              </Stack>
            </Paper>
            <Paper
              h="110"
              w="100"
              component="a"
              href="https://mantine.dev/"
              shadow="lg"
              radius="xl"
              withBorder
              p="xl"
              target="_blank"
              rel="noopener"
            >
              <Stack justify="center" align="center" gap="xs">
                <Image
                  w="18"
                  h="5"
                  src="/images/ProgrammingIcons/Mantine-Icon.png"
                />
                <Text c="#005C78" size="xs" fw={500}>
                  Mantine
                </Text>
              </Stack>
            </Paper>
            <Paper
              h="110"
              w="100"
              component="a"
              href="https://react.dev/"
              shadow="lg"
              radius="xl"
              withBorder
              p="xl"
              target="_blank"
              rel="noopener"
            >
              <Stack justify="center" align="center" gap="xs">
                <Image
                  w="18"
                  h="5"
                  src="/images/ProgrammingIcons/React-icon.png"
                />
                <Text c="#005C78" size="xs" fw={500}>
                  REACT
                </Text>
              </Stack>
            </Paper>
          </Stack>
          <Stack h="100%">
            <Paper
              h="110"
              w="100"
              component="a"
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              shadow="lg"
              radius="xl"
              withBorder
              p="xl"
              target="_blank"
              rel="noopener"
            >
              <Stack justify="center" align="center" gap="xs">
                <Image
                  w="18"
                  h="5"
                  src="/images/ProgrammingIcons/CSS3-icon.png"
                />
                <Text c="#005C78" size="xs" fw={500}>
                  CSS
                </Text>
              </Stack>
            </Paper>
            <Paper
              h="110"
              w="100"
              component="a"
              href="https://github.com/"
              shadow="lg"
              radius="xl"
              withBorder
              p="xl"
              target="_blank"
              rel="noopener"
            >
              <Stack justify="center" align="center" gap="xs">
                <Image
                  w="18"
                  h="5"
                  src="/images/ProgrammingIcons/Git-Icon.png"
                />
                <Text c="#005C78" size="xs" fw={500}>
                  GitHub
                </Text>
              </Stack>
            </Paper>
            <Paper
              h="110"
              w="100"
              shadow="lg"
              radius="xl"
              withBorder
              p="xl"
              component="a"
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener"
            >
              <Stack justify="center" align="center" gap="xs">
                <Image
                  w="18"
                  h="5"
                  src="/images/ProgrammingIcons/nodeJS-icon.png"
                />
                <Text c="#005C78" size="xs" fw={500}>
                  NODE.JS
                </Text>
              </Stack>
            </Paper>
          </Stack>
        </Group>
      </Container>
    );
  } else
    return (
      <Container ref={targetRef} h="100%">
        <Stack h={100} align="center" justify="center" gap="sm">
          <Title c="#005C78" size="40" fw="700">
            About
          </Title>
        </Stack>
        <Grid gutter="xl" h="100%" mt="lg">
          <Grid.Col h="100%" span={6}>
            <Group justify="center">
              <Image h="425" w="425" src="/images/AI Headshot.png" />
              <Space h="lg" />
              <Text c="#005C78">
                I have a passion for building. I love the planning, the problem
                solving, and the learning that comes with taking a project from
                idea to end product. As a software developer, I have utilized
                React, JavaScript and TypeScript as the basic building blocks to
                create. But the beauty of development is that the learning never
                stops and new tools are constantly being added.
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={6} h="100%">
            <Group justify="center">
              <Stack h="100%">
                <Paper
                  component="a"
                  h="140"
                  w="130"
                  href="https://www.javascript.com/"
                  shadow="lg"
                  radius="xl"
                  withBorder
                  p="xl"
                  target="_blank"
                  rel="noopener"
                >
                  <Stack justify="center" align="center" gap="xs">
                    <Image
                      w="50"
                      h="30"
                      src="/images/ProgrammingIcons/javascript-icon.webp"
                    />
                    <Text c="#005C78" size="sm" fw={500}>
                      JavaScript
                    </Text>
                  </Stack>
                </Paper>

                <Paper
                  h="140"
                  w="130"
                  component="a"
                  href="https://expo.dev/"
                  shadow="lg"
                  radius="xl"
                  withBorder
                  p="xl"
                  target="_blank"
                  rel="noopener"
                >
                  <Stack justify="center" align="center" gap="xs">
                    <Image
                      w="50"
                      h="30"
                      src="/images/ProgrammingIcons/Expo-Logo.webp"
                    />
                    <Text c="#005C78" size="sm" fw={500}>
                      EXPO
                    </Text>
                  </Stack>
                </Paper>
                <Paper
                  h="140"
                  w="130"
                  component="a"
                  href="https://www.mongodb.com/"
                  shadow="lg"
                  radius="xl"
                  withBorder
                  p="xl"
                  target="_blank"
                  rel="noopener"
                >
                  <Stack justify="center" align="center" gap="xs">
                    <Image
                      w="50"
                      h="30"
                      src="/images/ProgrammingIcons/MongoDB-Icon.png"
                    />
                    <Text c="#005C78" size="sm" fw={500}>
                      MongoDB
                    </Text>
                  </Stack>
                </Paper>
              </Stack>
              <Stack h="100%">
                <Paper
                  h="140"
                  w="130"
                  component="a"
                  href="https://html.com/html5/"
                  shadow="lg"
                  radius="xl"
                  withBorder
                  p="xl"
                  target="_blank"
                  rel="noopener"
                >
                  <Stack justify="center" align="center" gap="xs">
                    <Image
                      w="50"
                      h="30"
                      src="/images/ProgrammingIcons/HTML5-Icon.png"
                    />
                    <Text c="#005C78" size="sm" fw={500}>
                      HTML5
                    </Text>
                  </Stack>
                </Paper>
                <Paper
                  h="140"
                  w="130"
                  component="a"
                  href="https://www.typescriptlang.org/"
                  shadow="lg"
                  radius="xl"
                  withBorder
                  p="xl"
                  target="_blank"
                  rel="noopener"
                >
                  <Stack justify="center" align="center" gap="xs">
                    <Image
                      w="50"
                      h="30"
                      src="/images/ProgrammingIcons/TypeScript-Icon.webp"
                    />
                    <Text c="#005C78" size="sm" fw={500}>
                      TypeScript
                    </Text>
                  </Stack>
                </Paper>
                <Paper
                  h="140"
                  w="130"
                  component="a"
                  href="https://mantine.dev/"
                  shadow="lg"
                  radius="xl"
                  withBorder
                  p="xl"
                  target="_blank"
                  rel="noopener"
                >
                  <Stack justify="center" align="center" gap="xs">
                    <Image
                      w="50"
                      h="30"
                      src="/images/ProgrammingIcons/Mantine-Icon.png"
                    />
                    <Text c="#005C78" size="sm" fw={500}>
                      Mantine
                    </Text>
                  </Stack>
                </Paper>
                <Paper
                  h="140"
                  w="130"
                  component="a"
                  href="https://react.dev/"
                  shadow="lg"
                  radius="xl"
                  withBorder
                  p="xl"
                  target="_blank"
                  rel="noopener"
                >
                  <Stack justify="center" align="center" gap="xs">
                    <Image
                      w="50"
                      h="30"
                      src="/images/ProgrammingIcons/React-icon.png"
                    />
                    <Text c="#005C78" size="sm" fw={500}>
                      REACT
                    </Text>
                  </Stack>
                </Paper>
              </Stack>
              <Stack h="100%">
                <Paper
                  h="140"
                  w="130"
                  component="a"
                  href="https://www.w3.org/Style/CSS/Overview.en.html"
                  shadow="lg"
                  radius="xl"
                  withBorder
                  p="xl"
                  target="_blank"
                  rel="noopener"
                >
                  <Stack justify="center" align="center" gap="xs">
                    <Image
                      w="50"
                      h="30"
                      src="/images/ProgrammingIcons/CSS3-icon.png"
                    />
                    <Text c="#005C78" size="sm" fw={500}>
                      CSS
                    </Text>
                  </Stack>
                </Paper>
                <Paper
                  h="140"
                  w="130"
                  component="a"
                  href="https://github.com/"
                  shadow="lg"
                  radius="xl"
                  withBorder
                  p="xl"
                  target="_blank"
                  rel="noopener"
                >
                  <Stack justify="center" align="center" gap="xs">
                    <Image
                      w="50"
                      h="30"
                      src="/images/ProgrammingIcons/Git-Icon.png"
                    />
                    <Text c="#005C78" size="sm" fw={500}>
                      GitHub
                    </Text>
                  </Stack>
                </Paper>
                <Paper
                  h="140"
                  w="130"
                  component="a"
                  href="https://nodejs.org/en"
                  shadow="lg"
                  radius="xl"
                  withBorder
                  p="xl"
                  target="_blank"
                  rel="noopener"
                >
                  <Stack justify="center" align="center" gap="xs">
                    <Image
                      w="50"
                      h="30"
                      src="/images/ProgrammingIcons/nodeJS-icon.png"
                    />
                    <Text c="#005C78" size="sm" fw={500}>
                      NODE.JS
                    </Text>
                  </Stack>
                </Paper>
              </Stack>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    );
}

export default About;
