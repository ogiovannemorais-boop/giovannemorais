type OpenAIAdsCommand = (...args: unknown[]) => void;

declare global {
  interface Window {
    oaiq?: OpenAIAdsCommand;
  }
}

export function measureOpenAIAdsEvent(
  eventName: string,
  data: Record<string, unknown>,
): void {
  try {
    window.oaiq?.("measure", eventName, data);
  } catch {
    // Measurement must never block the user journey.
  }
}
