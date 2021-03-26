import './App.css';
import { SudokuGrid } from './SudokuGrid';
import NumberButtons from './NumberButtons';
import { useState } from 'react';
function App(props) {
	const [num, setNum] = useState('');
	return (
		<div className='App'>
			<h1>Sudoku</h1>
			<p>
				<u>
					<b>Description:</b>
				</u>{' '}
				Click on a number first before selecting which box in the Sudoku board
				to put it in.
			</p>
			{/* <div className='sudoku-board'>
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
				<SudokuGrid value={num} />
			</div> */}
			<NumberButtons />
		</div>
	);
}

export default App;
