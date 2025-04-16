import {
  Text,
  Container,
  Title,
  Stack,
  Image,
  Button,
  Paper,
  Group,
  Space,
  Box,
  Flex,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { RefObject } from "react";

const projects = [
  {
    title: "Bud-dy",
    subtitle: "Cannabis Startup App",
    description:
      "Bud-dy is a soon-to-launch cannabis app. As it has not been released yet, specific details remain confidential. Built with React Native, TypeScript, Supabase, Clerk, and Expo, I developed the majority of the front-end components for this startup app. I also integrated Google Maps and Google Places to enhance location-based features. My work focused on creating a responsive, intuitive interface that brings this vision to life.",
    images: [
      "/images/Buddy/Home.PNG",
      "/images/Buddy/Search.PNG",
      "/images/Buddy/Account.PNG",
    ],
  },
  {
    title: "Fairway Fleas Season",
    subtitle: "Golf League App",
    description:
      "Fairway Fleas is a dynamic leaderboard app designed for golf enthusiasts to track and compare scores with friends throughout the season. Built with React and TypeScript, and powered by MongoDB, the app delivers a seamless user experience with real-time data integration. The app is designed to be user-friendly and visually appealing, making it a perfect companion for any golf season.",
    images: ["/images/FairwayFleas.png"],
    liveLink: "https://fairwayfleas.netlify.app/",
    githubLink: "https://github.com/stokes1003/golf-season",
  },
  {
    title: "Movie Night",
    subtitle: "Helps users pick and rate movies together",
    description:
      "Movie Night makes it easy for friends to choose what to watch by suggesting movies based on shared preferences. Users can create watchlists, rate films, and vote on options in real time. Built with React and TypeScript using Mantine for the UI, the app leverages the TMDB API for movie data and a MongoDB backend powered by Netlify serverless functions.",
    images: ["/images/booshNight.png"],
    liveLink: "https://booshnight.netlify.app/",
    githubLink: "https://github.com/stokes1003/boosh-night",
  },
  {
    title: "Turbo Robot",
    subtitle: "Peer to Peer Chat App with AI Integration",
    description:
      "This app was built using React, Next.js, and TypeScript, and incorporates Tailwind CSS for styling, Clerk for authentication, and Supabase for database storage. The app allows users to create chat rooms and send messages to one another in real-time. It also integrates ChatGPT via OpenAI's API, enabling conversational AI responses within the chat rooms, adding an interactive and intelligent assistant for users.",
    images: ["/images/TurboRobot.png"],
    liveLink: "https://www.turborobot.live/chat",
    githubLink: "https://github.com/stokes1003/chat-app",
  },
];

function Projects({ targetRef }: { targetRef: RefObject<HTMLDivElement> }) {
  const isMobile = useMediaQuery("(max-width: 1225px)");
  if (isMobile) {
    return (
      <Container h="100%">
        <Flex mt="xl" gap="xs" align="center" direction="column">
          <Stack h={100} align="center" justify="center" gap="sm">
            <Title c="#005C78" fw="700" size="40">
              Projects
            </Title>
          </Stack>

          <>
            <Space h="lg" />
            <Space h="lg" />
          </>

          {projects.map((project, index) => (
            <Stack key={index} mt="xl" gap="xs" align="center">
              <Title c="#E88D67" order={2}>
                {project.title}
              </Title>
              <Title c="#005C78" order={4}>
                {project.subtitle}
              </Title>
              <Text c="#006989" size="md">
                {project.description}
              </Text>

              <Paper
                p="10px"
                mb="sm"
                bg={index % 2 === 0 ? "#005C78" : "#E88D67"}
                shadow="xl"
                withBorder
                component="a"
                href={project.liveLink}
              >
                <Group align="center" justify="center" gap="xl" grow>
                  {project.images.map((img, imgIndex) => (
                    <Image key={imgIndex} radius="sm" h="100%" src={img} />
                  ))}
                </Group>
              </Paper>

              {project.liveLink && project.githubLink && (
                <Group grow justify="flex-start" align="flex-start">
                  <Box size="13rem">
                    <Stack gap="xs">
                      <Button
                        color="#006989"
                        component="a"
                        href={project.liveLink}
                        variant="outline"
                        w={200}
                        target="_blank"
                        rel="noopener"
                      >
                        Live App
                      </Button>
                      <Button
                        color="#006989"
                        variant="filled"
                        component="a"
                        w={200}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener"
                      >
                        Learn More
                      </Button>
                    </Stack>
                  </Box>
                </Group>
              )}
            </Stack>
          ))}
        </Flex>
      </Container>
    );
  }
  return (
    <Container ref={targetRef} h="100%" fluid px="110">
      <Stack h={100} align="center" justify="center">
        <Title c="#005C78" fw="700" size="40">
          Projects
        </Title>
      </Stack>

      <Stack gap="60px">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <Group key={`project-${index}`}>
              {isEven ? (
                <Paper withBorder shadow="xl" p="sm" radius="md">
                  <Group>
                    <Stack flex="1" gap="xs">
                      <Stack
                        gap="xs"
                        align={isEven ? "flex-start" : "flex-end"}
                      >
                        <Title c="#E88D67" order={2}>
                          {project.title}
                        </Title>
                        <Title c="#005C78" order={4}>
                          {project.subtitle}
                        </Title>
                        <Text c="#006989">{project.description}</Text>
                      </Stack>

                      {project.liveLink && project.githubLink && (
                        <Stack align="stretch" justify="flex-start" gap="xs">
                          <Button
                            color="#006989"
                            component="a"
                            href={project.liveLink}
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
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener"
                          >
                            Learn More
                          </Button>
                        </Stack>
                      )}
                    </Stack>
                    <Stack flex="2">
                      <Paper
                        p="10px"
                        bg="#005C78"
                        shadow="xl"
                        withBorder
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(0.99)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                        style={{ cursor: "pointer" }}
                        component="a"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener"
                      >
                        {project.images ? (
                          <Group align="center" justify="center" gap="xl" grow>
                            {project.images.map((imgSrc, imgIndex) => (
                              <Image
                                key={imgIndex}
                                radius="sm"
                                h="100%"
                                src={imgSrc}
                              />
                            ))}
                          </Group>
                        ) : (
                          <Image radius="sm" src={project.images} p="20px" />
                        )}
                      </Paper>
                    </Stack>
                  </Group>
                </Paper>
              ) : (
                <>
                  <Paper withBorder shadow="xl" p="sm" radius="md">
                    <Group>
                      <Stack flex="2">
                        <Paper
                          p="10px"
                          bg="#E88D67"
                          withBorder
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(0.99)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                          style={{ cursor: "pointer" }}
                          component="a"
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener"
                        >
                          {project.images ? (
                            <Group
                              align="center"
                              justify="center"
                              gap="xl"
                              grow
                            >
                              {project.images.map((imgSrc, imgIndex) => (
                                <Image
                                  key={imgIndex}
                                  radius="sm"
                                  h="100%"
                                  src={imgSrc}
                                />
                              ))}
                            </Group>
                          ) : (
                            <Image radius="sm" src={project.images} p="20px" />
                          )}
                        </Paper>
                      </Stack>
                      <Stack flex="1" gap="xs">
                        <Stack gap="xs" align="flex-start">
                          <Title c="#E88D67" order={2}>
                            {project.title}
                          </Title>
                          <Title c="#005C78" order={4}>
                            {project.subtitle}
                          </Title>
                          <Text c="#006989">{project.description}</Text>
                        </Stack>

                        {project.liveLink && project.githubLink && (
                          <Stack align="stretch" justify="flex-start" gap="xs">
                            <Button
                              color="#006989"
                              component="a"
                              href={project.liveLink}
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
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener"
                            >
                              Learn More
                            </Button>
                          </Stack>
                        )}
                      </Stack>
                    </Group>
                  </Paper>
                </>
              )}
            </Group>
          );
        })}
      </Stack>
    </Container>
  );
}
export default Projects;
