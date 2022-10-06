import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../../context/previewSlice";

function EditingPanel() {
	const dispatch = useDispatch();
	const storedText = useSelector((state) => state.preview.text);
	const [text, setText] = useState(storedText);
	console.log(text);

	const handleChange = (e) => {
		setText(e.target.value);
		dispatch(changeText(e.target.value));
	};

	return (
		<div className="bg-panelColor flex-1 container overflow-auto">
			{/* LEFT PANEL */}
			<div className="">
				<textarea
					className="bg-panelColor container overflow-auto border-none outline-none p-2 h-[85vh] resize-none "
					value={text}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}

export default EditingPanel;
