"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Star,
  Volume2,
  VolumeX,
  ArrowLeft,
  Trophy,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

const VOCAB_DATA = [
  { id: "book", word: "Buku", img: "/icons/book.png" },
  { id: "house", word: "Rumah", img: "/icons/house.png" },
  { id: "pencil", word: "Pensil", img: "/icons/pencil.png" },
  { id: "cake", word: "Kue", img: "/icons/cake.png" },
];

interface QuestionState {
  target: (typeof VOCAB_DATA)[0];
  options: typeof VOCAB_DATA;
}

export default function ReadGamePage() {
  const [mounted, setMounted] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const [question, setQuestion] = useState<QuestionState | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackState, setFeedbackState] = useState<"idle" | "shake">("idle");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(null);
  const particlesRef = useRef<any[]>([]);

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
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start();
        osc.stop(now + 0.1);
      } else if (type === "success") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(500, now);
        osc.frequency.linearRampToValueAtTime(1000, now + 0.1);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.5);
        osc.start();
        osc.stop(now + 0.5);
      } else if (type === "error") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.3);
        gain.gain.setValueAtTime(0.3, now);
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
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const generateLevel = useCallback(() => {
    const uniqueItems = Array.from(new Set(VOCAB_DATA.map((i) => i.id))).map(
      (id) => VOCAB_DATA.find((i) => i.id === id)!,
    );

    const targetIndex = Math.floor(Math.random() * uniqueItems.length);
    const target = uniqueItems[targetIndex];

    const distractors = uniqueItems.filter((item) => item.id !== target.id);
    const shuffledDistractors = distractors
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const options = [target, ...shuffledDistractors].sort(
      () => 0.5 - Math.random(),
    );

    setQuestion({ target, options });
    setSelectedId(null);
    setIsModalOpen(false);
    stopConfetti();
  }, []);

  useEffect(() => {
    setMounted(true);
    generateLevel();
    return () => stopConfetti();
  }, [generateLevel]);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    playSound("pop");
  };

  const handleSubmit = () => {
    if (!question || !selectedId) return;

    if (selectedId === question.target.id) {
      playSound("success");
      setScore((s) => s + 10);
      setLevel((l) => l + 1);
      speak(`Hebat! Itu adalah ${question.target.word}`);
      startConfetti();
      setIsModalOpen(true);
    } else {
      playSound("error");
      setFeedbackState("shake");
      setTimeout(() => setFeedbackState("idle"), 500);
      speak("Coba lagi ya");
    }
  };

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
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
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

  if (!mounted) return <div className="min-h-screen bg-violet-100" />;

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#8b5cf6] font-sans">
      <header className="relative z-10 flex items-center justify-between p-4 text-white sm:p-6">
        <Link
          href={"/"}
          className="flex items-center gap-2 rounded-xl px-3 py-2 transition-all hover:bg-white/10"
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="text-lg font-bold">Kembali</span>
        </Link>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="rounded-full p-2 transition-colors hover:bg-white/10"
        >
          {soundEnabled ? (
            <Volume2 className="h-6 w-6" />
          ) : (
            <VolumeX className="h-6 w-6" />
          )}
        </button>
      </header>

      <div className="relative z-10 mb-4 flex justify-center gap-4 px-4">
        <div className="flex items-center gap-2 rounded-full border-2 border-yellow-300 bg-yellow-400 px-4 py-1.5 font-bold text-yellow-900 shadow-lg">
          <Star className="h-5 w-5 fill-current" />
          <span>Skor: {score}</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border-2 border-violet-200 bg-white px-4 py-1.5 font-bold text-violet-600 shadow-lg">
          <HelpCircle className="h-5 w-5" />
          <span>Level: {level}</span>
        </div>
      </div>
      <main className="relative z-10 flex flex-1 items-center justify-center p-4">
        <div className="relative w-full max-w-md rounded-3xl bg-[#fff9ed] p-6 shadow-[10.811px_10.811px_0_0_#E1CAFF] sm:p-8">
          <div className="relative mt-2 mb-8 text-center">
            <h1
              className="text-5xl font-black tracking-tight text-gray-800 sm:text-6xl"
              onClick={() => speak(question?.target.word || "")}
            >
              {question?.target.word}
            </h1>
            <p className="mt-2 text-sm font-medium text-gray-400">
              Pilih gambar yang sesuai
            </p>
          </div>

          <div
            className={`mb-8 grid grid-cols-2 gap-4 ${feedbackState === "shake" ? "animate-shake" : ""}`}
          >
            <style jsx>{`
              @keyframes shake {
                0%,
                100% {
                  transform: translateX(0);
                }
                25% {
                  transform: translateX(-8px);
                }
                75% {
                  transform: translateX(8px);
                }
              }
              .animate-shake {
                animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
              }
            `}</style>

            {question?.options.map((opt, idx) => {
              const isSelected = selectedId === opt.id;
              return (
                <div
                  key={`${opt.id}-${idx}`}
                  onClick={() => handleSelect(opt.id)}
                  className={`group relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-4 p-4 shadow-sm transition-all duration-200 ${
                    isSelected
                      ? "z-10 scale-105 border-violet-500 bg-violet-100 shadow-[0_0_0_4px_rgba(139,92,246,0.2)]"
                      : "border-violet-100 bg-white hover:scale-105 hover:border-violet-300"
                  } `}
                >
                  <div className="relative flex h-full w-full items-center justify-center">
                    <img
                      src={opt.img}
                      alt={opt.word}
                      className="h-full w-full object-contain drop-shadow-md transition-all group-hover:drop-shadow-xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        (
                          e.target as HTMLImageElement
                        ).parentElement!.innerText = opt.word;
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selectedId}
            className={`w-full transform rounded-xl py-4 text-xl font-bold text-white shadow-lg transition-all ${
              selectedId
                ? "bg-[#8b5cf6] shadow-violet-300/50 hover:bg-[#7c3aed] active:scale-95"
                : "cursor-not-allowed bg-gray-300"
            } `}
          >
            Kirim!
          </button>
        </div>
      </main>

      {isModalOpen && (
        <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="animate-in zoom-in-95 w-full max-w-sm rounded-3xl border-b-8 border-violet-200 bg-white p-8 text-center shadow-2xl duration-300">
            <div className="mx-auto mb-4 flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-yellow-100">
              <Trophy className="h-12 w-12 text-yellow-600" />
            </div>
            <h2 className="mb-2 text-3xl font-bold text-violet-600">Benar!</h2>
            <p className="mb-6 text-gray-500">
              Itu adalah gambar{" "}
              <span className="font-bold text-gray-800">
                {question?.target.word}
              </span>
            </p>
            <button
              onClick={generateLevel}
              className="w-full rounded-xl bg-violet-500 py-3 text-lg font-bold text-white shadow-md transition-all hover:bg-violet-600 active:scale-95"
            >
              Lanjut Main
            </button>
          </div>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-40 h-full w-full"
      />
    </div>
  );
}
