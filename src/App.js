import './App.css';
import { SudokuGrid } from './SudokuGrid';
import NumberButtons from './NumberButtons';

function App() {
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
			<div className='sudoku-board'>
				<SudokuGrid />
				<SudokuGrid />
				<SudokuGrid />
				<SudokuGrid />
				<SudokuGrid />
				<SudokuGrid />
				<SudokuGrid />
				<SudokuGrid />
				<SudokuGrid />
			</div>
			<NumberButtons />
		</div>
	);
}

export default App;
