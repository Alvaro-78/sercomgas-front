import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IOperation } from '../interfaces/Operation';

export default function OperationList() {
	const [operations, setOperations] = useState<IOperation[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:3001/operations');
				setOperations(response.data);
			} catch (error) {
				console.error('Error fetching data: ', error);
			}
		};
		fetchData();
	}, []);
	console.log(operations);

	return (
		<div className="container mt-3">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Marketer</th>
						<th scope="col">Comercializadora</th>
						<th scope="col">Tipo de operación</th>
						<th scope="col">Cantidad de gas</th>
						<th scope="col">Precio de venta</th>
						<th scope="col">Moneda actual</th>
					</tr>
				</thead>
				{operations.map((operation) => (
					<tbody>
						<tr key={operation.id}>
							<th scope="row">1</th>
							<td>{operation.marketerId}</td>
							<td>{operation.clientId}</td>
							<td>{operation.type}</td>
							<td>{operation.amount}</td>
							<td>{operation.price}</td>
							<td>{operation.currenty_currency}</td>
						</tr>
					</tbody>
				))}
			</table>
		</div>
	);
}
