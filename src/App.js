import React from "react";
import EditingPanel from "./components/EditingPanel";
import PreviewPanel from "./components/PreviewPanel";

function App() {
	return (
		<div className="flex flex-col relative">
			<h1 className="mx-auto text-5xl mt-10">Markdown Preview</h1>
			<div className="w-4/5 flex flex-row mx-auto gap-2 h-[86vh]">
				<EditingPanel className="flex-1" />
				<PreviewPanel className="flex-1" />
			</div>
		</div>
	);
}

export default App;
