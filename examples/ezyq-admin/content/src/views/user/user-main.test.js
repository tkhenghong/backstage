/** @jest-environment jsdom */

import { render, screen } from '@testing-library/react'
import UserMain from './user-main'

test('Renders Users table', () => {
  render(<UserMain />)
  const linkElement = screen.getByText(/Users/i)
  expect(linkElement).toBeInTheDocument()
})
