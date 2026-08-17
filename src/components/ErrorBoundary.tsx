import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen bg-synthrova-white text-synthrova-black flex items-center justify-center p-6">
          <div className="max-w-md w-full border border-synthrova-lightgrey/20 p-12 bg-synthrova-offwhite text-center shadow-lg">
            <h1 className="text-2xl font-light tracking-tight mb-4 text-red-600">Component Failure</h1>
            <p className="text-synthrova-black/70 font-light mb-8 text-sm">
              An unexpected error occurred while rendering this module. 
              The infrastructure team has been notified.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 bg-synthrova-black text-synthrova-white font-medium hover:bg-synthrova-blue transition-colors text-sm"
            >
              Reload Session
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
