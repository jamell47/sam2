import { useEffect, useRef, useState } from 'react'

export function useTyping(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {}) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting
            ? current.substring(0, prev.length - 1)
            : current.substring(0, prev.length + 1)
        )
      }, deleting ? deleteSpeed : typeSpeed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}
