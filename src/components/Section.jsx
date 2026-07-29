
const Section = ({ children, className = "" }) => {
  return (
    <section className={`py-20 md:py-24 ${className}`}>
      {children}
    </section>
  );
};

export default Section;