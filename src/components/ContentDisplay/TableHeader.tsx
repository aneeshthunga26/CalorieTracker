import React from 'react';

const space = '  ';

/**
 * Displays a table like header for {@link CalorieEntry} data
 * @constructor
 */
export const TableHeader: React.FC = () => {
  return (
    <thead className='bg-base-300 text-lg' key={-1}>
      <tr>
        <th>Food</th>
        <th>Calories</th>
        <th>Time</th>
        <th>{space}</th>
      </tr>
    </thead>
  );
};
