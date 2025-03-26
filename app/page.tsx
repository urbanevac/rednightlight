"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Info, Minus, Plus, Power, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CustomSlider } from "@/components/ui/custom-slider"

export default function RedLightFlashlight() {
  const [isOn, setIsOn] = useState(false)
  const [brightness, setBrightness] = useState(50)
  const [showControls, setShowControls] = useState(true)
  const [showCredits, setShowCredits] = useState(false)

  // Auto-hide controls after 3 seconds of inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null

    if (showControls && !showCredits) {
      timeout = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [showControls, brightness, isOn, showCredits])

  // Prevent screen from sleeping when the light is on
  useEffect(() => {
    let wakeLock: any = null

    const requestWakeLock = async () => {
      if (isOn && "wakeLock" in navigator) {
        try {
          wakeLock = await navigator.wakeLock.request("screen")
          console.log("Wake Lock is active")
        } catch (err) {
          console.log("Wake Lock request failed:", err)
        }
      }
    }

    if (isOn) {
      requestWakeLock()
    }

    return () => {
      if (wakeLock) {
        wakeLock
          .release()
          .then(() => console.log("Wake Lock released"))
          .catch((err: any) => console.log("Failed to release Wake Lock:", err))
      }
    }
  }, [isOn])

  // Calculate opacity based on brightness
  const opacity = brightness / 100

  // Handle link click without triggering parent click events
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div className="relative h-screen w-full overflow-hidden" onClick={() => setShowControls(true)}>
      {/* Red light area - full screen */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${isOn ? "" : "opacity-0"}`}
        style={{
          backgroundColor: `rgba(255, 0, 0, ${opacity})`,
        }}
      />

      {/* Floating controls - overlay on the light */}
      <div
        className={`absolute bottom-0 left-0 right-0 transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
      >
        <div className="mx-auto max-w-md p-4">
          {/* Semi-transparent control panel */}
          <div className="bg-black/70 backdrop-blur-md rounded-t-xl p-4 shadow-lg">
            {/* Power button, brightness percentage, and info button */}
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="outline"
                size="icon"
                className={`h-12 w-12 rounded-full border-2 ${isOn ? "border-red-500 text-red-500" : "border-gray-500 text-gray-500"}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setIsOn(!isOn)
                }}
              >
                <Power className="h-6 w-6" />
              </Button>

              <span className="text-white text-lg font-medium">{brightness}%</span>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowCredits(!showCredits)
                }}
              >
                {showCredits ? <X className="h-4 w-4" /> : <Info className="h-4 w-4" />}
              </Button>
            </div>

            {/* Credits panel - shown when info button is clicked */}
            {showCredits ? (
              <div className="mb-4 text-center text-white/80 text-sm">
                <p className="font-medium mb-1">Red Light Flashlight</p>
                <p>
                  Designed in the UK by{" "}
                  <a
                    href="https://morituri.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 underline underline-offset-2"
                    onClick={handleLinkClick}
                  >
                    morituri.co
                  </a>
                </p>
                <p className="text-xs mt-2 text-white/60">v1.0.0</p>
              </div>
            ) : (
              /* Brightness slider with improved endpoints */
              <div className="flex items-center space-x-3 px-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full flex-shrink-0 bg-black/50"
                  onClick={(e) => {
                    e.stopPropagation()
                    setBrightness(Math.max(brightness - 10, 0))
                  }}
                  disabled={brightness <= 0}
                >
                  <Minus className="h-4 w-4" />
                </Button>

                <div className="flex-1 py-2" onClick={(e) => e.stopPropagation()}>
                  <CustomSlider
                    value={[brightness]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => setBrightness(value[0])}
                  />
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full flex-shrink-0 bg-black/50"
                  onClick={(e) => {
                    e.stopPropagation()
                    setBrightness(Math.min(brightness + 10, 100))
                  }}
                  disabled={brightness >= 100}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Credits footer - always visible */}
            <div className="mt-3 text-center">
              <p className="text-xs text-white/40">
                Designed in the UK by{" "}
                <a
                  href="https://morituri.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/60 underline underline-offset-2"
                  onClick={handleLinkClick}
                >
                  morituri.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tap indicator - only shown when controls are hidden */}
      {!showControls && (
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <div className="inline-block bg-black/30 backdrop-blur-sm text-white/70 text-xs px-3 py-1 rounded-full">
            Tap to show controls
          </div>
        </div>
      )}

      {/* Subtle watermark when controls are hidden */}
      {!showControls && (
        <div className="absolute top-4 right-4 text-white/20 text-xs">
          <a
            href="https://morituri.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/40"
            onClick={handleLinkClick}
          >
            morituri.co
          </a>
        </div>
      )}
    </div>
  )
}

