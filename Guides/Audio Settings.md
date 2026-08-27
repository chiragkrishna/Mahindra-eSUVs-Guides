# 🎵 Optimal EQ & Audio Tuning Guide for Mahindra eSUVs

A comprehensive audio configuration guide for the 16-speaker **Harman Kardon** sound system in **Mahindra eSUVs**. Engineered specifically for deep sub-bass punch, tactile chest thump, and distortion-free playback at high output levels.

---

## ⚡ Quick Start (TL;DR)

- **Source Volume:** Set smartphone volume to **80%–85%** (never 100% to prevent input stage clipping).
- **Streaming EQs:** Disable all phone-side equalizers, Dolby Atmos, and spatialization settings.
- **Surround Mode:** Keep 3D Immersive mode set to **Medium** or **Off** for bass-heavy or pre-boosted tracks.
- **Best Connection:** Use **Apple CarPlay** (Wired or Wireless) for true bit-perfect 16-bit/44.1 kHz CD-quality lossless audio. Android Auto will always resample tracks through AudioFlinger to 48 kHz.

| Profile                  |   Bass |    Mid | Treble |    Sub | Character                  |
| ------------------------ | -----: | -----: | -----: | -----: | -------------------------- |
| 🎧 **Balanced**          |     +1 |     +1 |     +2 |     +3 | Clean & natural            |
| ⭐ **My recommendation** | **+2** | **+1** | **+2** | **+4** | Punchy + detailed          |
| 🔥 **Basshead**          |     +3 |      0 |     +1 | **+6** | Heavy, deep bass           |
| 🎤 **Vocal**             |      0 | **+3** |     +2 |     +2 | Vocals forward             |
| 🛣️ **Highway**           |     +3 |     +1 | **+3** |     +4 | Compensates for road noise |

---

## 🎛️ Equalizer Configurations

The infotainment system features a 4-band equalizer scale ranging from `-7` to `+7`. Choose a profile below depending on your music source material.

### 1. Deep Bass & Thump Profile (Recommended)

_Optimized for maximum low-end impact while maintaining crisp vocal clarity and eliminating door panel vibration._

| Parameter     |    Value     | Frequency Target | Acoustic Function & Purpose                                     |
| :------------ | :----------: | :--------------: | :-------------------------------------------------------------- |
| **Subwoofer** | `+5` to `+6` |  20 Hz – 60 Hz   | Drives sub-bass enclosure without overloading door mid-woofers. |
| **Bass**      | `+3` to `+4` |  60 Hz – 250 Hz  | Enhances mid-bass kick while avoiding lower mid-range mud.      |
| **Mid**       | `-1` to `0`  |  500 Hz – 2 kHz  | Scoops cabin boominess to create acoustic headroom.             |
| **Treble**    | `+2` to `+3` |  4 kHz – 16 kHz  | Preserves air, hi-hats, and vocal presence above heavy low-end. |

---

### 2. Distortion-Proof Profile (For Pre-Boosted Tracks)

_Designed for heavily modded, bass-boosted, or un-mastered tracks (e.g., YouTube/SoundCloud edits) to prevent amplifier DSP clipping._

| Parameter     |    Value     | Adjustment Rationale                                                        |
| :------------ | :----------: | :-------------------------------------------------------------------------- |
| **Subwoofer** |     `+4`     | Delivers punchy sub-bass while leaving dynamic headroom for boosted peaks.  |
| **Bass**      | `+1` to `+2` | Prevents door drivers from reaching physical mechanical limits (excursion). |
| **Mid**       |     `-1`     | Keeps vocals clean and reduces mid-band congestion.                         |
| **Treble**    |     `+2`     | Sharpens upper frequencies for a balanced soundstage.                       |

---

## ⚠️ Eliminating Audio Distortion & Crackling

