/**
 * Performance optimization utilities for dynamic imports
 * This helps reduce initial bundle size by lazy-loading components
 */

import dynamic from "next/dynamic";
import React, { ComponentType, ReactNode } from "react";

/**
 * Example of how to use dynamic imports for components
 * Place these in your page or layout files:
 *
 * const Projects = dynamic(() => import("@/app/_components/projects"), {
 *   loading: () => <div>Loading projects...</div>,
 *   ssr: true,
 * });
 *
 * const Skills = dynamic(() => import("@/app/_components/skills"), {
 *   loading: () => <div>Loading skills...</div>,
 *   ssr: true,
 * });
 */

/**
 * Intersection Observer hook for lazy loading elements on scroll
 */
export function useIntersectionObserver(
    ref: React.RefObject<HTMLElement>,
    options: IntersectionObserverInit = {}
) {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, ...options }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return isVisible;
}

/**
 * Preload resource hints for better performance
 */
export function preloadResource(href: string, as: string = "script") {
    if (typeof window === "undefined") return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = as;
    link.href = href;

    if (as === "font") {
        link.crossOrigin = "anonymous";
    }

    document.head.appendChild(link);
}

/**
 * Prefetch resource for faster loading
 */
export function prefetchResource(href: string) {
    if (typeof window === "undefined") return;

    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = href;

    document.head.appendChild(link);
}

/**
 * DNS prefetch for external services
 */
export function dnsPrefetch(hostname: string) {
    if (typeof window === "undefined") return;

    const link = document.createElement("link");
    link.rel = "dns-prefetch";
    link.href = `//${hostname}`;

    document.head.appendChild(link);
}
