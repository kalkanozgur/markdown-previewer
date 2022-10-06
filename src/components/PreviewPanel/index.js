import React, { useState } from "react";
import { useSelector } from "react-redux";

function PreviewPanel() {
	const storedText = useSelector((state) => state.preview.text);
	const [text, setText] = useState(storedText);

	return (
		<div className="bg-panelColor flex-1 container overflow-auto relative">
			{/* RIGHT PANEL */}
			<article>{text}</article>
		</div>
	);
}

export default PreviewPanel;
