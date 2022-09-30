import { evaluate } from 'mathjs'
import { useEffect, useState } from 'react'

export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]
export const operations = ['+', '-', '*', '/']
export const equalSign = '='
export const deleteSign = '<-'

export const Calculator = () => {
  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(false)

  const concatInputValue = inputValue => () => setValue(value.concat(inputValue))

  const result = () => {
    const result = evaluate(value)
    setValue(`${result}`)
  }

  const deleteValue = () => {
    if (value && value.length > 0);
    setValue(value.slice(0, value.length - 1))
  }

  useEffect(() => {
    if (value) disabledEqualBtn()
  }, [value])

  const disabledEqualBtn = () => {
    if (!value || value.length === 0) return

    const valueLatsChar = value.charAt(value.length - 1)

    let disabledBtn = false

    operations.forEach(operation => {
      if (valueLatsChar === operation) {
        disabledBtn = true
      }
    })

    setDisabled(disabledBtn)
  }

  return (
    <section>
      <h1>Test</h1>
      <button onClick={deleteValue}>{deleteSign}</button>
      <input type='text' value={value} readOnly />
      <div role='grid'>
        {
            rows.map((row, idx) => (
              <div role='row' key={idx}> {row.map(number => (
                <button onClick={concatInputValue(number)} key={number}> {number} </button>
              ))}
              </div>
            )
            )
        }

        {
            operations.map((operation, idx) => (
              <button onClick={concatInputValue(operation)} key={idx}>{operation}</button>)
            )
        }

        <button onClick={result} disabled={disabled}>{equalSign}</button>
      </div>

    </section>
  )
}
