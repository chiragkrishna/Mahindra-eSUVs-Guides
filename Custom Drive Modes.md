# 🚘 Mahindra eSUVs — Custom Drive Mode Setup Guide

A comprehensive guide for configuring **Custom Mode** parameters on the **Mahindra eSUVs**. This documentation focuses on creating tailored profiles for smooth daily commuting, aggressive performance, long-distance touring, and passenger-friendly driving.

---

## 📌 How to Access Custom Mode Settings

1. Open the **Center Information Display (CID)**.
2. Navigate: `App Drawer` ➔ `My Vehicle` ➔ `Drive Modes` ➔ `Custom`.
3. Tap **Edit** to configure individual driving dynamics:
   * **Power / Accelerator Pedal Response**
   * **Suspension Damping**
   * **Steering Weight & Response**
   * **Climate Control Efficiency**
4. Save the preset for quick activation via the **Intelli Command Center (ICC)** button.

---

## 🛠️ Recommended Profiles

### Profile 1: Smooth & Effortless Comfort (Recommended Daily Driver)
*Designed to absorb rough roads and speed bumps while maintaining full overtaking power without speed capping (unlike standard Range or Default modes).*

| Sub-System | Custom Setting | Baseline Mode | Functional Characteristic |
| :--- | :---: | :---: | :--- |
| **Suspension** | `Soft` / `Compliant` | **Range** | Reduces damping force; absorbs potholes and road undulations efficiently. |
| **Steering** | `Light` / `Comfort` | **Default / Everyday** | Reduces effort for effortless low-speed maneuvering and city parking. |
| **Power / Throttle** | `Responsive` / `Dynamic` | **Everyday / Race** | Removes top speed limits (135–140 km/h) and removes pedal delay for safe overtaking. |
| **Climate** | `Standard` | **Normal** | Keeps cabin cooling optimal without aggressive eco-throttling. |

---

### Profile 2: High-Performance / Dynamic
*Stiffens chassis response and sharpens pedal input for highway driving or back-road twisties while retaining comfort settings where needed.*

| Sub-System | Custom Setting | Baseline Mode | Functional Characteristic |
| :--- | :---: | :---: | :--- |
| **Suspension** | `Stiff` / `Sport` | **Race** | Increases damping force; minimizes body roll during high-speed cornering. |
| **Steering** | `Firm` / `Direct` | **Race** | Adds resistance and enhances feedback for precise high-speed tracking. |
| **Power / Throttle** | `Maximum` / `Instant` | **Race** | Unlocks full motor performance and instantaneous torque delivery. |
| **Climate** | `Standard` | **Normal** | Maintains full cabin HVAC output regardless of heavy power demands. |

---

### Profile 3: Passenger Comfort & Highway Cruiser
*Eliminates sudden EV acceleration jerkiness, prevents motion sickness, and delivers maximum ride comfort on long journeys.*

| Sub-System | Custom Setting | Baseline Mode | Functional Characteristic |
| :--- | :---: | :---: | :--- |
| **Suspension** | `Soft` | **Range** | Maximum compliance to minimize cabin movement on bumpy tarmac. |
| **Steering** | `Balanced` | **Everyday** | Moderate resistance to reduce continuous steering corrections on highways. |
| **Power / Throttle** | `Linear` | **Everyday** | Smoothes out initial torque delivery to avoid head-jerk for passengers. |
| **Climate** | `Eco` | **ECO** | Optimizes HVAC battery pull for extended driving range. |

---

## ⚡ Regenerative Braking Integration

Regenerative Braking functions independently of Drive Modes (via DID controls). Pair your **Smooth Custom Profile** with the following regen settings to optimize passenger comfort:

| Regen Level | Driving Scenario | Passenger Experience |
| :--- | :--- | :--- |
| **L0 (Off / Passive)** | Highway cruising | Smooth coasting when lifting off the throttle; zero abrupt deceleration. |
| **L1 (Low)** | City traffic & mixed commute | Mild engine-braking feel; smooth decelerations without head-bobbing. |
| **Auto Regen** | Adaptive traffic flow | Dynamically adjusts brake force based on the vehicle ahead via radar. |

> ⚠️ **Note on One-Pedal Drive & L3:** While Level 3 or Single Pedal Mode maximizes energy recovery, the aggressive initial bite upon throttle release can cause head-toss for passengers. Stick to **L1** or **Auto** for maximum ride smoothness.

---

## 📋 Quick Setup Workflow

```bash
# Custom Setup Checklist
1. Select Custom Mode -> Tap Edit
2. Set Suspension  -> Range (Softest damping force)
3. Set Power       -> Everyday or Race (Removes 135/140 km/h speed limiters)
4. Set Steering    -> Default (Easy turn-in)
5. Set Climate     -> Everyday
6. Save Profile
7. Adjust Steering Wheel Paddle -> Set Regen Level to L1 or Auto
