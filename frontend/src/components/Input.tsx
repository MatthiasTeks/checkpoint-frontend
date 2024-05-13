interface InputProps {
    className?: string;
    name: string;
    label: string;
    [key: string]: any;
}

export default function Input({className, name, label, ...props}: InputProps) {
    const baseClass = 'block w-full border-0 outline-none shadow-sm py-2 px-2 placeholder:text-gray-400 sm:text-sm rounded-md  text-perception-black-800 ring-1 ring-inset ring-gray-300 sm:leading-6';

    return (
      <div className={className}>
        <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-2">
          <input
            name={name}
            id="email"
            className={baseClass}
            {...props}
          />
        </div>
      </div>
    )
  }