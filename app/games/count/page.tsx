"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Star, Volume2, VolumeX, RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GameState {
  num1: number;
  num2: number;
  result: number;
  missingIndex: 0 | 1;
  correctAnswer: number;
}

export default function CountGamePage() {
  const [mounted, setMounted] = useState(false);
  const [score, setScore] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const [gameState, setGameState] = useState<GameState>({
    num1: 0,
    num2: 0,
    result: 0,
    missingIndex: 0,
    correctAnswer: 0,
  });
  const [options, setOptions] = useState<number[]>([]);
  const [userAnswer, setUserAnswer] = useState<number | null>(null);

  const [feedback, setFeedback] = useState<"idle" | "correct" | "error">(
    "idle",
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetHovered, setTargetHovered] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(null);
  const particlesRef = useRef<any[]>([]);
  const draggedItemRef = useRef<{
    el: HTMLElement;
    offsetX: number;
    offsetY: number;
    value: number;
  } | null>(null);
  const isHoveringTargetRef = useRef(false);

  const playSound = useCallback(
    (type: "pop" | "success" | "error") => {
      if (!soundEnabled) return;
      const AudioContext =
        window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === "pop") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start();
        osc.stop(now + 0.1);
      } else if (type === "success") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.setValueAtTime(600, now + 0.1);
        osc.frequency.setValueAtTime(1000, now + 0.2);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.5);
        osc.start();
        osc.stop(now + 0.5);
      } else if (type === "error") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.3);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.3);
        osc.start();
        osc.stop(now + 0.3);
      }
    },
    [soundEnabled],
  );

  const speak = (text: string) => {
    if (
      !soundEnabled ||
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    )
      return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    window.speechSynthesis.speak(utterance);
  };

  const generateLevel = useCallback(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    const missingIdx = Math.random() > 0.5 ? 0 : 1;
    const correct = missingIdx === 0 ? a : b;
    const res = a + b;

    setGameState({
      num1: a,
      num2: b,
      result: res,
      missingIndex: missingIdx as 0 | 1,
      correctAnswer: correct,
    });

    const opts = new Set<number>();
    opts.add(correct);
    while (opts.size < 3) {
      let r = Math.floor(Math.random() * 15) + 1;
      if (r !== correct && r !== res) opts.add(r);
    }
    setOptions(Array.from(opts).sort(() => Math.random() - 0.5));

    setUserAnswer(null);
    setFeedback("idle");
    setIsModalOpen(false);
    setTargetHovered(false);
    isHoveringTargetRef.current = false;
    stopConfetti();
  }, []);

  useEffect(() => {
    setMounted(true);
    generateLevel();
    return () => stopConfetti();
  }, [generateLevel]);

  const updateParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (particlesRef.current.length < 150) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: -10,
        size: Math.random() * 10 + 5,
        speedY: Math.random() * 3 + 2,
        speedX: Math.random() * 2 - 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        rotation: Math.random() * 360,
      });
    }

    particlesRef.current.forEach((p, index) => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += 2;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();

      if (p.y > canvas.height) particlesRef.current.splice(index, 1);
    });

    if (particlesRef.current.length > 0) {
      animationFrameRef.current = requestAnimationFrame(updateParticles);
    }
  };

  const startConfetti = () => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      particlesRef.current = [];
      updateParticles();
    }
  };

  const stopConfetti = () => {
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);
    particlesRef.current = [];
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const handleDragStart = (
    e: React.TouchEvent | React.MouseEvent,
    val: number,
  ) => {
    if (userAnswer !== null) return;

    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    draggedItemRef.current = {
      el: target,
      value: val,
      offsetX: clientX - rect.left,
      offsetY: clientY - rect.top,
    };

    const ghost = target.cloneNode(true) as HTMLElement;
    ghost.id = "drag-ghost";
    ghost.style.position = "fixed";
    ghost.style.left = `${rect.left}px`;
    ghost.style.top = `${rect.top}px`;
    ghost.style.width = `${rect.width}px`;
    ghost.style.height = `${rect.height}px`;
    ghost.style.zIndex = "1000";
    ghost.style.opacity = "0.9";
    ghost.style.pointerEvents = "none";
    ghost.style.transform = "scale(1.1)";
    document.body.appendChild(ghost);

    target.style.opacity = "0.3";

    if ("touches" in e) {
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onDragEnd);
    } else {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onDragEnd);
    }
  };

  const moveGhost = (clientX: number, clientY: number) => {
    const ghost = document.getElementById("drag-ghost");
    if (!ghost || !draggedItemRef.current) return;

    ghost.style.left = `${clientX - draggedItemRef.current.offsetX}px`;
    ghost.style.top = `${clientY - draggedItemRef.current.offsetY}px`;

    const dropZone = document.getElementById("drop-zone");
    if (dropZone) {
      const rect = dropZone.getBoundingClientRect();
      const isHovering =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;

      isHoveringTargetRef.current = isHovering;

      setTargetHovered((prev) => {
        if (prev !== isHovering) return isHovering;
        return prev;
      });
    }
  };

  const onMouseMove = (e: MouseEvent) => moveGhost(e.clientX, e.clientY);
  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    moveGhost(e.touches[0].clientX, e.touches[0].clientY);
  };

  const onDragEnd = (e: MouseEvent | TouchEvent) => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onDragEnd);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onDragEnd);

    const ghost = document.getElementById("drag-ghost");
    if (ghost) ghost.remove();

    if (draggedItemRef.current?.el) {
      draggedItemRef.current.el.style.opacity = "1";
    }

    let clientX, clientY;
    if ("changedTouches" in e) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
    } else {
      clientX = (e as MouseEvent).clientX;
      clientY = (e as MouseEvent).clientY;
    }

    const dropZone = document.getElementById("drop-zone");
    let isDroppedOnTarget = false;

    if (dropZone) {
      const rect = dropZone.getBoundingClientRect();
      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        isDroppedOnTarget = true;
      }
    }

    if (isDroppedOnTarget && draggedItemRef.current) {
      handleOptionSelect(draggedItemRef.current.value);
    }

    setTargetHovered(false);
    isHoveringTargetRef.current = false;
    draggedItemRef.current = null;
  };

  const handleOptionSelect = (val: number) => {
    if (userAnswer !== null) return;
    setUserAnswer(val);
    playSound("pop");
  };

  const handleReset = () => {
    setUserAnswer(null);
    setFeedback("idle");
  };

  const checkAnswer = () => {
    if (userAnswer === gameState.correctAnswer) {
      setFeedback("correct");
      setScore((s) => s + 10);
      playSound("success");
      speak("Jawaban kamu benar, hebat!");
      startConfetti();
      setIsModalOpen(true);
    } else {
      setFeedback("error");
      playSound("error");

      const dropZone = document.getElementById("drop-zone");
      dropZone?.classList.add("animate-shake");
      setTimeout(() => dropZone?.classList.remove("animate-shake"), 500);
    }
  };

  if (!mounted) return <div className="min-h-screen bg-red-50" />;

  return (
    <div className="bg-theme-coral relative flex min-h-screen flex-col items-center justify-center overflow-y-auto p-4">
      <style jsx global>{`
        body {
          background-image: radial-gradient(#bae6fd 2px, transparent 2px);
          background-size: 30px 30px;
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
          border-color: #ef4444 !important;
        }
      `}</style>

      <header className="mt-4 mb-6 flex w-full max-w-md items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border-2 border-red-400 bg-white px-4 py-2 shadow-md">
          <Star className="h-6 w-6 fill-current text-yellow-400" />
          <span className="text-xl font-bold text-red-600">Skor: {score}</span>
        </div>
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="rounded-full border-2 border-red-400 bg-white p-2 text-red-500 shadow-md transition-colors hover:bg-red-50"
        >
          {soundEnabled ? (
            <Volume2 className="h-6 w-6" />
          ) : (
            <VolumeX className="h-6 w-6" />
          )}
        </button>
      </header>

      <main className="border-theme-yellow-300 relative z-10 mb-8 w-full max-w-md rounded-3xl border-r-8 border-b-8 bg-white p-6 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-700">
            Lengkapi Kotak Kosong!
          </h1>
          <p className="text-sm text-gray-500">Tarik angka ke dalam kotak.</p>
        </div>

        <div className="mb-10 flex items-center justify-center gap-2 text-4xl font-bold text-gray-800 sm:gap-4 sm:text-5xl">
          {gameState.missingIndex === 0 ? (
            <div
              id="drop-zone"
              className={`flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-300 sm:h-24 sm:w-24 ${
                userAnswer !== null
                  ? "border-4 border-yellow-500 bg-yellow-300 text-yellow-800 shadow-inner"
                  : `border-4 border-dashed border-gray-300 bg-white text-gray-400 ${targetHovered ? "scale-105 border-green-400 bg-green-100" : ""}`
              } `}
            >
              {userAnswer !== null ? userAnswer : "?"}
            </div>
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-100 text-red-600 shadow-inner sm:h-24 sm:w-24">
              {gameState.num1}
            </div>
          )}

          <span>+</span>

          {gameState.missingIndex === 1 ? (
            <div
              id="drop-zone"
              className={`flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-300 sm:h-24 sm:w-24 ${
                userAnswer !== null
                  ? "border-4 border-yellow-500 bg-yellow-300 text-yellow-800 shadow-inner"
                  : `border-4 border-dashed border-gray-300 bg-white text-gray-400 ${targetHovered ? "scale-105 border-green-400 bg-green-100" : ""}`
              } `}
            >
              {userAnswer !== null ? userAnswer : "?"}
            </div>
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-100 text-red-600 shadow-inner sm:h-24 sm:w-24">
              {gameState.num2}
            </div>
          )}

          <span>=</span>

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-green-300 bg-green-100 text-green-600 shadow-inner sm:h-24 sm:w-24">
            {gameState.result}
          </div>
        </div>

        <div className="mb-4 flex h-10 items-center justify-center">
          {userAnswer !== null && !isModalOpen && (
            <Button
              variant={"destructive"}
              onClick={handleReset}
              size={"sm"}
              className="border-b-2 border-red-900"
            >
              <RotateCcw className="h-4 w-4" /> Batalkan
            </Button>
          )}
        </div>

        <div className="relative">
          <h3 className="mb-3 text-center text-sm font-semibold tracking-wider text-gray-400 uppercase">
            Pilihan Jawaban
          </h3>
          <div className="grid grid-cols-3 justify-items-center gap-4">
            {options.map((opt, i) => (
              <div
                key={`${opt}-${i}`}
                onTouchStart={(e) => handleDragStart(e, opt)}
                onMouseDown={(e) => handleDragStart(e, opt)}
                onClick={() => handleOptionSelect(opt)}
                className={`flex h-20 w-20 cursor-grab touch-none items-center justify-center rounded-2xl border-b-4 border-red-900 bg-red-500 text-4xl font-bold text-yellow-300 transition-all select-none hover:translate-y-1 active:translate-y-2 active:shadow-none ${userAnswer !== null ? "pointer-events-none cursor-not-allowed opacity-50" : ""} `}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={checkAnswer}
            disabled={userAnswer === null}
            className={`w-full rounded-2xl border-b-4 py-4 text-xl font-bold text-white shadow-lg transition-all ${
              userAnswer === null
                ? "cursor-not-allowed border-gray-400 bg-gray-300 opacity-50"
                : "border-red-800 bg-linear-to-r from-red-500 to-red-600 hover:shadow-xl active:scale-95"
            } `}
          >
            Jawab!
          </button>
        </div>
      </main>

      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 h-full w-full"
        style={{ display: isModalOpen ? "block" : "none" }}
      />

      {isModalOpen && (
        <div className="animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm duration-300">
          <div className="animate-in zoom-in-95 mx-4 w-full max-w-sm transform rounded-3xl border-4 border-yellow-400 bg-white p-8 text-center shadow-2xl duration-300">
            <div className="mx-auto mb-4 flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-yellow-100">
              <Trophy className="h-12 w-12 text-yellow-600" />
            </div>
            <h2 className="mb-2 text-3xl font-bold text-green-600">Hebat!</h2>
            <p className="mb-6 text-lg text-gray-600">
              Jawaban kamu benar.
              <br />
              <span className="font-bold text-gray-800">
                {gameState.num1} + {gameState.num2} = {gameState.result}
              </span>
            </p>
            <button
              onClick={generateLevel}
              className="w-full rounded-xl border-b-4 border-green-700 bg-green-500 py-3 text-xl font-bold text-white shadow-md transition-all hover:bg-green-600 active:scale-95"
            >
              Soal Berikutnya
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
