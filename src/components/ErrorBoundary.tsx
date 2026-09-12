import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled React Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0D0204] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md glass-card p-8 rounded-3xl border border-[#D4AF37]/50 space-y-4">
            <h2 className="text-2xl font-extrabold font-outfit text-[#D4AF37] uppercase tracking-wider">
              RAVITEJA BIKE POINT
            </h2>
            <p className="text-sm text-gray-300 font-sans">
              Something went wrong loading this section.
            </p>
            <button
              onClick={() => {
                try {
                  localStorage.clear();
                } catch (e) {}
                window.location.reload();
              }}
              className="glow-btn-gold px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-black w-full mt-4 border border-[#D4AF37]"
            >
              Reload Website
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
