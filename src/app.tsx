import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { useScrollIntoView } from '@mantine/hooks';

function App() {
  const { scrollIntoView: scrollAboutIntoView, targetRef: aboutTargetRef } =
    useScrollIntoView<HTMLDivElement>({});
  const {
    scrollIntoView: scrollProjectsIntoView,
    targetRef: projectsTargetRef,
  } = useScrollIntoView<HTMLDivElement>({});
  const { scrollIntoView: scrollContactIntoView, targetRef: contactTargetRef } =
    useScrollIntoView<HTMLDivElement>({});

  return (
    <>
      <Introduction scrollIntoView={scrollAboutIntoView} />

      <Header
        scrollProjectsIntoView={scrollProjectsIntoView}
        scrollAboutIntoView={scrollAboutIntoView}
        scrollContactIntoView={scrollContactIntoView}
      />
      <About targetRef={aboutTargetRef} />
      <Projects targetRef={projectsTargetRef} />
      <Contact targetRef={contactTargetRef} />
      <Footer />
    </>
  );
}

export default App;
