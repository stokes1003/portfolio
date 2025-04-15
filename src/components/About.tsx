import {
  Text,
  Title,
  Container,
  Stack,
  Image,
  Space,
  Group,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { TechCard } from "./TechCard";

export const techStackLeft = [
  {
    label: "JavaScript",
    href: "https://www.javascript.com/",
    src: "/images/ProgrammingIcons/javascript-icon.webp",
  },
  {
    label: "EXPO",
    href: "https://expo.dev/",
    src: "/images/ProgrammingIcons/Expo-Logo.webp",
  },
  {
    label: "MongoDB",
    href: "https://www.mongodb.com/",
    src: "/images/ProgrammingIcons/MongoDB-Icon.png",
  },
];
const techStackMiddle = [
  {
    label: "HTML5",
    href: "https://html.com/html5/",
    src: "/images/ProgrammingIcons/HTML5-Icon.png",
  },
  {
    label: "TypeScript",
    href: "https://www.typescriptlang.org/",
    src: "/images/ProgrammingIcons/TypeScript-Icon.webp",
  },
  {
    label: "SQL",
    href: "https://en.wikipedia.org/wiki/SQL",
    src: "/images/ProgrammingIcons/SQL.png",
  },
  {
    label: "REACT",
    href: "https://react.dev/",
    src: "/images/ProgrammingIcons/React-icon.png",
  },
];
const techStackRight = [
  {
    label: "CSS",
    href: "https://www.w3.org/Style/CSS/Overview.en.html",
    src: "/images/ProgrammingIcons/CSS3-icon.png",
  },
  {
    label: "AWS",
    href: "https://aws.amazon.com/",
    src: "/images/ProgrammingIcons/Amazon-Web-Services-AWS-Logo.png",
  },
  {
    label: "NODE.JS",
    href: "https://nodejs.org/en",
    src: "/images/ProgrammingIcons/nodeJS-icon.png",
  },
];

type Props = {
  targetRef: React.RefObject<HTMLDivElement>;
};

function About({ targetRef }: Props) {
  const isMobile = useMediaQuery("(max-width: 928px)");

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
          <Text c="#005C78" size="md" w="350">
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
            {techStackLeft.map((tech) => (
              <TechCard
                key={tech.label}
                label={tech.label}
                src={tech.src}
                href={tech.href}
              />
            ))}
          </Stack>
          <Stack h="100%">
            {techStackMiddle.map((tech) => (
              <TechCard
                key={tech.label}
                label={tech.label}
                src={tech.src}
                href={tech.href}
              />
            ))}
          </Stack>
          <Stack h="100%">
            {techStackRight.map((tech) => (
              <TechCard
                key={tech.label}
                label={tech.label}
                src={tech.src}
                href={tech.href}
              />
            ))}
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
        <Group gap="lg">
          <Stack justify="start" w="450" align="center">
            <Image h="300" w="300" src="/images/AI Headshot.png" />
            <Text c="#005C78">
              I have a passion for building. I love the planning, the problem
              solving, and the learning that comes with taking a project from
              idea to end product. As a software developer, I have utilized
              React, JavaScript and TypeScript as the basic building blocks to
              create. But the beauty of development is that the learning never
              stops and new tools are constantly being added.
            </Text>
          </Stack>

          <Group justify="center" w="450">
            <Stack h="100%">
              {techStackLeft.map((tech) => (
                <TechCard
                  key={tech.label}
                  label={tech.label}
                  src={tech.src}
                  href={tech.href}
                />
              ))}
            </Stack>
            <Stack h="100%">
              {techStackMiddle.map((tech) => (
                <TechCard
                  key={tech.label}
                  label={tech.label}
                  src={tech.src}
                  href={tech.href}
                />
              ))}
            </Stack>
            <Stack h="100%">
              {techStackRight.map((tech) => (
                <TechCard
                  key={tech.label}
                  label={tech.label}
                  src={tech.src}
                  href={tech.href}
                />
              ))}
            </Stack>
          </Group>
        </Group>
      </Container>
    );
}

export default About;
