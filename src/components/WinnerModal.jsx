/* eslint-disable react/prop-types */
import { Square } from "./Square"

export function WinnerModal({ winner }) {
  if (!winner) return
  return (
    <section className="winner">
      <div className="text">
        <h2>The winner is:</h2>
        <main>{<Square value={winner} />}</main>
      </div>
    </section>
  )
}