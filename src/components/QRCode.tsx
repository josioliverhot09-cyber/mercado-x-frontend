import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QRCodeProps {
  value: string;
  size?: number;
  level?: "L" | "M" | "Q" | "H";
  includeMargin?: boolean;
}

export default function QRCodeComponent({
  value,
  size = 300,
  level = "H",
  includeMargin = true
}: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && value) {
      QRCode.toCanvas(
        canvasRef.current,
        value,
        {
          width: size,
          margin: includeMargin ? 2 : 0,
          color: {
            dark: "#000000",
            light: "#ffffff"
          },
          errorCorrectionLevel: level
        },
        (error: Error | null | undefined) => {
          if (error) {
            console.error("Erro ao gerar QR Code:", error);
          }
        }
      );
    }
  }, [value, size, level, includeMargin]);

  return (
    <div className="flex justify-center">
      <canvas
        ref={canvasRef}
        className="rounded-lg border-4 border-primary/20 p-2 bg-white"
      />
    </div>
  );
}
