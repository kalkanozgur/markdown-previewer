import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import remarkGfm from "remark-gfm";

function PreviewPanel() {
	const storedText = useSelector((state) => state.preview.text);
	const [text, setText] = useState(storedText);

	return (
		<div className="bg-panelColor flex-1 container overflow-auto relative">
			{/* RIGHT PANEL */}
			<ReactMarkdown children={storedText} remarkPlugins={[remarkGfm]} />
		</div>
	);
}

export default PreviewPanel;
