interface Props {
  text: string;
}

const Tag: React.FC<Props> = ({ text }) => {
  return (
    <div className="inline-flex bg-slate-800 text-white dark:bg-zinc-800 items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
      #{text}
    </div>
  );
};

export default Tag;
