import React from 'react'
import { urlForImage } from '../lib/urlForImage'
// React icon for a link with fill color

export const myPortableTextComponents = {
	types: {
		image: ({ value }) => {
			const imageUrl = urlForImage(value).format('webp').url()
			return <img src={`${imageUrl}`} alt="test alt" />
		},
		list: (node) => {
			return (
				<ul>
					{node.children.map((child, index) => (
						<li key={index}>{child}</li>
					))}
				</ul>
			)
		},
		divider: ({ value }) => {
			return <div style={{ height: `${value.height}px` }} />
		}
	},

	marks: {
		span: ({ children }) => <sup className="sup">{children}</sup>,
		link: (node) => {
			return (
				<a href={node.value.link} target={node.value._blank ? '_blank' : null}>
					{node.children}
				</a>
			)
		}
	}
}
