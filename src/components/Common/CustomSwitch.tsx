const CustomSwitch = ({
  checked = false,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) => {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={`
        relative inline-flex items-center 
        h-5 w-11 rounded-full 
        transition-colors duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-900
        ${checked ? 'bg-[#EC6B5E]' : 'bg-gray-700'}
      `}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={`
          ${checked ? 'translate-x-7 !bg-force_peach' : 'translate-x-0'}
          inline-block h-[1.35rem] w-[1.35rem] rounded-full 
          bg-white
          transition-transform duration-200 ease-in-out
        `}
      />
    </button>
  );
};

export default CustomSwitch;
