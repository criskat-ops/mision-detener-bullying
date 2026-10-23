/**
 * Web Audio API Synth Engine (100% Offline & Lightweight)
 * Genera sonidos dinámicos sin archivos de audio externos (perfecto para file://)
 */
const AudioManager = (function() {
  let audioCtx = null;
  let soundEnabled = true;
  let bgMusicInterval = null;
  let bgMusicStep = 0;

  const bgChords = [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7 (C4, E4, G4, B4)
    [220.00, 261.63, 329.63, 392.00], // Am7 (A3, C4, E4, G4)
    [174.61, 220.00, 261.63, 329.63], // Fmaj7 (F3, A3, C4, E4)
    [196.00, 246.94, 293.66, 349.23]  // G7 (G3, B3, D4, F4)
  ];

  function getAudioContext() {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        audioCtx = new AudioCtxClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function initAudio() {
    getAudioContext();
    if (soundEnabled) {
      startBgMusic();
    }
  }

  function playAmbientPad() {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      const chord = bgChords[bgMusicStep % bgChords.length];
      bgMusicStep++;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(350, ctx.currentTime);
      filter.connect(ctx.destination);

      chord.forEach(freq => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.0005, ctx.currentTime + 3.8);

        osc.connect(gain);
        gain.connect(filter);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 3.9);
      });
    } catch (e) {}
  }

  function startBgMusic() {
    if (bgMusicInterval) return;
    playAmbientPad();
    bgMusicInterval = setInterval(() => {
      if (soundEnabled) playAmbientPad();
    }, 4000);
  }

  function stopBgMusic() {
    if (bgMusicInterval) {
      clearInterval(bgMusicInterval);
      bgMusicInterval = null;
    }
  }

  function playTone(freq, type = 'sine', duration = 0.1, delay = 0, volume = 0.12) {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    setTimeout(() => {
      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch (e) {}
    }, delay * 1000);
  }

  function playClick() {
    playTone(480, 'sine', 0.06);
  }

  function playCorrect() {
    playTone(523.25, 'sine', 0.12, 0);    // C5
    playTone(659.25, 'sine', 0.15, 0.08); // E5
    playTone(783.99, 'sine', 0.25, 0.16); // G5
  }

  function playWrong() {
    playTone(311.13, 'triangle', 0.15, 0);   // Eb4
    playTone(261.63, 'triangle', 0.25, 0.12); // C4
  }

  function playVictory() {
    playTone(523.25, 'sine', 0.12, 0);    // C5
    playTone(659.25, 'sine', 0.12, 0.09); // E5
    playTone(783.99, 'sine', 0.12, 0.18); // G5
    playTone(1046.50, 'sine', 0.45, 0.27); // C6
  }

  function playSlide() {
    playTone(580, 'sine', 0.08);
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      initAudio();
      playClick();
    } else {
      stopBgMusic();
    }
    return soundEnabled;
  }

  function isSoundEnabled() {
    return soundEnabled;
  }

  return {
    init: initAudio,
    toggleSound: toggleSound,
    isEnabled: isSoundEnabled,
    startBgMusic: startBgMusic,
    stopBgMusic: stopBgMusic,
    playTone: playTone,
    playClick: playClick,
    playCorrect: playCorrect,
    playWrong: playWrong,
    playVictory: playVictory,
    playSlide: playSlide
  };
})();

// Atajos globales
function initAudio() { AudioManager.init(); }
function playClickSound() { AudioManager.playClick(); }
function playCorrectSound() { AudioManager.playCorrect(); }
function playWrongSound() { AudioManager.playWrong(); }
function playVictorySound() { AudioManager.playVictory(); }
function playSlideSound() { AudioManager.playSlide(); }
function startBgMusic() { AudioManager.startBgMusic(); }
function stopBgMusic() { AudioManager.stopBgMusic(); }

if (typeof window !== 'undefined') {
  window.AudioManager = AudioManager;
}
