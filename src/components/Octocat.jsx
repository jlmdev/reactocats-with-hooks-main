import React from 'react'

export function Octocat(props) {
  return (
    <article>
      <a href={props.bigImageLink}>
        <img
          src={props.bigImage}
          width="400"
          height="400"
          alt={props.bigImageAlt}
        />
      </a>
      <ul>
        <li>
          {props.octodexNumber}
          <a href={props.bigImageLink}>
            <strong>{props.bigImageAlt}</strong>
          </a>
        </li>
        <li>
          <a href={props.authorOneLink}>
            <img
              src={props.authorOneSrc}
              width="24px"
              height="24px"
              alt={props.authorOneAlt}
            />
          </a>
        </li>
      </ul>
    </article>
  )
}
