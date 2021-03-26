import { useState } from 'react';

export function SudokuGrid(props) {
	const value = props.value;
	console.log('what is value?', value);

	return (
		<>
			<table className='sudoku-grid'>
				<tr>
					<td className='sudoku-cell'>
						<button
							onClick={(e) => {
								e.target.innerText = value;
								console.log(e.target.innerText);
							}}
						>
							_
						</button>
					</td>
					<td className='sudoku-cell'>
						<button
							onClick={(e) => {
								e.target.innerText = value;
								console.log(e.target.innerText);
							}}
						>
							_
						</button>
					</td>
					<td className='sudoku-cell'>
						<button
							onClick={(e) => {
								e.target.innerText = value;
								console.log(e.target.innerText);
							}}
						>
							_
						</button>
					</td>
				</tr>
				<tr>
					<td className='sudoku-cell'>
						<button
							onClick={(e) => {
								e.target.innerText = value;
								console.log(e.target.innerText);
							}}
						>
							_
						</button>
					</td>
					<td className='sudoku-cell'>
						<button
							onClick={(e) => {
								e.target.innerText = value;
								console.log(e.target.innerText);
							}}
						>
							_
						</button>
					</td>
					<td className='sudoku-cell'>
						<button
							onClick={(e) => {
								e.target.innerText = value;
								console.log(e.target.innerText);
							}}
						>
							_
						</button>
					</td>
				</tr>
				<tr>
					<td className='sudoku-cell'>
						<button
							onClick={(e) => {
								e.target.innerText = value;
								console.log(e.target.innerText);
							}}
						>
							_
						</button>
					</td>
					<td className='sudoku-cell'>
						<button
							onClick={(e) => {
								e.target.innerText = value;
								console.log(e.target.innerText);
							}}
						>
							_
						</button>
					</td>
					<td className='sudoku-cell'>
						<button
							onClick={(e) => {
								e.target.innerText = value;
								console.log(e.target.innerText);
							}}
						>
							_
						</button>
					</td>
				</tr>
			</table>
		</>
	);
}
