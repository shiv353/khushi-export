"use client";

import Image from "next/image";
import { useState } from "react";
import { useHydratedReducedMotion } from "@/lib/useHydratedReducedMotion";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string; detail?: string };
    end: { lat: number; lng: number; label?: string; detail?: string };
  }>;
  lineColor?: string;
  backgroundColor?: string;
}

const mapBounds = {
  latitude: { min: -56, max: 71 },
  longitude: { min: -168, max: 168 },
};

const wgs84Radius = 6_378_137;
const wgs84Eccentricity = Math.sqrt(6.6943799901413165e-3);
const minMercatorY = mercatorY(mapBounds.latitude.min);
const maxMercatorY = mercatorY(mapBounds.latitude.max);

function mercatorY(latitude: number) {
  const radians = (latitude * Math.PI) / 180;
  const sinLatitude = Math.sin(radians);

  return (
    wgs84Radius *
    Math.log(
      Math.tan(Math.PI / 4 + radians / 2) *
        ((1 - wgs84Eccentricity * sinLatitude) /
          (1 + wgs84Eccentricity * sinLatitude)) **
          (wgs84Eccentricity / 2),
    )
  );
}

export default function WorldMap({
  dots = [],
  lineColor = "#C7352B",
  backgroundColor = "#F8F5ED",
}: MapProps) {
  const reduceMotion = useHydratedReducedMotion();
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  const projectPoint = (lat: number, lng: number) => {
    const x =
      ((lng - mapBounds.longitude.min) /
        (mapBounds.longitude.max - mapBounds.longitude.min)) *
      800;
    const y =
      ((maxMercatorY - mercatorY(lat)) /
        (maxMercatorY - minMercatorY)) *
      400;

    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const renderMarker = (
    marker: { lat: number; lng: number; label?: string; detail?: string },
    markerId: string,
    isOrigin = false,
  ) => {
    const point = projectPoint(marker.lat, marker.lng);
    const tooltipWidth = 176;
    const tooltipX = Math.max(8, Math.min(800 - tooltipWidth - 8, point.x - tooltipWidth / 2));
    const tooltipY = Math.max(8, point.y - 58);
    const isVisible = hoveredMarker === markerId || selectedMarker === markerId;
    const markerColor = isOrigin ? "#173D2B" : lineColor;

    return (
      <g
        key={markerId}
        className="pointer-events-auto cursor-pointer outline-none"
        role="button"
        tabIndex={0}
        aria-label={`${marker.label ?? "Map marker"}${marker.detail ? `, ${marker.detail}` : ""}`}
        aria-pressed={selectedMarker === markerId}
        onPointerEnter={() => setHoveredMarker(markerId)}
        onPointerLeave={() => setHoveredMarker(null)}
        onFocus={() => setHoveredMarker(markerId)}
        onBlur={() => setHoveredMarker(null)}
        onClick={() =>
          setSelectedMarker((current) => current === markerId ? null : markerId)
        }
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setSelectedMarker(null);
          } else if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setSelectedMarker((current) => current === markerId ? null : markerId);
          }
        }}
      >
        <circle cx={point.x} cy={point.y} r="12" fill="transparent" />
        <circle
          cx={point.x}
          cy={point.y}
          r="4"
          fill={markerColor}
          stroke={backgroundColor}
          strokeWidth="2"
        />
        {!reduceMotion && (
          <circle
            cx={point.x}
            cy={point.y}
            r="3"
            fill={markerColor}
            opacity="0.5"
            pointerEvents="none"
          >
            <animate
              attributeName="r"
              from="3"
              to="10"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.5"
              to="0"
              dur="1.5s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
        )}
        {isVisible && (
          <g className="pointer-events-none">
            <rect
              x={tooltipX}
              y={tooltipY}
              width={tooltipWidth}
              height="44"
              rx="4"
              fill="#0D281D"
              stroke="#B69A61"
              strokeOpacity=".7"
            />
            <text
              x={tooltipX + 10}
              y={tooltipY + 18}
              fill="#F8F5ED"
              fontSize="11"
              fontWeight="600"
            >
              {marker.label ?? "Map marker"}
            </text>
            {marker.detail && (
              <text
                x={tooltipX + 10}
                y={tooltipY + 34}
                fill="#D9C89E"
                fontSize="9"
              >
                {marker.detail}
              </text>
            )}
          </g>
        )}
      </g>
    );
  };

  return (
    <div className="relative aspect-[1.45/1] w-full overflow-hidden font-sans sm:aspect-[1.8/1] lg:aspect-[2/1]">
      <Image
        src="/images/world-dots.svg"
        className="pointer-events-none h-full w-full select-none [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]"
        alt=""
        aria-hidden="true"
        height="400"
        width="800"
        draggable={false}
        unoptimized
      />
      <svg
        viewBox="0 0 800 400"
        role="group"
        aria-label="Illustrative export connections from Unjha, India. Focus, hover over, or tap a marker to see its location."
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={backgroundColor} stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity=".35" />
            <stop offset="95%" stopColor={lineColor} stopOpacity=".9" />
            <stop offset="100%" stopColor={backgroundColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots[0] &&
          renderMarker(
            { ...dots[0].start, label: dots[0].start.label ?? "India", detail: dots[0].start.detail ?? "Origin" },
            "origin",
            true,
          )}
        {dots.map((dot, i) =>
          renderMarker(dot.end, `destination-${i}`),
        )}
      </svg>
    </div>
  );
}
