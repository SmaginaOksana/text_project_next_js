import Image from "next/image";

const ErrorMessage = () => {
  return (
    <Image
      src="/error.gif"
      alt="error"
      width={350}
      height={350}
      className="m-auto block"
    />
  );
};

export default ErrorMessage;
