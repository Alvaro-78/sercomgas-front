import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IOperation } from '../interfaces/Operation';

export default function OperationList() {
	const [operations, setOperations] = useState<IOperation[]>([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredOperations, setFilteredOperations] = useState<IOperation[]>(
		[]
	);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:3001/operations');
				setOperations(response.data);
				setFilteredOperations(response.data);
			} catch (error) {
				console.error('Error fetching data: ', error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const results = operations.filter((operation) =>
			operation.marketerId
				.toString()
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
		);
		setFilteredOperations(results);
	}, [searchTerm, operations]);

	return (
		<div className="container mt-3">
			<div className=" d-flex justify-content-center mb-3">
				<label className="mr-3 w-25 align-items-center">Filtra por id</label>
				<input
					type="text"
					placeholder="Buscar por Marketer Id..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="form-control w-25"
				/>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Marketer Id</th>
						<th scope="col">Comercializadora Id</th>
						<th scope="col">Tipo de operación</th>
						<th scope="col">Cantidad de gas</th>
						<th scope="col">Precio de venta</th>
						<th scope="col">Moneda actual</th>
					</tr>
				</thead>
				{filteredOperations.map((operation, index) => (
					<tbody key={operation.id}>
						<tr>
							<th scope="row">{index + 1}</th>
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
