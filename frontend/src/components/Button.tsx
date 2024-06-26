import clsx from 'clsx';

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    [key: string]: any;
  }

export const Button = ({ className, children, ...props }: ButtonProps) => {
    const baseClass = 'rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';

    return (
        <button className={clsx(baseClass, className)} {...props}>
            {children}
        </button>
    );
};
