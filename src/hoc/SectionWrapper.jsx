import { styles } from "../styles";

const SectionWrapper = (Component) =>
  function HOC() {
    return (
      <section
        className={`${styles.padding} max-w-7xl mx-auto relative flex flex-col items-center justify-center`}
      >
        <Component />
      </section>
    );
  };

export default SectionWrapper;
