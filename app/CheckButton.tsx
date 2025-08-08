"use client";

import { useState } from "react";
import { Button } from "react-aria-components";

export default function CheckButton() {
  const [value, setValue] = useState("");

  function handlePress() {
    setValue(
      (window as any)[Symbol.for("react-aria.i18n.locale")] ?? "undefined"
    );
  }

  return (
    <div>
      <Button onPress={handlePress}>Check</Button>
      {value && <p>window[Symbol.for('react-aria.i18n.locale')] is {value}</p>}
    </div>
  );
}
