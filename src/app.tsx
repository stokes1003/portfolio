import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { useMediaQuery, useScrollIntoView } from '@mantine/hooks';
import { Stack } from '@mantine/core';

function App() {
  const isMobile = useMediaQuery('(max-width: 630px)');

  const { scrollIntoView: scrollAboutIntoView, targetRef: aboutTargetRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 36,
    });
  const {
    scrollIntoView: scrollProjectsIntoView,
    targetRef: projectsTargetRef,
  } = useScrollIntoView<HTMLDivElement>({
    offset: 36,
  });
  const { scrollIntoView: scrollContactIntoView, targetRef: contactTargetRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 36,
    });

  return (
    <>
      <Introduction scrollIntoView={scrollAboutIntoView} />

      <Header
        scrollProjectsIntoView={scrollProjectsIntoView}
        scrollAboutIntoView={scrollAboutIntoView}
        scrollContactIntoView={scrollContactIntoView}
      />
      <Stack gap={isMobile ? 100 : 70}>
        <About targetRef={aboutTargetRef} />
        <Projects targetRef={projectsTargetRef} />
        <Contact targetRef={contactTargetRef} />
      </Stack>
      <Footer />
    </>
  );
}

export default App;
