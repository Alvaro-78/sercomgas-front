import React, { useState, ChangeEvent, FormEvent } from 'react';
import { IOperation } from '../interfaces/Operation';

interface AddOperationFormProps {
	onAdd: (operation: IOperation) => void;
}

const AddOperationForm: React.FC<AddOperationFormProps> = ({ onAdd }) => {
	const [operation, setOperation] = useState<IOperation>({
		id: 0,
		providerName: '',
		tradingPartnerName: '',
		type: 'Compra',
		gasAmount: '',
		price: '',
		currency: 'EUR',
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setOperation({ ...operation, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onAdd(operation);
		setOperation({
			...operation,
			id: Math.random(),
			providerName: '',
			tradingPartnerName: '',
			gasAmount: '',
			price: '',
		});
	};

	return (
		<form className="container-sm mt-5">
			<div className="mb-3">
				<label htmlFor="validationTooltip01" className="form-label">
					Nombre de la Comercializadora
				</label>
				<input
					name="providerName"
					type="text"
					className="form-control"
					id="providerName"
					value={operation.providerName}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="tradingPartnerName" className="form-label">
					Nombre de la Comercializadora a Comerciar
				</label>
				<input
					name="tradingPartnerName"
					type="text"
					className="form-control"
					id="tradingPartnerName"
					value={operation.tradingPartnerName}
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
					name="gasAmount"
					type="number"
					min="0"
					className="form-control"
					id="gasAmount"
					value={operation.gasAmount}
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
				<label htmlFor="currency" className="form-label">
					Moneda
				</label>
				<select
					name="currency"
					className="form-select"
					id="currency"
					value={operation.currency}
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
