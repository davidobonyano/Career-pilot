import { cn } from "../../utils/Cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

export function Button({
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        "rounded-2xl bg-[#4CA771] text-white hover:bg-[#013237] font-medium transition-colors focus:outline-none",
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
