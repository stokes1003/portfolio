import { Container, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../header.module.css';
import { useMediaQuery } from '@mantine/hooks';

const sections = ['About', 'Projects', 'Contact'];

type Props = {
  scrollProjectsIntoView: (
    params?: { alignment?: 'start' | 'end' | 'center' } | undefined
  ) => void;
  scrollAboutIntoView: (
    params?: { alignment?: 'start' | 'end' | 'center' } | undefined
  ) => void;
  scrollContactIntoView: (
    params?: { alignment?: 'start' | 'end' | 'center' } | undefined
  ) => void;
};

function Header({
  scrollProjectsIntoView,
  scrollAboutIntoView,
  scrollContactIntoView,
}: Props) {
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
  const isMobile = useMediaQuery('(max-width: 590px)');
  if (isMobile) {
    return (
      <div></div>
      // <header
      //   className={classes.header}
      //   style={{
      //     position: 'sticky',
      //     top: 0,
      //   }}
      // >
      //   <Container size="md" className={classes.innerMobile}>
      //     <Group gap="xs" visibleFrom="xs">
      //       {items}
      //     </Group>
      //   </Container>
      // </header>
    );
  } else
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
        </Container>
      </header>
    );
}
export default Header;
