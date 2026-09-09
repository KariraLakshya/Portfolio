let audioContext: AudioContext | null = null;

type BrowserWindow = Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext };

/** A warmer paper sweep with a soft crease, synthesized without an external asset. */
export function playPageFlipSound() {
  if (typeof window === "undefined") return;

  const AudioContextConstructor =
    window.AudioContext || (window as BrowserWindow).webkitAudioContext;
  if (!AudioContextConstructor) return;

  audioContext ??= new AudioContextConstructor();
  if (audioContext.state === "suspended") void audioContext.resume();

  const now = audioContext.currentTime;
  const sweepDuration = 0.42;
  const sweepBuffer = audioContext.createBuffer(
    1,
    Math.floor(audioContext.sampleRate * sweepDuration),
    audioContext.sampleRate,
  );
  const sweepData = sweepBuffer.getChannelData(0);

  for (let index = 0; index < sweepData.length; index += 1) {
    const progress = index / sweepData.length;
    const attack = Math.min(1, progress / 0.08);
    const release = Math.max(0, 1 - (progress - 0.3) / 0.7);
    const grain = Math.random() * 2 - 1;
    sweepData[index] = grain * attack * release * (0.62 + Math.sin(progress * 18) * 0.08);
  }

  const sweep = audioContext.createBufferSource();
  const sweepFilter = audioContext.createBiquadFilter();
  const sweepGain = audioContext.createGain();
  sweep.buffer = sweepBuffer;
  sweepFilter.type = "bandpass";
  sweepFilter.Q.setValueAtTime(0.85, now);
  sweepFilter.frequency.setValueAtTime(3200, now);
  sweepFilter.frequency.exponentialRampToValueAtTime(820, now + sweepDuration);
  sweepGain.gain.setValueAtTime(0.0001, now);
  sweepGain.gain.exponentialRampToValueAtTime(0.045, now + 0.03);
  sweepGain.gain.exponentialRampToValueAtTime(0.0001, now + sweepDuration);
  sweep.connect(sweepFilter).connect(sweepGain).connect(audioContext.destination);

  const crease = audioContext.createOscillator();
  const creaseGain = audioContext.createGain();
  crease.type = "triangle";
  crease.frequency.setValueAtTime(190, now);
  crease.frequency.exponentialRampToValueAtTime(92, now + 0.12);
  creaseGain.gain.setValueAtTime(0.0001, now);
  creaseGain.gain.exponentialRampToValueAtTime(0.012, now + 0.012);
  creaseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
  crease.connect(creaseGain).connect(audioContext.destination);

  sweep.start(now);
  sweep.stop(now + sweepDuration);
  crease.start(now);
  crease.stop(now + 0.16);
}
