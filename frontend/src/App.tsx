import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import OperationList from './components/OperationList';
import AddOperationForm from './components/AddOperationForm';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="operations" element={<OperationList />} />
				<Route path="create-operations" element={<AddOperationForm />} />
			</Routes>
		</>
	);
}

export default App;
