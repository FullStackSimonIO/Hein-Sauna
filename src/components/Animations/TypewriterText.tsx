'use client'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export interface TypewriterHeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Die Texte, die nacheinander „getippt“ werden sollen */
  words: string[]
}

/**
 * TypewriterHeadline
 *
 * Ein Schreibmaschinen-Effekt, der Text Buchstabe für Buchstabe ausgibt.
 *
 * Usage:
 *   <TypewriterHeadline
 *     className="mb-6 text-4xl font-bold"
 *     words={['Hallo', 'Willkommen', 'Los geht‘s']}
 *   />
 */
export const TypewriterHeadline: React.FC<TypewriterHeadlineProps> = ({
  words,
  className = '',
  ...restProps
}) => {
  const [text] = useTypewriter({
    words,
    loop: 0,
    delaySpeed: 5000,
  })

  return (
    <h1
      className={[
        'text-5xl font-bold', // deine Default-Styles
        className, // alles, was von außen reinkommt
      ]
        .filter(Boolean)
        .join(' ')}
      {...restProps}
    >
      {text}
      <Cursor />
    </h1>
  )
}
