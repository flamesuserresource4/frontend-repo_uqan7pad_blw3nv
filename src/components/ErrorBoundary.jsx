import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, info)
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
          <div className="max-w-lg w-full border border-white/10 rounded-2xl bg-white/5 p-6 text-center">
            <h1 className="text-2xl font-bold">Something went wrong</h1>
            <p className="text-white/70 mt-2">An unexpected error occurred. Try reloading the page.</p>
            <button onClick={this.handleReload} className="mt-4 px-4 py-2 rounded-xl bg-cyan-500 text-white font-semibold">Reload</button>
            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <pre className="text-left text-xs text-red-300 mt-4 whitespace-pre-wrap break-words max-h-60 overflow-auto">
                {String(this.state.error?.message || this.state.error)}
              </pre>
            )}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
