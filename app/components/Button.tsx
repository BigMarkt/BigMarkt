import { Link } from "react-router";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "ghost" | "white";
    size?: "sm" | "md" | "lg";
    to?: string;
    href?: string;
    className?: string;
    onClick?: () => void;
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    to,
    href,
    className = "",
    onClick
}: ButtonProps) {
    const baseClasses = "rounded-md font-medium transition-colors inline-block no-underline";

    const variantClasses = {
        primary: "bg-red-600 text-white hover:bg-red-700",
        ghost: "border-2 border-red-600 text-red-600 hover:bg-red-50",
        white: "bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 shadow-lg hover:shadow-xl"
    };

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3",
        lg: "px-8 py-3 text-lg"
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes} onClick={onClick}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
}
