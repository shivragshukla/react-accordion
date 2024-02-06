import { useState } from 'react';
import data from './data.js'
import './styles.css'

export default function Accordion() {

	const [selectedId, setSelectedId] = useState(null);
	const [enableMultiple, setEnableMultiple] = useState(false);
	const [multipleId, setMultipleId] = useState([]);

	function handleSingleSelect(id) {
		setSelectedId(id);
	}

	function handleMultipleSelect(id) {
		var localMultipleId = [...multipleId];
		var index = localMultipleId.indexOf(id);
		localMultipleId.indexOf(id) !== -1
		? localMultipleId.splice(index, 1)
		: localMultipleId.push(id)

		setMultipleId(localMultipleId);
	}

	function handleSelect(id) {
		enableMultiple ? handleMultipleSelect(id) : handleSingleSelect(id);
	}

	console.log(multipleId)
	
	return (
		<div className="container">
			<div className="accordion">	
				<h1>Accordion</h1>
				<button onClick={() => setEnableMultiple(!enableMultiple)}> 
					{
						enableMultiple 
						? <span> Enable single</span>
						: <span> Enable multiple</span>
					}
				</button>
				{
					data && data.length > 0 
					?
					data.map(item =>
						<div className="item" key={item.id}>
							<div onClick={() => handleSelect(item.id)} className="title">
								<h3>{item.title}</h3>								
								<span>+</span>
							</div>
							{
								enableMultiple 
								?  (
										multipleId.indexOf(item.id) !== -1
										? <div className="body">{item.body}</div>
										: ''
									)
								: 	(
										selectedId === item.id 
										? <div className="body">{item.body}</div>
										: ''

									)
							}
							
						</div>
					)
					: <div>No data found</div>
				}
			</div>
		</div>
	);
}