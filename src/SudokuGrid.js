import { useState } from 'react';

export function SudokuGrid(props) {
	const value = props.value;
	console.log('what is value?', value);
	const [cell, setCell] = useState('');
	return (
		<>
			<table className='sudoku-grid'>
				<tr>
					<td className='sudoku-cell'></td>
					<td className='sudoku-cell'></td>
					<td className='sudoku-cell'></td>
				</tr>
				<tr>
					<td className='sudoku-cell'></td>
					<td className='sudoku-cell'></td>
					<td className='sudoku-cell'></td>
				</tr>
				<tr>
					<td className='sudoku-cell'></td>
					<td className='sudoku-cell'></td>
					<td className='sudoku-cell'></td>
				</tr>
			</table>
		</>
	);
}
