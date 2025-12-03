"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Star,
  ArrowLeft,
  ArrowRight,
  Eraser,
  CheckCircle,
  RefreshCcw,
  Trophy,
  Pencil,
} from "lucide-react";
import Link from "next/link";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
const STROKE_WIDTH = 20;
const THRESHOLD_RATIO = 0.015;

const PALETTE = [
  { hex: "#2563eb", name: "Biru" },
  { hex: "#dc2626", name: "Merah" },
  { hex: "#16a34a", name: "Hijau" },
  { hex: "#d97706", name: "Oranye" },
  { hex: "#9333ea", name: "Ungu" },
  { hex: "#db2777", name: "Pink" },
  { hex: "#1f2937", name: "Hitam" },
];

export default function WriteGamePage() {
  const [mounted, setMounted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentColor, setCurrentColor] = useState(PALETTE[6].hex);
  const [score, setScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const guideCanvasRef = useRef<HTMLCanvasElement>(null);
  const drawCanvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);

  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(null);
  const particlesRef = useRef<any[]>([]);

  const playSound = useCallback((type: "success" | "pop") => {
    const AudioContext =
      window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "success") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(800, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } else {
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    }
  }, []);

  const setupCanvas = useCallback(() => {
    const container = containerRef.current;
    const guideCanvas = guideCanvasRef.current;
    const drawCanvas = drawCanvasRef.current;

    if (!container || !guideCanvas || !drawCanvas) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    guideCanvas.style.width = `${rect.width}px`;
    guideCanvas.style.height = `${rect.height}px`;
    drawCanvas.style.width = `${rect.width}px`;
    drawCanvas.style.height = `${rect.height}px`;

    guideCanvas.width = rect.width * dpr;
    guideCanvas.height = rect.height * dpr;
    drawCanvas.width = rect.width * dpr;
    drawCanvas.height = rect.height * dpr;

    const guideCtx = guideCanvas.getContext("2d");
    const drawCtx = drawCanvas.getContext("2d");

    if (guideCtx) guideCtx.scale(dpr, dpr);
    if (drawCtx) {
      drawCtx.scale(dpr, dpr);
      drawCtx.lineCap = "round";
      drawCtx.lineJoin = "round";
      drawCtx.lineWidth = STROKE_WIDTH;
      drawCtx.strokeStyle = currentColor;
    }

    drawLetterGuide();
  }, [currentColor]);

  const drawLetterGuide = useCallback(() => {
    const guideCanvas = guideCanvasRef.current;
    if (!guideCanvas) return;
    const ctx = guideCanvas.getContext("2d");
    if (!ctx) return;

    const w = parseFloat(guideCanvas.style.width);
    const h = parseFloat(guideCanvas.style.height);
    const letter = LETTERS[currentIdx];

    ctx.clearRect(0, 0, w, h);

    const fontSize = Math.min(w, h) * 0.75;
    ctx.font = `600 ${fontSize}px 'Fredoka', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#9ca3af";
    ctx.setLineDash([15, 15]);
    ctx.strokeText(letter, w / 2, h / 2 + h * 0.05);

    ctx.setLineDash([]);
  }, [currentIdx]);

  const clearDrawing = () => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const w = parseFloat(canvas.style.width);
    const h = parseFloat(canvas.style.height);
    ctx.clearRect(0, 0, w, h);
  };

  const getCoords = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    isDrawingRef.current = true;
    const { x, y } = getCoords(e);
    const ctx = drawCanvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawingRef.current) return;
    const { x, y } = getCoords(e);
    const ctx = drawCanvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDraw = () => {
    isDrawingRef.current = false;
    const ctx = drawCanvasRef.current?.getContext("2d");
    if (ctx) ctx.beginPath();
  };

  const handleNextLetter = () => {
    setIsModalOpen(false);
    stopConfetti();
    setCurrentIdx((prev) => (prev + 1) % LETTERS.length);
    clearDrawing();
  };

  const handlePrevLetter = () => {
    setCurrentIdx((prev) => (prev - 1 + LETTERS.length) % LETTERS.length);
    clearDrawing();
  };

  const handleColorChange = (hex: string) => {
    setCurrentColor(hex);
    playSound("pop");
    const ctx = drawCanvasRef.current?.getContext("2d");
    if (ctx) ctx.strokeStyle = hex;
  };

  const checkResult = () => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let coloredPixels = 0;

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] > 0) coloredPixels++;
    }

    const totalPixels = canvas.width * canvas.height;
    const ratio = coloredPixels / totalPixels;

    if (ratio > THRESHOLD_RATIO) {
      playSound("success");
      setScore((s) => s + 10);
      startConfetti();
      setIsModalOpen(true);
    } else {
      alert("Ayo, tebalkan garis putus-putusnya sampai penuh ya!");
    }
  };

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setupCanvas(), 100);

    window.addEventListener("resize", setupCanvas);

    return () => {
      window.removeEventListener("resize", setupCanvas);
      clearTimeout(timer);
      stopConfetti();
    };
  }, [setupCanvas]);

  useEffect(() => {
    drawLetterGuide();
  }, [currentIdx, drawLetterGuide]);

  const updateConfetti = () => {
    const canvas = confettiCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (particlesRef.current.length < 100) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: -10,
        size: Math.random() * 8 + 4,
        speedY: Math.random() * 5 + 2,
        speedX: Math.random() * 2 - 1,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)].hex,
        rotation: Math.random() * 360,
      });
    }

    particlesRef.current.forEach((p, i) => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += 2;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
      if (p.y > canvas.height) particlesRef.current.splice(i, 1);
    });

    if (particlesRef.current.length > 0) {
      animationFrameRef.current = requestAnimationFrame(updateConfetti);
    }
  };

  const startConfetti = () => {
    if (confettiCanvasRef.current) {
      confettiCanvasRef.current.width = window.innerWidth;
      confettiCanvasRef.current.height = window.innerHeight;
      particlesRef.current = [];
      updateConfetti();
    }
  };

  const stopConfetti = () => {
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);
    particlesRef.current = [];
    if (confettiCanvasRef.current) {
      const ctx = confettiCanvasRef.current.getContext("2d");
      ctx?.clearRect(
        0,
        0,
        confettiCanvasRef.current.width,
        confettiCanvasRef.current.height,
      );
    }
  };

  if (!mounted) return <div className="min-h-screen bg-green-500" />;

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#10b981] font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@600&display=swap");
        .font-fredoka {
          font-family: "Fredoka", sans-serif;
        }
        .notebook-pattern {
          background-color: #f0fdf4;
          background-image:
            linear-gradient(#d1fae5 2px, transparent 2px),
            /* Garis horizontal hijau tipis */
              linear-gradient(90deg, #d1fae5 2px, transparent 2px); /* Grid kotak-kotak */
          background-size: 40px 40px;
        }
      `}</style>

      <header className="relative z-10 flex items-center justify-between p-4 text-white sm:p-6">
        <Link
          href="/games"
          className="flex items-center gap-2 rounded-xl px-3 py-2 transition-all hover:bg-white/20"
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="hidden text-lg font-bold sm:inline">Kembali</span>
        </Link>

        <div className="flex gap-4">
          <div className="flex items-center gap-2 rounded-full border-2 border-yellow-300 bg-yellow-400 px-4 py-1.5 font-bold text-yellow-900 shadow-lg">
            <Star className="h-5 w-5 fill-current" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center p-4">
        <div className="relative flex w-full max-w-md flex-col items-center rounded-3xl border-r-8 border-b-8 border-[#fef3c7] bg-[#fffbeb] p-6 shadow-2xl">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Tarik garis sesuai bentuk
            </h1>
            <p className="text-sm text-gray-500">
              Ikuti garis putus-putusnya, ya!
            </p>
          </div>

          <div
            ref={containerRef}
            className="notebook-pattern relative aspect-square w-full touch-none overflow-hidden rounded-3xl border-4 border-green-400 bg-white shadow-inner"
          >
            <canvas
              ref={guideCanvasRef}
              className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            />

            <canvas
              ref={drawCanvasRef}
              className="absolute inset-0 z-20 h-full w-full cursor-crosshair touch-none"
              onMouseDown={startDraw}
              onMouseMove={draw}
              onMouseUp={stopDraw}
              onMouseLeave={stopDraw}
              onTouchStart={startDraw}
              onTouchMove={draw}
              onTouchEnd={stopDraw}
            />

            <button
              onClick={handlePrevLetter}
              className="absolute top-1/2 left-2 z-30 -translate-y-1/2 rounded-full bg-white/80 p-2 text-green-600 shadow-md transition-transform hover:bg-white active:scale-90"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNextLetter}
              className="absolute top-1/2 right-2 z-30 -translate-y-1/2 rounded-full bg-white/80 p-2 text-green-600 shadow-md transition-transform hover:bg-white active:scale-90"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flex w-full items-center justify-between gap-2">
            <button
              onClick={clearDrawing}
              className="flex flex-col items-center gap-1 rounded-xl bg-red-100 p-3 text-xs font-bold text-red-500 transition-colors hover:bg-red-200"
            >
              <Eraser className="h-6 w-6" />
              Hapus
            </button>

            <div className="no-scrollbar mx-2 flex-1 overflow-x-auto">
              <div className="flex gap-2 px-1 py-1">
                {PALETTE.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => handleColorChange(c.hex)}
                    className={`relative h-10 w-10 shrink-0 rounded-full border-4 shadow-sm transition-transform ${currentColor === c.hex ? "z-10 scale-110 border-gray-800" : "scale-100 border-white hover:scale-105"} `}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                  >
                    {currentColor === c.hex && (
                      <Pencil className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-md" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={checkResult}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border-b-4 border-[#047857] bg-[#10b981] py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-[#059669] active:scale-95"
          >
            Kirim!
          </button>
        </div>
      </main>

      {isModalOpen && (
        <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="animate-in zoom-in-95 w-full max-w-sm rounded-3xl border-b-8 border-green-200 bg-white p-8 text-center shadow-2xl duration-300">
            <div className="mx-auto mb-4 flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-yellow-100">
              <Trophy className="h-12 w-12 text-yellow-600" />
            </div>
            <h2 className="font-fredoka mb-2 text-3xl font-bold text-green-600">
              Bagus Sekali!
            </h2>
            <p className="mb-6 text-gray-500">Tulisanmu semakin rapi.</p>
            <button
              onClick={handleNextLetter}
              className="w-full rounded-xl border-b-4 border-green-700 bg-green-500 py-3 text-lg font-bold text-white shadow-md transition-all hover:bg-green-600 active:scale-95"
            >
              Lanjut Huruf Berikutnya
            </button>
          </div>
        </div>
      )}

      <canvas
        ref={confettiCanvasRef}
        className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      />
    </div>
  );
}
