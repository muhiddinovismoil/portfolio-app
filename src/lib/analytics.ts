"use client";

import { useEffect } from "react";

export interface WebVitalsMetric {
    value: number;
    rating?: "good" | "needs-improvement" | "poor";
}

/**
 * Track Web Vitals (CLS, FID, FCP, INP, LCP, TTFB)
 * This helps you understand the real-world performance of your website
 */
export function useWebVitals() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // Dynamically import web-vitals to keep bundle small
        import("web-vitals").then(
            ({ getCLS, getFID, getFCP, getLCP, INP }: any) => {
                // Cumulative Layout Shift
                getCLS((metric: WebVitalsMetric) => {
                    console.log("CLS:", metric.value);
                    trackEvent("web_vitals", {
                        metric: "CLS",
                        value: metric.value,
                        rating: metric.rating,
                    });
                });

                // First Input Delay
                getFID((metric: WebVitalsMetric) => {
                    console.log("FID:", metric.value);
                    trackEvent("web_vitals", {
                        metric: "FID",
                        value: metric.value,
                        rating: metric.rating,
                    });
                });

                // First Contentful Paint
                getFCP((metric: WebVitalsMetric) => {
                    console.log("FCP:", metric.value);
                    trackEvent("web_vitals", {
                        metric: "FCP",
                        value: metric.value,
                        rating: metric.rating,
                    });
                });

                // Largest Contentful Paint
                getLCP((metric: WebVitalsMetric) => {
                    console.log("LCP:", metric.value);
                    trackEvent("web_vitals", {
                        metric: "LCP",
                        value: metric.value,
                        rating: metric.rating,
                    });
                });

                // Interaction to Next Paint
                INP((metric: WebVitalsMetric) => {
                    console.log("INP:", metric.value);
                    trackEvent("web_vitals", {
                        metric: "INP",
                        value: metric.value,
                        rating: metric.rating,
                    });
                });
            }
        );
    }, []);
}

/**
 * Track custom events to Google Analytics
 */
function trackEvent(eventName: string, eventData: Record<string, any>) {
    if (typeof window === "undefined") return;

    // Google Analytics tracking (gtag)
    if ((window as any).gtag) {
        (window as any).gtag("event", eventName, eventData);
    }

    // Fallback console logging for development
    console.log(`Event: ${eventName}`, eventData);
}

/**
 * Hook to track page views
 */
export function usePageView(pageName: string) {
    useEffect(() => {
        if (typeof window === "undefined") return;

        if ((window as any).gtag) {
            (window as any).gtag("pageview", {
                page_path: window.location.pathname,
                page_title: pageName || document.title,
            });
        }
    }, [pageName]);
}

/**
 * Hook to track custom events (e.g., button clicks, form submissions)
 */
export function useTrackEvent(
    eventName: string,
    eventData?: Record<string, any>
) {
    return (additionalData?: Record<string, any>) => {
        if (typeof window === "undefined") return;

        trackEvent(eventName, {
            ...eventData,
            ...additionalData,
            timestamp: new Date().toISOString(),
        });
    };
}

/**
 * Performance monitoring utility
 */
export function measurePerformance(label: string) {
    if (typeof window === "undefined") return { end: () => {} };

    const startTime = performance.now();

    return {
        end: () => {
            const endTime = performance.now();
            const duration = endTime - startTime;
            console.log(`⏱️ ${label}: ${duration.toFixed(2)}ms`);

            if ((window as any).gtag) {
                (window as any).gtag("event", "performance_measure", {
                    label,
                    value: Math.round(duration),
                });
            }
        },
    };
}
