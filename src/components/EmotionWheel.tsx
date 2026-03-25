import { motion } from "framer-motion";

const emotions = [
  { name: "Anger", color: "hsl(4, 90%, 58%)", rotation: 0 },
  { name: "Anticipation", color: "hsl(33, 100%, 50%)", rotation: 45 },
  { name: "Joy", color: "hsl(48, 100%, 50%)", rotation: 90 },
  { name: "Trust", color: "hsl(88, 50%, 49%)", rotation: 135 },
  { name: "Sadness", color: "hsl(232, 38%, 55%)", rotation: 180 },
  { name: "Surprise", color: "hsl(199, 98%, 48%)", rotation: 225 },
  { name: "Fear", color: "hsl(291, 64%, 42%)", rotation: 270 },
  { name: "Disgust", color: "hsl(16, 25%, 38%)", rotation: 315 },
];

interface EmotionWheelProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export const EmotionWheel = ({ size = 400, className = "", animated = true }: EmotionWheelProps) => {
  const center = size / 2;
  const outerRadius = size * 0.45;
  const innerRadius = size * 0.15;
  
  const createWedgePath = (startAngle: number, endAngle: number) => {
    const startOuter = polarToCartesian(center, center, outerRadius, startAngle);
    const endOuter = polarToCartesian(center, center, outerRadius, endAngle);
    const startInner = polarToCartesian(center, center, innerRadius, endAngle);
    const endInner = polarToCartesian(center, center, innerRadius, startAngle);
    
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M ${startOuter.x} ${startOuter.y}
            A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${endOuter.x} ${endOuter.y}
            L ${startInner.x} ${startInner.y}
            A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${endInner.x} ${endInner.y}
            Z`;
  };
  
  const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };
  
  const getLabelPosition = (angle: number) => {
    const labelRadius = outerRadius * 0.72;
    return polarToCartesian(center, center, labelRadius, angle + 22.5);
  };

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={animated ? { scale: 0.8, opacity: 0 } : undefined}
      animate={animated ? { scale: 1, opacity: 1 } : undefined}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Glow effect behind the wheel */}
      <div 
        className="absolute inset-0 blur-3xl opacity-40"
        style={{
          background: `conic-gradient(from 0deg, ${emotions.map(e => e.color).join(', ')}, ${emotions[0].color})`,
          borderRadius: "50%",
        }}
      />
      
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="relative z-10"
      >
        <defs>
          {emotions.map((emotion, i) => (
            <radialGradient key={`grad-${i}`} id={`gradient-${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="40%" stopColor={emotion.color} stopOpacity="1" />
              <stop offset="100%" stopColor={emotion.color} stopOpacity="0.7" />
            </radialGradient>
          ))}
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <g filter="url(#glow)">
          {emotions.map((emotion, i) => {
            const startAngle = i * 45;
            const endAngle = (i + 1) * 45;
            
            return (
              <motion.path
                key={emotion.name}
                d={createWedgePath(startAngle, endAngle)}
                fill={`url(#gradient-${i})`}
                stroke="hsla(240, 20%, 6%, 0.3)"
                strokeWidth="1"
                initial={animated ? { opacity: 0, scale: 0.5 } : undefined}
                animate={animated ? { opacity: 1, scale: 1 } : undefined}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ 
                  filter: "brightness(1.2)",
                  scale: 1.02,
                }}
                style={{ 
                  transformOrigin: "center",
                  cursor: "pointer",
                }}
              />
            );
          })}
        </g>
        
        <circle
          cx={center}
          cy={center}
          r={innerRadius - 2}
          fill="hsl(240, 20%, 6%)"
          stroke="hsla(220, 20%, 95%, 0.1)"
          strokeWidth="1"
        />
        
        {emotions.map((emotion, i) => {
          const pos = getLabelPosition(i * 45);
          const angle = i * 45 + 22.5;
          const textRotation = angle > 90 && angle < 270 ? angle + 180 : angle;
          
          return (
            <motion.text
              key={`label-${emotion.name}`}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="hsla(240, 20%, 6%, 0.9)"
              fontSize={size * 0.032}
              fontWeight="600"
              fontFamily="'Instrument Sans', sans-serif"
              transform={`rotate(${textRotation}, ${pos.x}, ${pos.y})`}
              initial={animated ? { opacity: 0 } : undefined}
              animate={animated ? { opacity: 1 } : undefined}
              transition={{ delay: 0.5 + i * 0.05 }}
              style={{ pointerEvents: "none" }}
            >
              {emotion.name}
            </motion.text>
          );
        })}
      </svg>
    </motion.div>
  );
};

export default EmotionWheel;
