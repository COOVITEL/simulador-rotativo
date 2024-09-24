import React, { useState } from "react";

export default function Score() {

  const [value, setValue] = useState<number>(0) 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }

    return (
      <div className="input flex flex-col w-fit static">
        <label
          htmlFor="score"
          className="text-blue-900 text-md font-semibold relative top-2 ml-[7px] px-[10px] bg-white w-fit"
        >
          Puntaje Score
        </label>
        <input
          required
          value={value != 0 ? value : ""}
          onChange={handleChange}
          id="score"
          type="number"
          placeholder="Score"
          name="score"
          className="border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] w-[400px] focus:outline-none placeholder:text-black/45
          hover:shadow-xl transition-all duration-300 focus:border-blue-700 text-center"
        />
      </div>
    );
  }
  