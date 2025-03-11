import { JSX } from "react";
import Button from "../common/Button";
import { IHeadingProps } from "../../types";
const Heading: ({
  title,
  ButtonClick,
  ButtonText,
}: IHeadingProps) => JSX.Element = ({
  title,
  ButtonClick,
  ButtonText,
}: IHeadingProps): JSX.Element => {
  return (
    <div className="flex gap-4 my-2 justify-between">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">{title}</h1>
        <Button
          Text={ButtonText}
          onClick={ButtonClick}
          className={" h-[3rem]"}
        />
      </div>
      <div>
        <h3 className="text-xl">Made By Kartik Gothwal</h3>
        <a
          href="https://kartik-gothwal.vercel.app/"
          target="_blank"
          className="text-blue-500 underline hover:text-blue-300 text-lg"
        >
          Porfolio Link
        </a>
      </div>
    </div>
  );
};

export default Heading;
