import React, { useState } from 'react';
import { motion } from 'framer-motion';

const processes = [
  {
    step: '',
    title: 'STRATEGY',
    desc: 'Defining the digital roadmap for your brand. We analyze market trends and user behavior.',
    color: '#111111'
  },
  {
    step: '',
    title: 'DESIGN',
    desc: 'Crafting interfaces that feel like magic. Focus on aesthetics and seamless usability.',
    color: '#1a1a1a'
  },
  {
    step: '',
    title: 'DEVELOP',
    desc: 'High-performance code that scales. Using the latest tech stack for speed.',
    color: '#222222'
  },
  {
    step: '',
    title: 'LAUNCH',
    desc: 'Deploying excellence to the world. Quality assurance and final optimization.',
    color: '#2a2a2a'
  }
];

const ProcessSection = () => {

  const [bounce, setBounce] = useState({});

const handleDirectionEnter = (e, index) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const dx = x - centerX;
  const dy = y - centerY;

  let moveX = 0;
  let moveY = 0;

  if (Math.abs(dx) > Math.abs(dy)) {
    // entered from left/right
    if (dx < 0) {
      moveX = 28;   // from left → bounce right
    } else {
      moveX = -28;  // from right → bounce left
    }
  } else {
    // entered from top/bottom
    if (dy < 0) {
      moveY = 28;   // from top → bounce down
    } else {
      moveY = -28;  // from bottom → bounce up
    }
  }

  setBounce(prev => ({
    ...prev,
    [index]: { x: moveX, y: moveY }
  }));

 setTimeout(() => {
  setBounce(prev => ({
    ...prev,
    [index]: { x: 0, y: 0 }
  }));
}, 320);
};  

};

export default ProcessSection;