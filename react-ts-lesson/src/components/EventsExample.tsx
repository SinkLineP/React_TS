import React, {FC, useState} from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG!")
  }

  const dragWidthPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP")
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type={"text"}/>
      <button onClick={clickHandler}>Click me!</button>
      <div onDrag={dragHandler} draggable style={{width: 100, height: 100, background: "green"}}> </div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWidthPreventHandler}
        style={{width: 100, height: 100, background: isDrag ? "yellow" : "green", marginTop: 15}}
      > </div>
    </div>
  );
};

export default EventsExample;