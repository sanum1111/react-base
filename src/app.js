import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import pages from "./pages";

const root = createRoot(document.getElementById("root"));

root.render(
	<StrictMode>
		<RouterProvider router={pages} />
	</StrictMode>
);
