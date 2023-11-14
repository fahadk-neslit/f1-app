import React, { useState } from 'react';

const RaceTable = () => {
    const [raceResults, setRaceResults] = useState([
        { id: 5, winnerName: 'Fernando Alonso', grandPrix: 'Ferrari',  numberOfLaps: 56, winnerTime: '2:44:51' },
        { id: 5, winnerName: 'Fernando Alonso', grandPrix: 'Ferrari',  numberOfLaps: 56, winnerTime: '2:44:51' },
        { id: 5, winnerName: 'Fernando Alonso', grandPrix: 'Ferrari',  numberOfLaps: 56, winnerTime: '2:44:51' },
        { id: 5, winnerName: 'Fernando Alonso', grandPrix: 'Ferrari',  numberOfLaps: 56, winnerTime: '2:44:51' },
        { id: 5, winnerName: 'Fernando Alonso', grandPrix: 'Ferrari',  numberOfLaps: 56, winnerTime: '2:44:51' },
        { id: 5, winnerName: 'Fernando Alonso', grandPrix: 'Ferrari',  numberOfLaps: 56, winnerTime: '2:44:51' },
        { id: 5, winnerName: 'Fernando Alonso', grandPrix: 'Ferrari',  numberOfLaps: 56, winnerTime: '2:44:51' },
        { id: 5, winnerName: 'Fernando Alonso', grandPrix: 'Ferrari',  numberOfLaps: 56, winnerTime: '2:44:51' },
    ]);

    return (
        <table className='w-[70%] font-sans m-auto bg-red'>
          <thead>
            <tr className='text-gray-300 text-left font-thin'>
              <th></th>
              <th><abbr title="Position">id</abbr></th>
              <th>Winner Name</th>
              <th>Grand Prix</th>
              <th>No. of Laps</th>
              <th>Winner Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {raceResults.map((result, index) => (
              <tr className='odd:bg-white border-none text-left odd:dark:bg-[white] even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-700' key={index}>
                <td></td>
                <td  className='py-3 text-gray-400'>{result.id}</td>
                <td>
                  <span>{result.winnerName}</span>
                </td>
                <td>{result.grandPrix}</td>
                <td>{result.numberOfLaps}</td>
                <td>{result.winnerTime}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      );
      
};

export default RaceTable;
