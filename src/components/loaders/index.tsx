type Props = {
  color?: string;
  innerColor?: string;
};
const LoadingSpinner = ({ color, innerColor }: Props) => (
  <div className="relative h-9 w-9 sm:h-16 sm:w-16 ">
    <div
      className={`animate-load-spin rounded-full border-4 border-r-transparent border-b-transparent ${
        color || "border-blue-main"
      } border-solid h-full w-full absolute `}
    />

    <div
      className={` rounded-full border-4  ${
        innerColor || "border-blue-main/30"
      } border-solid h-full w-full`}
    />
  </div>
);

export { LoadingSpinner };
