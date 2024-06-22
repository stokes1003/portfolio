import {
  Text,
  Container,
  Title,
  Stack,
  Grid,
  Image,
  Button,
  Paper,
  Space,
  Group,
  Box,
  Flex,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Projects({ targetRef }: { targetRef: any }) {
  const isMobile = useMediaQuery('(max-width: 430px)');
  if (isMobile) {
    return (
      <Container mt="xl" size="md" h="100%vh">
        <Group justify="center">
          <Title c="#005C78" fw="700" size="40">
            Projects
          </Title>
        </Group>
        <Space h="md" />
        <Flex gap="xs" align="center" direction="column">
          <Title c="#E88D67" order={2}>
            Stoopz Golf
          </Title>
          <Title c="#005C78" order={4}>
            Golf Score Tracker
          </Title>
          <Text c="#006989" size="md">
            The project was built in React using TypeScript and features
            components from Mantine and utilizes Netlify's serverless functions
            to handle authorization and data for the leaderboard table.
          </Text>

          <Paper p="20px" mb="sm" bg="#005C78">
            <Image radius="sm" src="/images/Stoopz.golf.png" p="20px" />
          </Paper>
        </Flex>
        <Group grow justify="flex-start" align="flex-start">
          <Box size="13rem">
            <Stack gap="xs">
              <Button
                color="#006989"
                component="a"
                href="https://stoopz.golf"
                variant="outline"
                target="_blank"
                rel="noopener"
              >
                Live App
              </Button>

              <Button
                color="#006989"
                variant="filled"
                component="a"
                href="https://github.com/Stoopz-Golf-Association/golf-app"
                target="_blank"
                rel="noopener"
              >
                Learn More
              </Button>
            </Stack>
          </Box>
        </Group>

        <Flex mt="xl" gap="xs" align="center" direction="column">
          <Title c="#E88D67" order={2}>
            Media App
          </Title>
          <Title c="#005C78" order={4}>
            iOS App for Media
          </Title>

          <Text c="#006989" size="md">
            This app has something to do with media. I'm pretty sure it was
            built in Expo with React Native but I can't remember and I can't
            open it right now.
          </Text>
          <Paper p="20px" mb="sm" bg="#E88D67">
            <Image radius="sm" src="/images/Stoopz.golf.png" p="20px" />
          </Paper>
        </Flex>
        <Group grow justify="flex-start" align="flex-start">
          <Box size="13rem">
            <Stack gap="xs">
              <Button
                color="#006989"
                component="a"
                href="https://stoopz.golf"
                variant="outline"
                target="_blank"
                rel="noopener"
              >
                Live App
              </Button>

              <Button
                color="#006989"
                variant="filled"
                component="a"
                href="https://github.com/Stoopz-Golf-Association/golf-app"
                target="_blank"
                rel="noopener"
              >
                Learn More
              </Button>
            </Stack>
          </Box>
        </Group>
      </Container>
    );
  } else
    return (
      <>
        <Space h="xl" ref={targetRef} />
        <Container mt="xl" mb="lg" size="xl" h="100%vh">
          <Group justify="center">
            <Title c="#005C78" fw="700" size="40">
              Projects
            </Title>
          </Group>
          <Space h="lg" />
          <Space h="lg" />

          <Grid gutter="xl">
            <Grid.Col p="lg" mt="80" span={4}>
              <Flex gap="xs" align="flex-start" direction="column">
                <Title c="#E88D67" order={2}>
                  Stoopz Golf
                </Title>
                <Title c="#005C78" order={4}>
                  Golf Score Tracker
                </Title>
                <Text c="#006989">
                  The project was built in React using TypeScript and features
                  components from Mantine and utilizes Netlify's serverless
                  functions to handle authorization and data for the leaderboard
                  table.
                </Text>
              </Flex>

              <Space h="sm" />

              <Group grow justify="flex-start" align="flex-start">
                <Box size="13rem">
                  <Stack gap="xs">
                    <Button
                      color="#006989"
                      component="a"
                      href="https://stoopz.golf"
                      variant="filled"
                      target="_blank"
                      rel="noopener"
                    >
                      Live App
                    </Button>

                    <Button
                      color="#006989"
                      variant="outline"
                      component="a"
                      href="https://github.com/Stoopz-Golf-Association/golf-app"
                      target="_blank"
                      rel="noopener"
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Box>
              </Group>
            </Grid.Col>
            <Grid.Col mt="xl" mb="xl" span={8}>
              <Paper shadow="xl" withBorder>
                <Paper p="20px" bg="#006989">
                  <Image radius="sm" src="/images/Stoopz.golf.png" p="20px" />
                </Paper>
              </Paper>
            </Grid.Col>

            <Grid.Col mt="xl" mb="xl" span={8}>
              <Paper shadow="xl" withBorder>
                <Paper p="20px" bg="#E88D67">
                  <Image radius="sm" src="/images/Stoopz.golf.png" p="20px" />
                </Paper>
              </Paper>
            </Grid.Col>
            <Grid.Col p="lg" mt="80" span={4}>
              <Flex gap="xs" align="flex-start" direction="column">
                <Title c="#E88D67" order={2}>
                  Media App
                </Title>
                <Title c="#005C78" order={4}>
                  iOS App for Media
                </Title>

                <Text c="#006989">
                  This app has something to do with media. I'm pretty sure it
                  was built in Expo with React Native but I can't remember and I
                  can't open it right now.
                </Text>
              </Flex>

              <Space h="sm" />

              <Stack align="stretch" justify="flex-start" gap="xs">
                <Button
                  color="#006989"
                  component="a"
                  href="https://stoopz.golf"
                  variant="filled"
                  target="_blank"
                  rel="noopener"
                >
                  Live App
                </Button>

                <Button
                  color="#006989"
                  variant="outline"
                  component="a"
                  href="https://github.com/Stoopz-Golf-Association/golf-app"
                  target="_blank"
                  rel="noopener"
                >
                  Learn More
                </Button>
              </Stack>
            </Grid.Col>

            <Grid.Col p="lg" mt="80" span={4}>
              <Flex gap="xs" align="flex-start" direction="column">
                <Title c="#E88D67" order={2}>
                  Stoopz Golf
                </Title>
                <Title c="#005C78" order={4}>
                  Golf Score Tracker
                </Title>
                <Text c="#006989">
                  The project was built in React using TypeScript and features
                  components from Mantine and utilizes Netlify's serverless
                  functions to handle authorization and data for the leaderboard
                  table.
                </Text>
              </Flex>

              <Space h="sm" />

              <Group grow justify="flex-start" align="flex-start">
                <Box size="13rem">
                  <Stack gap="xs">
                    <Button
                      color="#006989"
                      component="a"
                      href="https://stoopz.golf"
                      variant="filled"
                      target="_blank"
                      rel="noopener"
                    >
                      Live App
                    </Button>

                    <Button
                      color="#006989"
                      variant="outline"
                      component="a"
                      href="https://github.com/Stoopz-Golf-Association/golf-app"
                      target="_blank"
                      rel="noopener"
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Box>
              </Group>
            </Grid.Col>
            <Grid.Col mt="xl" mb="xl" span={8}>
              <Paper shadow="xl" withBorder>
                <Paper p="20px" bg="#006989">
                  <Image radius="sm" src="/images/Stoopz.golf.png" p="20px" />
                </Paper>
              </Paper>
            </Grid.Col>

            <Grid.Col mt="xl" mb="xl" span={8}>
              <Paper shadow="xl" withBorder>
                <Paper p="20px" bg="#E88D67">
                  <Image radius="sm" src="/images/Stoopz.golf.png" p="20px" />
                </Paper>
              </Paper>
            </Grid.Col>
            <Grid.Col p="lg" mt="80" span={4}>
              <Flex gap="xs" align="flex-start" direction="column">
                <Title c="#E88D67" order={2}>
                  Media App
                </Title>
                <Title c="#005C78" order={4}>
                  iOS App for Media
                </Title>

                <Text c="#006989">
                  This app has something to do with media. I'm pretty sure it
                  was built in Expo with React Native but I can't remember and I
                  can't open it right now.
                </Text>
              </Flex>

              <Space h="sm" />

              <Stack align="stretch" justify="flex-start" gap="xs">
                <Button
                  color="#006989"
                  component="a"
                  href="https://stoopz.golf"
                  variant="filled"
                  target="_blank"
                  rel="noopener"
                >
                  Live App
                </Button>

                <Button
                  color="#006989"
                  variant="outline"
                  component="a"
                  href="https://github.com/Stoopz-Golf-Association/golf-app"
                  target="_blank"
                  rel="noopener"
                >
                  Learn More
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </>
    );
}
export default Projects;
