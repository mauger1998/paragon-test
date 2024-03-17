import React from 'react'
import {MdOutlineSafetyDivider} from 'react-icons/md'

export default {
  title: 'Normal Text',
  name: 'normalText',
  type: 'array',
  of: [
    {
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: 'Divider',
      name: 'divider',
      type: 'object',
      icon: MdOutlineSafetyDivider,
      fields: [
        {
          name: 'height',
          type: 'string',
          options: {
            list: [
              {title: '0px', value: '0'},
              {title: '8px', value: '8'},
              {title: '16px', value: '16'},
              {title: '24px', value: '24'},
              {title: '32px', value: '32'},
              {title: '40px', value: '40'},
              {title: '48px', value: '48'},
              {title: '56px', value: '56'},
              {title: '64px', value: '64'},
              {title: '72px', value: '72'},
              {title: '80px', value: '80'},
              {title: '88px', value: '88'},
              {title: '96px', value: '96'},
              {title: '104px', value: '104'},
              {title: '112px', value: '112'},
              {title: '120px', value: '120'},
              {title: '128px', value: '128'},
              {title: '136px', value: '136'},
              {title: '144px', value: '144'},
              {title: '152px', value: '152'},
              {title: '160px', value: '160'},
              {title: '168px', value: '168'},
              {title: '176px', value: '176'},
              {title: '184px', value: '184'},
              {title: '192px', value: '192'},
              {title: '200px', value: '200'},
              {title: '208px', value: '208'},
              {title: '216px', value: '216'},
              {title: '224px', value: '224'},
              {title: '232px', value: '232'},
              {title: '240px', value: '240'},
              {title: '248px', value: '248'},
              {title: '256px', value: '256'},
              {title: '264px', value: '264'},
              {title: '272px', value: '272'},
              {title: '280px', value: '280'},
              {title: '288px', value: '288'},
              {title: '296px', value: '296'},
              {title: '304px', value: '304'},
              {title: '312px', value: '312'},
              {title: '320px', value: '320'},
            ],
            layout: 'radio',
            isHighlighted: true,
          },
        },
      ],
      preview: {
        select: {
          title: 'height',
        },
        prepare(selection) {
          const {title} = selection
          return {
            title: `${title}px Divider`,
          }
        },
      },
    },

    {
      title: 'Block',
      type: 'block',
      styles: [
        {
          title: 'Normal',
          value: 'normal',
        },
        {
          title: 'Blockquote',
          value: 'blockquote',
        },
        {
          title: 'Heading 1',
          value: 'h1',
        },
        {
          title: 'Heading 2',
          value: 'h2',
        },
        {
          title: 'Heading 3',
          value: 'h3',
        },
        {
          title: 'Heading 4',
          value: 'h4',
        },
        {
          title: 'Heading 5',
          value: 'h5',
        },
      ],

      marks: {
        decorators: [
          {
            title: 'Bold',
            value: 'strong',
          },
          {
            title: 'Italic',
            value: 'em',
          },
        ],
      },
    },
  ],
}
