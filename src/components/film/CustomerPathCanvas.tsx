import { useEffect, useRef } from "react";

interface CustomerPathCanvasProps {
  progress: number; // 0.0 to 1.0
}

export function CustomerPathCanvas({ progress }: CustomerPathCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const render = () => {
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // 1. Prologue (0.00 - 0.08)
      if (progress <= 0.08) {
        const pNorm = progress / 0.08;
        const sparkY = cy + (1 - pNorm) * 20;

        // Draw initial point with soft glow
        const grad = ctx.createRadialGradient(cx, sparkY, 0, cx, sparkY, 24);
        grad.addColorStop(0, "rgba(59, 130, 246, 1)");
        grad.addColorStop(0.5, "rgba(59, 130, 246, 0.4)");
        grad.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, sparkY, 24, 0, Math.PI * 2);
        ctx.fill();

        // Vector line drawing upward
        if (pNorm > 0.3) {
          const lineProgress = (pNorm - 0.3) / 0.7;
          ctx.strokeStyle = "rgba(59, 130, 246, 0.85)";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(cx, cy + 40);
          ctx.lineTo(cx, cy + 40 - lineProgress * 120);
          ctx.stroke();
        }
      }

      // 2. Search & Choice (0.08 - 0.18)
      else if (progress <= 0.18) {
        const sNorm = (progress - 0.08) / 0.10;
        
        ctx.strokeStyle = "rgba(59, 130, 246, 0.6)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy - 80);
        ctx.lineTo(cx, cy - 10);
        ctx.stroke();

        // Branch to 3 search results
        [-180, 0, 180].forEach((xOff, i) => {
          const isWinner = i === 1;
          ctx.strokeStyle = isWinner ? "rgba(59, 130, 246, 0.9)" : "rgba(148, 163, 184, 0.3)";
          ctx.lineWidth = isWinner ? 2.5 : 1.5;
          ctx.beginPath();
          ctx.moveTo(cx, cy - 10);
          ctx.lineTo(cx + xOff * sNorm, cy + 80);
          ctx.stroke();

          // End point spark
          ctx.fillStyle = isWinner ? "rgba(59, 130, 246, 1)" : "rgba(148, 163, 184, 0.5)";
          ctx.beginPath();
          ctx.arc(cx + xOff * sNorm, cy + 80, isWinner ? 4 : 2.5, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // 3. Decision Tunnel (0.18 - 0.30)
      else if (progress <= 0.30) {
        const dNorm = (progress - 0.18) / 0.12;
        const targetX = width > 768 ? cx + width * 0.15 : cx;
        const startY = cy - 160;
        const endY = cy + 160;
        const currentY = startY + dNorm * (endY - startY);

        // Path moving through layers
        ctx.strokeStyle = "rgba(59, 130, 246, 0.9)";
        ctx.lineWidth = 3;
        ctx.shadowColor = "rgba(59, 130, 246, 0.8)";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(targetX, startY);
        ctx.lineTo(targetX, currentY);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Active Head Spark
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(targetX, currentY, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Break / Fracture (0.30 - 0.38)
      else if (progress <= 0.38) {
        const bNorm = (progress - 0.30) / 0.08;
        
        // Red fracture line
        ctx.strokeStyle = "rgba(239, 68, 68, 0.9)";
        ctx.lineWidth = 3;
        ctx.shadowColor = "rgba(239, 68, 68, 0.8)";
        ctx.shadowBlur = 15;
        
        // Left side connected
        ctx.beginPath();
        ctx.moveTo(cx - 140, cy);
        ctx.lineTo(cx - 20, cy);
        ctx.stroke();

        // Fracture sparks
        for (let i = 0; i < 4; i++) {
          ctx.fillStyle = "rgba(239, 68, 68, 0.9)";
          const sparkAngle = Math.random() * Math.PI * 2;
          const dist = 10 + Math.random() * 25;
          ctx.beginPath();
          ctx.arc(cx + Math.cos(sparkAngle) * dist, cy + Math.sin(sparkAngle) * dist, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Right side broken / separated
        ctx.strokeStyle = "rgba(148, 163, 184, 0.2)";
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.moveTo(cx + 30, cy);
        ctx.lineTo(cx + 140, cy);
        ctx.stroke();
      }

      // 5. Diagnosis Radar & Scanning (0.46 - 0.56)
      else if (progress >= 0.46 && progress <= 0.56) {
        const diagNorm = (progress - 0.46) / 0.10;
        
        // Rotating radar beam
        const angle = diagNorm * Math.PI * 4;
        const radius = 180 * Math.min(1, diagNorm * 2);

        ctx.strokeStyle = "rgba(59, 130, 246, 0.35)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
        ctx.stroke();
      }

      // 6. Machine (0.65 - 0.74)
      else if (progress >= 0.65 && progress <= 0.74) {
        const mNorm = (progress - 0.65) / 0.09;
        const railStartX = cx - 350;
        const railEndX = cx + 350;
        const headX = railStartX + mNorm * (railEndX - railStartX);

        ctx.strokeStyle = "rgba(59, 130, 246, 0.9)";
        ctx.lineWidth = 3;
        ctx.shadowColor = "rgba(59, 130, 246, 0.8)";
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(railStartX, cy - 60);
        ctx.lineTo(headX, cy - 60);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // 7. Form Baseline (0.88 - 1.00)
      else if (progress >= 0.88) {
        const fNorm = (progress - 0.88) / 0.12;
        const baselineWidth = Math.min(600, width * 0.85);

        ctx.strokeStyle = "rgba(59, 130, 246, 0.7)";
        ctx.lineWidth = 2;
        ctx.shadowColor = "rgba(59, 130, 246, 0.6)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(cx - (baselineWidth / 2) * fNorm, cy + 180);
        ctx.lineTo(cx + (baselineWidth / 2) * fNorm, cy + 180);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    };

    render();

    const handleResize = () => {
      render();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [progress]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}
