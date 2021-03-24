import './App.css';
import {SudokuGrid} from './SudokuGrid'

function App() {
	
	return (
		<div className='App'>
			<h1>Sudoku</h1>
			<div className="sudoku-board"> 
			<SudokuGrid />
            <SudokuGrid/>
			<SudokuGrid />
            <SudokuGrid />
			<SudokuGrid />
			<SudokuGrid />
			<SudokuGrid />
			<SudokuGrid />
			<SudokuGrid />
           </div>
		</div>
	);
}

export default App;
