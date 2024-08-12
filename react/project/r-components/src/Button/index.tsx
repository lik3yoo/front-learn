import React from "react"

interface ButtonProps {
  label: string
  onClick?: () => {}
  loading?: boolean
}

const Button = (props: ButtonProps) => {
  const { label, onClick, loading = false } = props

  return <button onClick={onClick}>{label}</button>
}

export default Button
