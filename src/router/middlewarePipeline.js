function middlewarePipeline (to, from, next, middlewares, index) {
  const nextMiddleware = middlewares[index]
  if (!nextMiddleware) {
    return next
  }

  return () => {
    nextMiddleware({ to, from, next: middlewarePipeline(to, from, next, middlewares, index + 1) })
  }
}

export default middlewarePipeline
