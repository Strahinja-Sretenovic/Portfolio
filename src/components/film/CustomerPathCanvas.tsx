import { useEffect, useRef } from "react";

interface CustomerPathCanvasProps {
  progress: number; // 0.0 to 1.0
}

export function CustomerPathCanvas({ progress }: CustomerPathCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Cap DPR to 1.5 on desktop, 1.0-1.25 on mobile to avoid high-DPR lag
    const isMobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.5);
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // If in Form phase (>= 0.90), clear and sleep canvas completely to release GPU/CPU
    if (progress >= 0.90) {
      ctx.clearRect(0, 0, width, height);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    // 1. Prologue (0.00 - 0.09)
    if (progress <= 0.09) {
      const pNorm = progress / 0.09;
      const sparkY = cy + (1 - pNorm) * 20;

      // Draw initial point
      const grad = ctx.createRadialGradient(cx, sparkY, 0, cx, sparkY, 18);
      grad.addColorStop(0, "rgba(59, 130, 246, 1)");
      grad.addColorStop(0.5, "rgba(59, 130, 246, 0.4)");
      grad.addColorStop(1, "rgba(59, 130, 246, 0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, sparkY, 18, 0, Math.PI * 2);
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

    // 2. Search & Choice (0.09 - 0.19)
    else if (progress <= 0.19) {
      const sNorm = (progress - 0.09) / 0.10;
      
      ctx.strokeStyle = "rgba(59, 130, 246, 0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 80);
      ctx.lineTo(cx, cy - 10);
      ctx.stroke();

      // Branch to 3 search results
      const offsets = isMobile ? [-110, 0, 110] : [-180, 0, 180];
      offsets.forEach((xOff, i) => {
        const isWinner = i === 1;
        ctx.strokeStyle = isWinner ? "rgba(59, 130, 246, 0.9)" : "rgba(148, 163, 184, 0.3)";
        ctx.lineWidth = isWinner ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy - 10);
        ctx.lineTo(cx + xOff * sNorm, cy + (isMobile ? 60 : 80));
        ctx.stroke();

        // End point spark
        ctx.fillStyle = isWinner ? "rgba(59, 130, 246, 1)" : "rgba(148, 163, 184, 0.5)";
        ctx.beginPath();
        ctx.arc(cx + xOff * sNorm, cy + (isMobile ? 60 : 80), isWinner ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // 3. Decision Tunnel (0.19 - 0.31)
    else if (progress <= 0.31) {
      const dNorm = (progress - 0.19) / 0.12;
      const targetX = width > 768 ? cx + width * 0.15 : cx;
      const startY = cy - 140;
      const endY = cy + 140;
      const currentY = startY + dNorm * (endY - startY);

      // Clean line without heavy shadowBlur
      ctx.strokeStyle = "rgba(59, 130, 246, 0.9)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(targetX, startY);
      ctx.lineTo(targetX, currentY);
      ctx.stroke();

      // Active Head Spark
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(targetX, currentY, 4.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4. Break / Fracture (0.31 - 0.40)
    else if (progress <= 0.40) {
      // Red fracture line
      ctx.strokeStyle = "rgba(239, 68, 68, 0.9)";
      ctx.lineWidth = 2.5;
      
      const span = isMobile ? 90 : 140;
      // Left side connected
      ctx.beginPath();
      ctx.moveTo(cx - span, cy);
      ctx.lineTo(cx - 20, cy);
      ctx.stroke();

      // Fracture sparks (fixed, lightweight positions)
      const sparkOffsets = [
        { dx: -5, dy: -8 },
        { dx: 4, dy: 10 },
        { dx: -12, dy: 6 },
        { dx: 8, dy: -6 }
      ];
      ctx.fillStyle = "rgba(239, 68, 68, 0.9)";
      sparkOffsets.forEach(pos => {
        ctx.beginPath();
        ctx.arc(cx + pos.dx, cy + pos.dy, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Right side broken / separated
      ctx.strokeStyle = "rgba(148, 163, 184, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx + 20, cy);
      ctx.lineTo(cx + span, cy);
      ctx.stroke();
    }

    // 5. Diagnosis Radar & Scanning (0.49 - 0.59)
    else if (progress >= 0.49 && progress <= 0.59) {
      const diagNorm = (progress - 0.49) / 0.10;
      
      // Rotating radar beam
      const angle = diagNorm * Math.PI * 4;
      const radius = (isMobile ? 120 : 170) * Math.min(1, diagNorm * 2);

      ctx.strokeStyle = "rgba(59, 130, 246, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
      ctx.stroke();
    }

    // 6. Machine (0.68 - 0.77)
    else if (progress >= 0.68 && progress <= 0.77) {
      const mNorm = (progress - 0.68) / 0.09;
      const railWidth = isMobile ? width * 0.4 : 320;
      const railStartX = cx - railWidth;
      const railEndX = cx + railWidth;
      const headX = railStartX + mNorm * (railEndX - railStartX);

      ctx.strokeStyle = "rgba(59, 130, 246, 0.85)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(railStartX, cy - 50);
      ctx.lineTo(headX, cy - 50);
      ctx.stroke();
    }

  }, [progress]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      style={{ opacity: progress >= 0.90 ? 0 : 1, transition: "opacity 0.2s ease" }}
    />
  );
}
