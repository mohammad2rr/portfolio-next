"use client";

import React, { useState } from "react";
import { Dock } from "primereact/dock";
import { Button } from "primereact/button";

import { RadioButton } from "primereact/radiobutton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counterSlice";

export default function BasicDemo() {
  const [position, setPosition] = useState<any>("bottom");

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const items = [
    {
      label: "Finder",
      icon: () => (
        <img
          alt="Finder"
          src="https://primefaces.org/cdn/primereact/images/dock/finder.svg"
          width="100%"
        />
      ),
    },
    {
      label: "App Store",
      icon: () => (
        <img
          alt="App Store"
          src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg"
          width="100%"
        />
      ),
    },
    {
      label: "Photos",
      icon: () => (
        <img
          alt="Photos"
          src="https://primefaces.org/cdn/primereact/images/dock/photos.svg"
          width="100%"
        />
      ),
    },
  ];

  const positions = [
    {
      label: "Bottom",
      value: "bottom",
    },
    {
      label: "Top",
      value: "top",
    },
    {
      label: "Left",
      value: "left",
    },
    {
      label: "Right",
      value: "right",
    },
  ];

  return (
    <div className="card dock-demo">
      <div className="flex flex-wrap gap-3 mb-5">
        {positions.map((option) => {
          const { value, label } = option;

          return (
            <div className="flex items-center" key={label}>
              <RadioButton
                value={label}
                onChange={() => setPosition(option.value)}
                checked={position === value}
              />
              <label htmlFor={label} className="ml-2">
                {label}
              </label>
            </div>
          );
        })}
      </div>
      <div
        className="dock-window"
        style={{
          backgroundImage:
            "url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)",
        }}
      >
        <Dock model={items} position={position} />
        <div>
          <Button
            label="Success"
            severity="success"
            onClick={() => dispatch(increment())}
          />
          <h1>Counter: {count}</h1>
          <Button
            label="Danger"
            severity="danger"
            onClick={() => dispatch(decrement())}
          />
        </div>
      </div>
    </div>
  );
}
