'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  color?: string;
  popupContent: string;
  onClick?: () => void;
  label?: string; // numbered label for route stops
}

interface PolylineData {
  coords: [number, number][];
  color: string;
  weight?: number;
  dashArray?: string;
  opacity?: number;
}

interface MapComponentProps {
  center: [number, number];
  zoom: number;
  markers: MarkerData[];
  polylines?: PolylineData[];
  height?: string;
}

export default function MapComponent({ center, zoom, markers, polylines, height = '500px' }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      zoomControl: false,
    }).setView(center, zoom);

    // Zoom control top-right
    L.control.zoom({ position: 'topright' }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19,
    }).addTo(map);

    // Draw polylines first (under markers)
    polylines?.forEach((pl) => {
      L.polyline(pl.coords, {
        color: pl.color,
        weight: pl.weight ?? 2.5,
        dashArray: pl.dashArray ?? '6,8',
        opacity: pl.opacity ?? 0.6,
        lineJoin: 'round',
        lineCap: 'round',
      }).addTo(map);
    });

    markers.forEach((m) => {
      let icon: L.DivIcon;

      if (m.label) {
        // Numbered route marker
        icon = L.divIcon({
          className: 'custom-marker-num',
          html: `<div style="
            width:26px;height:26px;
            background:${m.color || '#b8953a'};
            border-radius:50%;
            display:flex;align-items:center;justify-content:center;
            font-family:'Inter',sans-serif;font-size:11px;font-weight:700;
            color:#07070c;
            box-shadow:0 0 20px ${m.color || '#b8953a'}50, 0 2px 8px rgba(0,0,0,0.4);
            cursor:pointer;
            border:2px solid rgba(255,255,255,0.15);
          ">${m.label}</div>`,
          iconSize: [26, 26],
          iconAnchor: [13, 13],
        });
      } else {
        // Standard glowing dot marker
        icon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="
            width:12px;height:12px;
            background:${m.color || '#b8953a'};
            border-radius:50%;
            box-shadow:0 0 20px ${m.color || '#b8953a'}50, 0 0 6px ${m.color || '#b8953a'}80;
            cursor:pointer;
            border:2px solid rgba(255,255,255,0.2);
          "></div>`,
          iconSize: [12, 12],
          iconAnchor: [6, 6],
        });
      }

      const marker = L.marker([m.lat, m.lng], { icon }).addTo(map);
      marker.bindPopup(m.popupContent, {
        maxWidth: 320,
        className: 'custom-popup',
      });

      if (m.onClick) {
        marker.on('click', m.onClick);
      }
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [center, zoom, markers, polylines]);

  return (
    <div className="relative group">
      <div
        ref={mapRef}
        style={{ height }}
        className="w-full rounded-2xl border border-border/60 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
      />
      {/* Vignette overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(7,7,12,0.15) 0%, transparent 15%, transparent 85%, rgba(7,7,12,0.2) 100%)'
      }} />
    </div>
  );
}
