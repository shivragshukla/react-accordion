import { useState } from 'react';
import data from './data.js'
import './styles.css'

export default function Accordion() {

	const [selectedId, setSelectedId] = useState(null);

	function handleSingleSelect(id) {
		setSelectedId(id);
	}
	
	return (
		<div className="container">
			<div className="accordion">	
				<h1>Accordion</h1>
				{
					data && data.length > 0 
					?
					data.map(item =>
						<div className="item" key={item.id}>
							<div onClick={() => handleSingleSelect(item.id)} className="title">
								<h3>{item.title}</h3>								
								<span>+</span>
							</div>
							{
								selectedId === item.id 
								? <div className="body">{item.body}</div>
								: ''
							}
							
						</div>
					)
					: <div>No data found</div>
				}
			</div>
		</div>
	);
}