import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { IOperation } from '../interfaces/Operation';
import axios from 'axios';

const AddOperationForm = () => {
	const [operation, setOperation] = useState<IOperation>({
		marketerId: '',
		clientId: '',
		type: 'Compra',
		amount: '',
		price: '',
		currenty_currency: 'EUR',
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setOperation({
			...operation,
			[name]: value,
		});
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				'http://localhost:3001/operations',
				operation
			);
			console.log(response, 'response');
		} catch (error) {
			console.log('Somethings went wrong !!!', error);
		}

		setOperation({
			marketerId: '',
			clientId: '',
			type: 'Compra',
			amount: '',
			price: '',
			currenty_currency: 'EUR',
		});
	};

	return (
		<form onSubmit={handleSubmit} className="container-sm mt-5">
			<div className="mb-3">
				<label htmlFor="validationTooltip01" className="form-label">
					Nombre de la Comercializadora
				</label>
				<input
					name="marketerId"
					type="text"
					className="form-control"
					id="providerName"
					value={operation.marketerId}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="tradingPartnerName" className="form-label">
					Nombre de la Comercializadora a Comerciar
				</label>
				<input
					name="clientId"
					type="text"
					className="form-control"
					id="tradingPartnerName"
					value={operation.clientId}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="type" className="form-label">
					Tipo
				</label>
				<select
					name="type"
					className="form-select"
					id="type"
					value={operation.type}
					onChange={handleChange}>
					<option value="Compra">Compra</option>
					<option value="Venta">Venta</option>
				</select>
			</div>
			<div className="mb-3">
				<label htmlFor="gasAmount" className="form-label">
					Cantidad de Gas
				</label>
				<input
					name="amount"
					type="number"
					min="0"
					className="form-control"
					id="gasAmount"
					value={operation.amount}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="price" className="form-label">
					Precio
				</label>
				<input
					name="price"
					type="number"
					min="0"
					className="form-control"
					id="price"
					value={operation.price}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="currenty_currency" className="form-label">
					Moneda
				</label>
				<select
					name="currenty_currency"
					className="form-select"
					id="currency"
					value={operation.currenty_currency}
					onChange={handleChange}>
					<option value="EUR">EUR</option>
					<option value="USD">USD</option>
				</select>
			</div>
			<button type="submit" className="btn btn-primary">
				Añadir Operación
			</button>
		</form>
	);
};

export default AddOperationForm;
