

const Button = ({ children, className = "", onClick, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`inline-flex p-3 h-11 px-8 items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 ${className}`}
        >
            {children}
        </button>
    );
};

export { Button };