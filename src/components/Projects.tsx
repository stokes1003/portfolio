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
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { RefObject } from "react";

function Projects({ targetRef }: { targetRef: RefObject<HTMLDivElement> }) {
  const isMobile = useMediaQuery("(max-width: 1225px)");
  if (isMobile) {
    return (
      <Container h="100%">
        <Flex mt="xl" gap="xs" align="center" direction="column">
          <Group justify="center">
            <Title c="#005C78" fw="700" size="40">
              Projects
            </Title>
          </Group>
          <Title c="#E88D67" order={2}>
            Bud-dy
          </Title>
          <Title c="#005C78" order={4}>
            Cannabis Statup App
          </Title>
          <Text c="#006989" size="md">
            Bud-dy is a soon-to-launch cannabis app. As it has not been released
            yet, specific details remain confidential. Built with React Native,
            TypeScript, Supabase, Clerk, and Expo, I developed the majority of
            the front-end components for this startup app. I also integrated
            Google Maps and Google Places to enhance location-based features. My
            work focused on creating a responsive, intuitive interface that
            brings this vision to life.
          </Text>

          <Paper
            p="10px"
            mb="sm"
            bg="#005C78"
            rel="noopener"
            shadow="xl"
            withBorder
          >
            <Group align="center" justify="center" gap="xl" grow>
              <Image radius="lg" h="100%" src="/images/Buddy/Home.PNG" />
              <Image radius="lg" h="100%" src="/images/Buddy/Search.PNG" />
              <Image radius="lg" h="100%" src="/images/Buddy/Account.PNG" />
            </Group>
          </Paper>
        </Flex>

        <Flex mt="xl" gap="xs" align="center" direction="column">
          <Title c="#E88D67" order={2}>
            Turbo Robot
          </Title>
          <Title c="#005C78" order={4}>
            Peer to Peer Chat App with AI Integration
          </Title>

          <Text c="#006989" size="md">
            This app was built using React, Next.js, and TypeScript, and
            incorporates Tailwind CSS for styling, Clerk for authentication, and
            Supabase for database storage. The app allows users to create chat
            rooms and send messages to one another in real-time. It also
            integrates ChatGPT via OpenAI's API, enabling conversational AI
            responses within the chat rooms, adding an interactive and
            intelligent assistant for users.
          </Text>

          <Paper
            p="10px"
            mb="sm"
            bg="#E88D67"
            component="a"
            href="https://www.turborobot.live/chat"
            target="_blank"
            rel="noopener"
            shadow="xl"
            withBorder
            w="100%"
          >
            <Group align="center" justify="center" gap="xl" grow>
              <Image radius="sm" src="/images/TurboRobot.png" p="20px" />
            </Group>
          </Paper>
        </Flex>
        <Group grow justify="flex-start" align="flex-start">
          <Box size="13rem">
            <Stack gap="xs">
              <Button
                color="#006989"
                component="a"
                href="https://www.turborobot.live/chat"
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
                href="https://github.com/stokes1003/chat-app"
                target="_blank"
                rel="noopener"
              >
                Learn More
              </Button>
            </Stack>
          </Box>
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
            Movie Night
          </Title>
          <Title c="#005C78" order={4}>
            Helps users pick and rate movies together
          </Title>

          <Text c="#006989" size="md">
            Movie Night makes it easy for friends to choose what to watch by
            suggesting movies based on shared preferences. Users can create
            watchlists, rate films, and vote on options in real time. Built with
            React and TypeScript using Mantine for the UI, the app leverages the
            TMDB API for movie data and a MongoDB backend powered by Netlify
            serverless functions.
          </Text>

          <Paper
            p="10px"
            mb="sm"
            bg="#E88D67"
            component="a"
            href="https://booshnight.netlify.app/"
            target="_blank"
            rel="noopener"
            shadow="xl"
            withBorder
            w="100%"
          >
            <Group align="center" justify="center" gap="xl" grow>
              <Image radius="md" src="/images/booshNight.png" p="5px" />
            </Group>
          </Paper>
        </Flex>
        <Group grow justify="flex-start" align="flex-start">
          <Box size="13rem">
            <Stack gap="xs">
              <Button
                color="#006989"
                component="a"
                href="https://booshnight.netlify.app/"
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
                href="https://github.com/stokes1003/boosh-night"
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
              Bud-dy
            </Title>
            <Title c="#005C78" order={4}>
              Cannabis Statup App
            </Title>
            <Text c="#006989">
              Bud-dy is a soon-to-launch cannabis app. As it has not been
              released yet, specific details remain confidential. Built with
              React Native, TypeScript, Supabase, Clerk, and Expo, I developed
              the majority of the front-end components for this startup app. I
              also integrated Google Maps and Google Places to enhance
              location-based features. My work focused on creating a responsive,
              intuitive interface that brings this vision to life.
            </Text>
          </Flex>

          <Space h="sm" />
        </Grid.Col>
        <Grid.Col mt="xl" mb="xl" span={8}>
          <Paper rel="noopener" shadow="xl" withBorder>
            <Paper p="20px" bg="#006989">
              <Group align="center" justify="center" gap="xl" grow>
                <Image radius="lg" h="100%" src="/images/Buddy/Home.PNG" />
                <Image radius="lg" h="100%" src="/images/Buddy/Search.PNG" />
                <Image radius="lg" h="100%" src="/images/Buddy/Account.PNG" />
              </Group>
            </Paper>
          </Paper>
        </Grid.Col>

        <Grid.Col mt="xl" mb="xl" span={8}>
          <Paper
            shadow="xl"
            withBorder
            component="a"
            href="https://booshnight.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            <Paper p="20px" bg="#E88D67">
              <Image radius="sm" src="/images/booshNight.png" p="20px" />
            </Paper>
          </Paper>
        </Grid.Col>
        <Grid.Col p="lg" mt="80" span={4}>
          <Flex gap="xs" align="flex-start" direction="column">
            <Title c="#E88D67" order={2}>
              Movie Night
            </Title>
            <Title c="#005C78" order={4}>
              Helps users pick and rate movies together
            </Title>

            <Text c="#006989">
              Movie Night makes it easy for friends to choose what to watch by
              suggesting movies based on shared preferences. Users can create
              watchlists, rate films, and vote on options in real time. Built
              with React and TypeScript using Mantine for the UI, the app
              leverages the TMDB API for movie data and a MongoDB backend
              powered by Netlify serverless functions.
            </Text>
          </Flex>

          <Space h="sm" />

          <Stack align="stretch" justify="flex-start" gap="xs">
            <Button
              color="#006989"
              component="a"
              href="https://booshnight.netlify.app/"
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
              href="https://github.com/stokes1003/boosh-night"
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
            href="https://www.turborobot.live/chat"
            target="_blank"
            rel="noopener"
          >
            <Paper p="20px" bg="#E88D67">
              <Image radius="sm" src="/images/TurboRobot.png" p="20px" />
            </Paper>
          </Paper>
        </Grid.Col>
        <Grid.Col p="lg" mt="80" span={4}>
          <Flex gap="xs" align="flex-start" direction="column">
            <Title c="#E88D67" order={2}>
              TurboRobot Chat App
            </Title>
            <Title c="#005C78" order={4}>
              Peer to Peer Chat App with AI Integration
            </Title>

            <Text c="#006989">
              This app was built using React, Next.js, and TypeScript, and
              incorporates Tailwind CSS for styling, Clerk for authentication,
              and Supabase for database storage. The app allows users to create
              chat rooms and send messages to one another in real-time. It also
              integrates ChatGPT via OpenAI's API, enabling conversational AI
              responses within the chat rooms, adding an interactive and
              intelligent assistant for users.
            </Text>
          </Flex>

          <Space h="sm" />

          <Stack align="stretch" justify="flex-start" gap="xs">
            <Button
              color="#006989"
              component="a"
              href="https://www.turborobot.live/chat"
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
              href="https://github.com/stokes1003/chat-app"
              target="_blank"
              rel="noopener"
            >
              Learn More
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
export default Projects;
