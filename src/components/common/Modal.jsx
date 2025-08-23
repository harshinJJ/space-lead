"use client"
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const SIZE_CLASSES = {
  sm: 'md:max-w-2/5 lg:max-w-1/5 max-w-3/4',
  md: 'md:max-w-2/3 lg:max-w-1/2 max-w-3/4',
  lg: 'max-w-full'
}

const Modal = ({ isOpen, onClose, children, timer, size = 'sm' }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen || !timer) return
    const timeout = setTimeout(onClose, timer)
    return () => clearTimeout(timeout)
  }, [isOpen, timer, onClose])

  if (!isOpen || !mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}
    >
      <div
        className={`relative bg-white shadow-xl rounded-2xl p-6 w-[90%] ${SIZE_CLASSES[size] || SIZE_CLASSES.md}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal

