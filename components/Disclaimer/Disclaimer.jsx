"use client"

export default function Disclaimer({data}) {
  // props list = data

  return (
    <span className="disclaimer">
      {/* <!-- {data.json} || {data.string} --> */}
      {data}
    </span>
  )
}
