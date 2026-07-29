
const SectionTitle = ({
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div
      className={`mb-12 ${
        center ? "text-center" : "text-left"
      }`}
    >
      <span className="text-orange-500 font-semibold tracking-widest uppercase">
        DivyaDarshan
      </span>

      <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;