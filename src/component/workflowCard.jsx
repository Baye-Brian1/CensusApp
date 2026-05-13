export default function WorkflowCard({
  hasRightBorder = true,
  title,
  text,
  value,
}) {
  return (
    <div className={`${hasRightBorder? 'border-r':''} flex mb-4 gap-3 p-3 items-start`}>
        <div className="rounded-[50%] p-4 w-10 h-10 flex text-white text-md items-center justify-center bg-[#111]">
            {value}
        </div>
  
      <div className="flex flex-col">
        <h1 className="text-[#111] mb-2 text-lg">{title}</h1>
        <p className="text-gray-500 text-sm">{text}</p>
      </div>
    </div>
  );
}
