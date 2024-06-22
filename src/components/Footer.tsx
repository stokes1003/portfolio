import { Container, Group, ActionIcon, rem, Text, Button } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconChevronsUp,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

import classes from '../FooterSocial.module.css';

function Footer() {
  const [, scrollTo] = useWindowScroll();
  const isMobile = useMediaQuery('(max-width: 500px)');

  if (isMobile) {
    return (
      <div className={classes.footer}>
        <Container className={classes.inner}>
          <Group gap={10} className={classes.links} wrap="nowrap">
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              component="a"
              href="https://www.linkedin.com/in/sam-stokes-2206032a/"
              target="_blank"
              rel="noopener"
            >
              <IconBrandLinkedin
                style={{ width: rem(25), height: rem(25) }}
                stroke={1.5}
                color="#005C78"
              />
            </ActionIcon>
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              component="a"
              href="https://github.com/stokes1003"
              target="_blank"
              rel="noopener"
            >
              <IconBrandGithub
                style={{ width: rem(25), height: rem(25) }}
                stroke={1.5}
                color="#005C78"
              />
            </ActionIcon>
          </Group>
          <Group mt="-100">
            <Button color="#005C78" onClick={() => scrollTo({ y: 0 })}>
              <IconChevronsUp />
            </Button>
          </Group>
        </Container>
      </div>
    );
  }
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.linkedin.com/in/sam-stokes-2206032a/"
            target="_blank"
            rel="noopener"
          >
            <IconBrandLinkedin
              style={{ width: rem(25), height: rem(25) }}
              stroke={1.5}
              color="#005C78"
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://github.com/stokes1003"
            target="_blank"
            rel="noopener"
          >
            <IconBrandGithub
              style={{ width: rem(25), height: rem(25) }}
              stroke={1.5}
              color="#005C78"
            />
          </ActionIcon>
        </Group>
        <Group mt="-100">
          <Button color="#005C78" onClick={() => scrollTo({ y: 0 })}>
            <IconChevronsUp />
          </Button>
        </Group>
        <Group>
          <Text size="xs" c="#005C78">
            SAM STOKES @2024
          </Text>
        </Group>
      </Container>
    </div>
  );
}
export default Footer;
