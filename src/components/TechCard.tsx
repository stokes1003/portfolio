import { Paper, Stack, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type TechCardProps = {
  label: string;
  src: string;
  href: string;
};

export const TechCard = ({ label, src, href }: TechCardProps) => {
  const isMobile = useMediaQuery("(max-width: 928px)");
  return (
    <Paper
      h={isMobile ? "90" : "120"}
      w={isMobile ? "90" : "120"}
      component="a"
      href={href}
      shadow="lg"
      radius="xl"
      withBorder
      p="xl"
      target="_blank"
      rel="noopener"
      style={{ zIndex: 0 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(0.98)";
        e.currentTarget.style.backgroundColor = "#f1f1f1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.backgroundColor = "white";
      }}
    >
      <Stack justify="center" align="center" gap="xs">
        <Image
          w={isMobile ? "18" : "50"}
          h={isMobile ? "5" : "30"}
          src={src}
          alt={label}
        />
        <Text c="#005C78" size={isMobile ? "xs" : "sm"} fw={500}>
          {label}
        </Text>
      </Stack>
    </Paper>
  );
};
