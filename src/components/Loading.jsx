import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const Loading = () => {
  return (
    <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Loading