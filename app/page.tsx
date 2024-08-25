"use client"
import OutputList from "./Output/page";
import InputList from "./components/inputList";

export default function Home() {
  return (
    <div className="justify-center items-center min-h-min">
      <InputList />
      <OutputList />
    </div>
  );
}
