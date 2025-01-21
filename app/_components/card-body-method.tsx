interface CardBodyMethodProps {
  numberMethod: string;
  title: string;
  description: string;
}

const CardBodyMethod = ({
  numberMethod,
  title,
  description,
}: CardBodyMethodProps) => {
  return (
    <div className="flex flex-col justify-center items-center border-b-[1px] p-2 border-[#9C9C9C] border-opacity-15 gap-2 md:flex-row">
      <div className="flex w-full px-2 items-center gap-3 md:p-0 md:max-w-[260px]">
        <span className="min-w-[50px] h-[50px] rounded-sm flex items-center justify-center text-white bg-[#8A7A30]">
          {numberMethod}
        </span>
        <h3 className="text-black text-base">{title}</h3>
      </div>
      <p className="text-sm w-full text-black p-2">{description}</p>
    </div>
  );
};

export default CardBodyMethod;