> **Acoustic Root Cause:** Pre-boosted audio tracks often reach `0 dBFS` digital peak limits. Combining source-level EQ boosts with aggressive head-unit EQ settings forces the Harman Kardon DSP into dynamic limiting and compression, causing severe crackling, harshness, and dynamic dropouts.

1. **Source Volume Calibration:** Set your phone media volume over Android Auto / Apple CarPlay to **80%–85%**. Avoid 100% digital output to prevent input-stage DAC clipping.
2. **Bypass Source-Side Processing:** Turn off all equalizers, sound enhancers, or spatial audio features inside streaming apps (Spotify, Apple Music, YouTube Music). Allow the car's native DSP to handle all crossover and EQ work.
3. **Surround Processing:** Set the 3D Immersive / Surround setting in your infotainment menu to **Medium** or **Off** when playing bass-boosted music. Extreme multi-channel upmixing can create phase issues and distortion in surround speakers.

---

## 📡 Source Protocol & Bitrate Comparison

| Feature / Specification                      | Apple CarPlay (Wired)                             | Apple CarPlay (Wireless)                          | Android Auto (Wired)                                  | Android Auto (Wireless)                               |
| :------------------------------------------- | :------------------------------------------------ | :------------------------------------------------ | :---------------------------------------------------- | :---------------------------------------------------- |
| **Max Native Audio Pipeline**                | **16-bit / 48 kHz LPCM**                          | **16-bit / 44.1 kHz LPCM**                        | **24-bit / 48 kHz PCM**                               | **16-bit / 48 kHz PCM**                               |
| **Transmission Protocol**                    | Uncompressed LPCM                                 | Uncompressed LPCM over 5GHz Wi-Fi                 | PCM stream via USB                                    | PCM stream over 5GHz Wi-Fi                            |
| **System Resampling Behavior**               | Bit-perfect up to 48 kHz                          | Bit-perfect for 44.1 kHz CD audio                 | Forced 48 kHz (Android AudioFlinger)                  | Forced 48 kHz (Android AudioFlinger)                  |
| **Apple Music Lossless (16-bit / 44.1 kHz)** | **Bit-Perfect** (Native playback)                 | **Bit-Perfect** (Native 44.1 kHz LPCM stream)     | **Resampled** (AudioFlinger upsamples to 48 kHz)      | **Resampled** (AudioFlinger upsamples to 48 kHz)      |
| **Apple Music Hi-Res (24-bit / 192 kHz)**    | **Truncated** (Capped at 16-bit / 48 kHz)         | **Downsampled & Truncated** (16-bit / 44.1 kHz)   | **Downsampled** (Capped at 24-bit / 48 kHz)           | **Downsampled & Truncated** (16-bit / 48 kHz)         |
| **Spotify Premium (320 kbps Vorbis)**        | **Lossy Only** (Decoded to LPCM, not bit-perfect) | **Lossy Only** (Decoded to LPCM, not bit-perfect) | **Lossy & Resampled** (Decoded & resampled to 48 kHz) | **Lossy & Resampled** (Decoded & resampled to 48 kHz) |
| **Amazon Music Ultra HD / Tidal Lossless**   | **Truncated** (Capped at 16-bit / 48 kHz)         | **Downsampled & Truncated** (16-bit / 44.1 kHz)   | **Downsampled** (Capped at 24-bit / 48 kHz)           | **Downsampled & Truncated** (16-bit / 48 kHz)         |
| **Bypasses Bluetooth Audio Codecs?**         | **Yes** (Bypasses AAC/SBC completely)             | **Yes** (BT used only for initial handshake)      | **Yes** (Bypasses LDAC/SBC/AAC completely)            | **Yes** (BT used only for initial handshake)          |
| **Primary System Bottleneck**                | Head-Unit DAC & Factory Amp DSP                   | 44.1 kHz Pipeline Cap & Head-Unit DAC             | Android System Mixer (AudioFlinger)                   | Wi-Fi Bandwidth & AudioFlinger Mixer                  |
