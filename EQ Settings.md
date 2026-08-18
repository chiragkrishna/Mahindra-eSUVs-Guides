# 🎵 Optimal EQ & Audio Tuning Guide for Mahindra BE 6 Pack 3

A comprehensive tuning configuration guide for the 16-speaker **Harman Kardon** audio system in the **Mahindra eSUVs**. Optimized specifically for deep sub-bass punch, chest thump, and distortion-free playback at higher volumes.

---

## 📊 Equalizer Configurations

The system provides a 4-band adjustment scale ranging from `-7` to `+7`. Select the profile below based on your audio material.

### 1. Deep Bass & Thump Profile (Recommended)
*Optimized for maximum low-end impact while maintaining clean vocal separation and eliminating door driver rattle.*

| Parameter | Value | Frequency Target | Purpose / Acoustic Function |
| :--- | :---: | :---: | :--- |
| **Subwoofer** | `+5` to `+6` | 20 Hz – 60 Hz | Drives deep sub-bass cabinet without clipping door drivers. |
| **Bass** | `+3` to `+4` | 60 Hz – 250 Hz | Adds mid-bass kick while avoiding lower mid-range muddying. |
| **Mid** | `-1` to `0` | 500 Hz – 2 kHz | Scoops out cabin boominess; creates acoustic headroom. |
| **Treble** | `+2` to `+3` | 4 kHz – 16 kHz | Preserves clarity, high-hats, and vocal presence above heavy bass. |

---

### 2. Distortion-Proof Profile (For Pre-Boosted Tracks)
*Use this configuration when playing heavily modded, bass-boosted, or non-standard remixed audio tracks (e.g., YouTube/SoundCloud edits) to prevent amplifier clipping and crackling.*

| Parameter | Value | Adjustment Notes |
| :--- | :---: | :--- |
| **Subwoofer** | `+4` | Provides sub-bass gain while leaving headroom for pre-clipped tracks. |
| **Bass** | `+1` to `+2` | Prevents door woofers from hitting physical mechanical limits. |
| **Mid** | `-1` | Maintains vocal clarity and prevents congestion. |
| **Treble** | `+2` | Sharpens upper frequencies for balanced soundstage. |

---

## ⚠️ Eliminating Audio Distortion & Crackling

> **Root Cause:** Pre-boosted audio tracks often hit `0 dBFS` digital peak limits. Applying positive EQ on both the phone source device and the car's head unit forces the Harman Kardon DSP into dynamic limit compression, leading to audio dropouts and severe speaker crackle.

1. **Source Volume Calibration:** Set your smartphone media volume (Android Auto / Apple CarPlay connection) to **80%–85%**. Do not run at 100% digital output to prevent input stage clipping.
2. **Disable Source-Side EQs:** Turn off all equalizers, Dolby Atmos, or spatializers inside streaming apps (Spotify, Apple Music, YouTube Music). Allow the car DSP to handle all signal processing.
3. **Spatial Audio Setting:** Set 3D Immersive / Surround mode in Infotainment settings to **Medium** or **Off** for pre-boosted tracks. Extreme upmixing can induce distortion in surround channels.
