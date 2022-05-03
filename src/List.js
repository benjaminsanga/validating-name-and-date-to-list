import React from 'react';

const List = (props) => {

  return (
    <div className='list'>
        <h3>List</h3>
        <ul>
          {
            props.names.map((name, index) => {
              return <li key={index}>{ name }</li>
            })
          }
        </ul>
    </div>
  )
}

export default List