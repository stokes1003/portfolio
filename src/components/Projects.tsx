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
import { RefObject } from 'react';

function Projects({ targetRef }: { targetRef: RefObject<HTMLDivElement> }) {
  const isMobile = useMediaQuery('(max-width: 1225px)');
  if (isMobile) {
    return (
      <Container h="100%">
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
            Golf League App
          </Title>
          <Text c="#006989" size="md">
            The stoopz.golf app is a dynamic leaderboard platform that enables
            friends to track and compare their golf scores in real-time. Built
            using React Native and TypeScript with the Mantine library, the app
            features a user-friendly interface and seamless data integration.
            The app leverages AWS RDS to host a PostgreSQL relational database,
            ensuring robust and scalable performance.
          </Text>

          <Paper p="10px" mb="sm" bg="#005C78">
            <Image radius="md" src="/images/Stoopz.golf.png" p="5px" />
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
            Restaurant Search App
          </Title>
          <Title c="#005C78" order={4}>
            For iOS and Android
          </Title>

          <Text c="#006989" size="md">
            This app was built using React Native with Expo. It utilizes the
            Yelp API to enable users to easily find restaurants and their
            ratings across different price ranges.
          </Text>

          <Paper
            p="10px"
            mb="sm"
            bg="#E88D67"
            component="a"
            href="https://github.com/stokes1003/Web-Mapping-Platform/tree/main"
            target="_blank"
            rel="noopener"
            shadow="xl"
            withBorder
            w="100%"
          >
            <Group align="center" justify="center" gap="xl" grow>
              <Image radius="lg" h="100%" src="/images/FoodApp/FoodApp3.png" />
              <Image radius="lg" h="100%" src="/images/FoodApp/FoodApp1.png" />
              <Image radius="lg" h="100%" src="/images/FoodApp/FoodApp2.png" />
            </Group>
          </Paper>
        </Flex>
        <Group grow justify="flex-start" align="flex-start">
          <Box size="13rem">
            <Stack gap="xs">
              <Button
                color="#006989"
                variant="filled"
                component="a"
                href="https://github.com/stokes1003/food"
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
            Map Searcher
          </Title>
          <Title c="#005C78" order={4}>
            Detailed Location Search Engine
          </Title>
          <Text c="#006989" size="md">
            This project was built using React and TypeScript, incorporating the
            Google Maps API. The app enables users to search for detailed maps
            of any location around the world.
          </Text>

          <Paper
            p="10px"
            mb="sm"
            bg="#005C78"
            component="a"
            href="https://github.com/stokes1003/Web-Mapping-Platform/tree/main"
            target="_blank"
            rel="noopener"
            shadow="xl"
            withBorder
          >
            <Image radius="md" src="/images/LocationSearch.png" p="5px" />
          </Paper>
        </Flex>
        <Group grow justify="flex-start" align="flex-start">
          <Box size="13rem">
            <Stack gap="xs">
              <Button
                color="#006989"
                variant="filled"
                component="a"
                href="https://github.com/stokes1003/Web-Mapping-Platform/tree/main"
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
  }
  return (
    <Container ref={targetRef} h="100%" fluid px="110">
      <Stack h={100} align="center" justify="center" gap="sm">
        <Title c="#005C78" fw="700" size="40">
          Projects
        </Title>
      </Stack>
      <Space h="lg" />
      <Space h="lg" />

      <Grid gutter="xl">
        <Grid.Col p="lg" mt="80" span={4}>
          <Flex gap="xs" align="flex-start" direction="column">
            <Title c="#E88D67" order={2}>
              Stoopz Golf
            </Title>
            <Title c="#005C78" order={4}>
              Golf League App
            </Title>
            <Text c="#006989">
              The stoopz.golf app is a dynamic leaderboard platform that enables
              friends to track and compare their golf scores in real-time. Built
              using React Native and TypeScript with the Mantine library, the
              app features a user-friendly interface and seamless data
              integration. The app leverages AWS RDS to host a PostgreSQL
              relational database, ensuring robust and scalable performance.
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
          <Paper
            shadow="xl"
            withBorder
            component="a"
            href="https://stoopz.golf"
            target="_blank"
            rel="noopener"
          >
            <Paper p="20px" bg="#006989">
              <Image radius="sm" src="/images/Stoopz.golf.png" p="20px" />
            </Paper>
          </Paper>
        </Grid.Col>

        <Grid.Col mt="xl" mb="xl" span={8}>
          <Paper
            shadow="xl"
            withBorder
            component="a"
            href="https://github.com/stokes1003/food"
            target="_blank"
            rel="noopener"
          >
            <Paper p="20px" bg="#E88D67">
              <Group align="center" justify="center" gap="xl" grow>
                <Image
                  radius="lg"
                  h="400"
                  w="300"
                  src="/images/FoodApp/FoodApp3.png"
                />
                <Image
                  radius="lg"
                  h="400"
                  w="300"
                  src="/images/FoodApp/FoodApp1.png"
                />
                <Image
                  radius="lg"
                  h="400"
                  w="300"
                  src="/images/FoodApp/FoodApp2.png"
                />
              </Group>
            </Paper>
          </Paper>
        </Grid.Col>
        <Grid.Col p="lg" mt="80" span={4}>
          <Flex gap="xs" align="flex-start" direction="column">
            <Title c="#E88D67" order={2}>
              Restaurant Search App
            </Title>
            <Title c="#005C78" order={4}>
              For iOS and Android
            </Title>

            <Text c="#006989">
              This app was built using React Native with Expo. It utilizes the
              Yelp API to enable users to easily find restaurants and their
              ratings across different price ranges.
            </Text>
          </Flex>

          <Space h="sm" />

          <Stack align="stretch" justify="flex-start" gap="xs">
            <Button
              color="#006989"
              variant="outline"
              component="a"
              href="https://github.com/stokes1003/food"
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
              Map Searcher
            </Title>
            <Title c="#005C78" order={4}>
              Detailed Location Search Engine
            </Title>
            <Text c="#006989">
              This project was built using React and TypeScript, incorporating
              the Google Maps API. The app enables users to search for detailed
              maps of any location around the world.
            </Text>
          </Flex>

          <Space h="sm" />

          <Group grow justify="flex-start" align="flex-start">
            <Box size="13rem">
              <Stack gap="xs">
                <Button
                  color="#006989"
                  variant="outline"
                  component="a"
                  href="https://github.com/stokes1003/Web-Mapping-Platform/tree/main"
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
          <Paper
            component="a"
            href="https://github.com/stokes1003/Web-Mapping-Platform/tree/main"
            target="_blank"
            rel="noopener"
            shadow="xl"
            withBorder
          >
            <Paper p="20px" bg="#006989">
              <Image radius="lg" src="/images/LocationSearch.png" p="20px" />
            </Paper>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
export default Projects;
