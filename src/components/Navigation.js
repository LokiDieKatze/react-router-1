import React from "react"
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/starters">Starters</Link>
        </li>
        <li>
          <Link to="/dishes"> Main Dishes </Link>
        </li>
        <li>
          <Link to="/desserts"> Desserts </Link>
        </li>
        <li>
          <Link to="/drinks"> Drinks </Link>
        </li>
        <li>
          <Link to="/wine"> Wine </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation