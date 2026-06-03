import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoader } from './LoaderContext';

const TILE_SIZE = 24;

// ─── Single Tile (black square that disappears to reveal page) ────────────────

const Tile = React.memo(({ col, row, delay }) => (
  <motion.div
    style={{
      position: 'absolute',
      left:   col * TILE_SIZE,
      top:    row * TILE_SIZE,
      width:  TILE_SIZE,
      height: TILE_SIZE,
      background: '#ffffff',
      willChange: 'transform, opacity',
    }}
    initial={{ opacity: 1, scale: 1 }}
    animate={{ opacity: 0, scale: 0.6 }}
    transition={{ duration: 0.22, delay, ease: 'easeIn' }}
  />
));

// ─── PageLoader ───────────────────────────────────────────────────────────────

const PageLoader = () => {
  const { setIsLoaded } = useLoader();
  const [phase, setPhase]   = useState('intro');   // intro → reveal → done
  const [visible, setVisible] = useState(true);

  const cols = useMemo(() => Math.ceil(window.innerWidth  / TILE_SIZE) + 1, []);
  const rows = useMemo(() => Math.ceil(window.innerHeight / TILE_SIZE) + 1, []);

  // Build shuffled tile list once
  const tiles = useMemo(() => {
    const list = [];
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++)
        list.push({ col: c, row: r, id: `${c}-${r}` });

    // Fisher-Yates shuffle — random reveal order
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }

    // Assign staggered delay based on shuffled position
    const total = list.length;
    return list.map((t, i) => ({
      ...t,
      delay: 0.6 + (i / total) * 1.0,   // tiles start disappearing at 0.6s, spread over 1s
    }));
  }, [cols, rows]);

  useEffect(() => {
    // Show intro text briefly, then start tile reveal
    const revealTimer = setTimeout(() => setPhase('reveal'), 500);

    // Signal app ready after all tiles gone
    const doneTimer = setTimeout(() => {
      setVisible(false);
      setIsLoaded(true);
    }, 2000);

    return () => { clearTimeout(revealTimer); clearTimeout(doneTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: phase === 'reveal' ? 'none' : 'all',
      }}
    >
      {/* ── Solid black cover shown during intro before tiles start ── */}
      <AnimatePresence>
        {phase === 'intro' && (
          <motion.div
            key="intro-cover"
            style={{ position: 'absolute', inset: 0, background: '#000', zIndex: 2 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          />
        )}
      </AnimatePresence>

      {/* ── Tile grid — each tile is a black square that fades away ── */}
      {phase === 'reveal' && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          {tiles.map((t) => (
            <Tile key={t.id} col={t.col} row={t.row} delay={t.delay} />
          ))}
        </div>
      )}

      {/* ── Brand + progress shown during intro phase only ── */}
      <AnimatePresence>
        {phase === 'intro' && (
          <motion.div
            key="brand"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              pointerEvents: 'none',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4 }}
          >
            <motion.p
              style={{
                fontFamily: "'Lay Grotesk - Trial Black', sans-serif",
                fontSize: '13px',
                letterSpacing: '0.35em',
                color: 'rgba(255, 255, 255, 0.85)',
                textTransform: 'uppercase',
                margin: 0,
                textShadow: '0 0 14px rgba(255, 255, 255, 0.7)',
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            >
          
            </motion.p>

           
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageLoader;
