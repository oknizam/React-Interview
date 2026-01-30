import React, { Suspense } from "react";


export default function LazyLoad() {
  const DemoLazy = React.lazy(() =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./DemoComponents/LazyLoadDemoComponent.js")), 1000)
    })
  )

  return (
    <Suspense fallback={<div>loading.....</div>}>
      <DemoLazy />
    </Suspense>
  )
}

// lazy loading will expect promise so we are returning promise here