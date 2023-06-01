import React from 'react'
import './Loader.css'
const Loader = () => {
    return (
        <div class="loader-container">
  <div class="loader-overlay"></div>
  <div class="loader-content">
    <div class="animate-spin inline-block w-12 h-12 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</div>
    )
}

export default Loader