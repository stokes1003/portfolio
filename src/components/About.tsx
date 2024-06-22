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
  const isMobile = useMediaQuery('(max-width: 430px)');

  if (isMobile) {
    return (
      <Container ref={targetRef} mb="lg" size="lg" h="80%vh">
        <Stack align="center" justify="center">
          <Title c="#005C78" size="40" fw="700">
            About
          </Title>
        </Stack>
        <Group m="lg" justify="center">
          <Image h="300" w="300" src="/images/AI Headshot.png" />
          <Space h="xl" />
          <Text c="#005C78" size="md">
            Driven by a commitment to lifelong learning, I thrive as a developer
            with a strong passion for JavaScript, React, and web development.
            The blend of creativity, logic, and technology, along with the
            constant potential for new discoveries, fuels my excitement and
            dedication. Away from the screen, I enjoy woodworking, staying fit,
            and playing the guitar.
          </Text>
        </Group>
        <Group mt="ls" justify="center">
          <Stack h="50%vh">
            <Paper h="110" w="100" shadow="lg" radius="xl" withBorder p="xl">
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

            <Paper h="110" w="100" shadow="lg" radius="xl" withBorder p="xl">
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
            <Paper h="110" w="100" shadow="lg" radius="xl" withBorder p="xl">
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
          <Stack h="100%vh">
            <Paper h="110" w="100" shadow="lg" radius="xl" withBorder p="xl">
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
            <Paper h="110" w="100" shadow="lg" radius="xl" withBorder p="xl">
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
            <Paper h="110" w="100" shadow="lg" radius="xl" withBorder p="xl">
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
            <Paper h="110" w="100" shadow="lg" radius="xl" withBorder p="xl">
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
          <Stack h="100%vh">
            <Paper h="110" w="100" shadow="lg" radius="xl" withBorder p="xl">
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
            <Paper h="110" w="100" shadow="lg" radius="xl" withBorder p="xl">
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
            <Paper h="110" w="100" shadow="lg" radius="xl" withBorder p="xl">
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
      <>
        <Container ref={targetRef} mt="xl" pt="60" mb="lg" size="lg" h="80%vh">
          <Stack align="center" justify="center">
            <Title c="#005C78" size="40" fw="700">
              About
            </Title>
          </Stack>
          <Grid gutter="xl" h="80%vh" mt="lg">
            <Grid.Col h="80vh" span={6}>
              <Group justify="center">
                <Image h="450" w="450" src="/images/AI Headshot.png" />
                <Space h="lg" />
                <Text c="#005C78">
                  Driven by a commitment to lifelong learning, I thrive as a
                  developer with a strong passion for JavaScript, React, and web
                  development. The blend of creativity, logic, and technology,
                  along with the constant potential for new discoveries, fuels
                  my excitement and dedication. Away from the screen, I enjoy
                  woodworking, staying fit, and playing the guitar.
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={6} h="80%vh">
              <Group justify="center">
                <Stack h="100%vh">
                  <Paper shadow="lg" radius="xl" withBorder p="xl">
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

                  <Paper shadow="lg" radius="xl" withBorder p="xl">
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
                  <Paper shadow="lg" radius="xl" withBorder p="xl">
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
                <Stack h="100%vh">
                  <Paper shadow="lg" radius="xl" withBorder p="xl">
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
                  <Paper shadow="lg" radius="xl" withBorder p="xl">
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
                  <Paper shadow="lg" radius="xl" withBorder p="xl">
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
                  <Paper shadow="lg" radius="xl" withBorder p="xl">
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
                <Stack h="100%vh">
                  <Paper shadow="lg" radius="xl" withBorder p="xl">
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
                  <Paper shadow="lg" radius="xl" withBorder p="xl">
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
                  <Paper shadow="lg" radius="xl" withBorder p="xl">
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
      </>
    );
}

export default About;
