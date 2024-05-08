import React from 'react'
import Link from 'next/link'

const MarkdownLite = ({ content }: { content: string }) => {
  const linkRegex = /\[(.+?)\]\((.+?)\)/g
  const parts = []

  let lastIndex = 0
  let match

  while ((match = linkRegex.exec(content)) !== null) {
    const [fullMatch, linkText, linkUrl] = match
    const matchStart = match.index
    const matchEnd = matchStart + fullMatch.length

    if (lastIndex < matchStart) {
      parts.push(content.slice(lastIndex, matchStart))
    }

    parts.push(
      <Link
        target='_blank'
        rel='noopener noreferrer'
        className='break-words underline underline-offset-2 text-blue-600'
        key={linkUrl}
        href={linkUrl}>
        {linkText}
      </Link>
    )

    lastIndex = matchEnd
  }

  if (content && lastIndex < content.length) {
    parts.push(content.slice(lastIndex))
  }

  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>{part}</React.Fragment>
      ))}
    </>
  )
}

export default MarkdownLite