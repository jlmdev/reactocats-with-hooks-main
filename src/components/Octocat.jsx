import React from 'react'

export function Octocat(props) {
  return (
    <article>
      <a href={this.props.bigImageLink}>
        <img
          src={this.props.bigImage}
          width="400"
          height="400"
          alt={this.props.bigImageAlt}
        />
      </a>
      <ul>
        <li>
          {this.props.octodexNumber}
          <a href={this.props.bigImageLink}>
            <strong>{this.props.bigImageAlt}</strong>
          </a>
        </li>
        <li>
          <a href={this.props.authorOneLink}>
            <img
              src={this.props.authorOneSrc}
              width="24px"
              height="24px"
              alt={this.props.authorOneAlt}
            />
          </a>
        </li>
      </ul>
    </article>
  )
}
