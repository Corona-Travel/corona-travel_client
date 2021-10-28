import { Component, MouseEvent } from "react";

type MarkerProps = {
  name: string;
  onClick?: typeof defaultHandler;
};

const defaultHandler = (event: MouseEvent) => {
  event.preventDefault();
}

const Marker = (props: MarkerProps) => {
  const {
    name,
    onClick = defaultHandler,
  } = props;

  return (
    <div className="bg-pink-400 rounded-full border-2 border-fuchsia-600 w-max h-6 hover:cursor-pointer py-0.5 px-1" onClick={onClick}>{name}</div>
  )
}

export default Marker
