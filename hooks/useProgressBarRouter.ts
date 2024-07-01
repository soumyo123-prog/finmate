"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { startProgress, stopProgress } from "next-nprogress-bar";
import { useEffect, useMemo, useRef } from "react";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function useProgressBarRouter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isNavigating = useRef(false);

  const fullUrl = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    return `${pathname}?${params.toString()}`;
  }, [pathname, searchParams]);

  useEffect(() => {
    if (isNavigating.current) {
      setTimeout(() => {
        stopProgress();
        isNavigating.current = false;
      }, 200);
    }
  }, [fullUrl]);

  const progressPush = useMemo(() => {
    return {
      ...router,
      push: (href: string, options?: NavigateOptions | undefined) => {
        startProgress();
        isNavigating.current = true;
        return router.push(href, options);
      },
    };
  }, [router]);

  return progressPush;
}
