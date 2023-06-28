import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { routes } from './routes'

function Li(props: any) {
  return (
    <li>
      <Link to={props.item.path}> {props.item.name} </Link>
    </li>
  )
}
export default class Layout extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <nav>
          <ul>
            {routes.map((item) => (
              <Li item={item} />
            ))}
          </ul>
        </nav>

        <Outlet />
      </>
    )
  }
}
