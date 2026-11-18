import { Component, ReactNode } from "react";
import { CONTACT } from "../content";

/** Last-resort fallback so a runtime error never leaves visitors on a blank page. */
export class ErrorBoundary extends Component<{ children: ReactNode; message: string }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Site error:", error);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="min-h-[100svh] grid place-items-center p-6 text-center">
        <div>
          <p className="display text-5xl font-semibold">SSolutions<span style={{ color: "var(--accent)" }}>.</span></p>
          <p className="muted mt-6 max-w-md mx-auto">
            {this.props.message} <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
        </div>
      </main>
    );
  }
}
