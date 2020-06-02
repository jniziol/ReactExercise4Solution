import React from 'react'

export default function Repair(props) {
  return (
    <li>
      <div className="view">
        <label>{props.repair.task}</label>
        <button className="destroy" onClick={() => props.removeRepair(props.repair)}></button>
      </div>
    </li>
  )
}
