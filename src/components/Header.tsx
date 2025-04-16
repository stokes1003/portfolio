import { Container, Group, Button, Burger, Box } from "@mantine/core";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";

import classes from "../header.module.css";

const sections = ["About", "Projects", "Contact"];

type Props = {
  scrollProjectsIntoView: (
    params?: { alignment?: "start" | "end" | "center" } | undefined
  ) => void;
  scrollAboutIntoView: (
    params?: { alignment?: "start" | "end" | "center" } | undefined
  ) => void;
  scrollContactIntoView: (
    params?: { alignment?: "start" | "end" | "center" } | undefined
  ) => void;
};

function Header({
  scrollProjectsIntoView,
  scrollAboutIntoView,
  scrollContactIntoView,
}: Props) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [opened, { toggle }] = useDisclosure(false);

  const handleClick = (section: string) => {
    if (section === "About") scrollAboutIntoView({ alignment: "start" });
    if (section === "Projects") scrollProjectsIntoView({ alignment: "start" });
    if (section === "Contact") scrollContactIntoView({ alignment: "start" });
    toggle();
  };

  const items = sections.map((section) => (
    <Button
      key={section}
      className={classes.link}
      onClick={() => handleClick(section)}
      color="#006989"
      variant="outline"
      fullWidth={isMobile}
    >
      {section}
    </Button>
  ));

  return (
    <header
      className={classes.header}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Container size="md">
        <Box className={classes.inner}>
          <Group justify="flex-end" w="100%">
            <Group gap={5} visibleFrom="sm">
              {items}
            </Group>

            {isMobile && (
              <>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  size="sm"
                  hiddenFrom="sm"
                />
                {opened && <Box className={classes.mobileMenu}>{items}</Box>}
              </>
            )}
          </Group>
        </Box>
      </Container>
    </header>
  );
}

export default Header;
