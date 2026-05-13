export default function FeatureCard({
  hasRightBorder = true,
  icon: Icon,
  text,
  title,
}) {
  return (
    <div
      className={`
        ${hasRightBorder ? "border-r" : ""}
        p-6 flex flex-col min-h-60 `}
    >
      <div className="icon">
        <Icon className="w-8 h-8 mb-4 font-bold text-[#111]" />
      </div>
      <div className="info">
        <h1 className="text-lg mb-2 text-[#111]">{title}</h1>
        <p className="text-sm mt-auto  text-gray-500">{text}</p>
      </div>
    </div>
  );
}
