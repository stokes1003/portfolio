import { Container, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../header.module.css';

const sections = ['About', 'Projects', 'Contact'];

function Header({
  scrollProjectsIntoView,
  scrollAboutIntoView,
  scrollContactIntoView,
}) {
  const [opened, { toggle }] = useDisclosure(false);

  const items = sections.map((section) => (
    <Button
      key={section}
      className={classes.link}
      onClick={() => {
        if (section === 'About') scrollAboutIntoView();
        if (section === 'Projects') scrollProjectsIntoView();
        if (section === 'Contact') scrollContactIntoView();
      }}
      color="#006989"
      variant="outline"
    >
      {section}
    </Button>
  ));

  return (
    <header
      className={classes.header}
      style={{
        position: 'sticky',
        top: 0,
      }}
    >
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
export default Header;
