interface SelectProps {
    className?: string;
    name: string;
    options: { name: string }[];
    defaultValue?: string;
    [key: string]: any;
}

export default function Select({className, name, options, defaultValue, ...props}: SelectProps) {
    return (
        <div className={className}>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                Location
            </label>
            <select
                name={name}
                className="mt-2 block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={defaultValue}
                {...props}
            >
                {options.map(option => (
                    <option key={option.name} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
  }