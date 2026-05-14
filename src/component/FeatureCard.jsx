export default function FeatureCard({ icon: Icon, text, title }) {
  return (
    <div className="border border-gray-300 rounded-sm px-4 py-8">
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
