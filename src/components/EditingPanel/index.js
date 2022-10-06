import React, { useState } from "react";

function EditingPanel() {
	const [text, setText] = useState("");
	console.log(text);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	return (
		<div className="bg-panelColor flex-1 container overflow-auto">
			{/* LEFT PANEL */}
			<div className="">
				<textarea
					className="bg-panelColor flex-1 container overflow-auto border-none outline-none p-2 h-[85vh] resize-none "
					value={text}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}

export default EditingPanel;
