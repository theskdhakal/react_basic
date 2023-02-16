import { useState } from "react";

import { chat } from "./chat";

export const Forms = () => {
  return (
    <div>
      <form action="">
        <p>
          <label htmlFor="">FirstName</label>
          <input type="text" name="fName" />
        </p>
      </form>
    </div>
  );
};
