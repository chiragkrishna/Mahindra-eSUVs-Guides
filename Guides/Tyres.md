# Mahindra Born Electric (BEV) Series — Factory Tyre Specs & 19-Inch Upsizing Engineering Guide

A technical fitment reference for the **Mahindra Born Electric (BEV)** platform lineup, combining detailed variant-by-variant factory tyre/wheel specifications with mathematical analysis and the physical verification required for aftermarket 19-inch tyre upsizing.

> **Important:** Factory specifications and aftermarket fitment analysis are separate. A tyre may be mathematically compatible with a factory wheel without being physically compatible with the vehicle. Final aftermarket fitment must be verified against the specific wheel offset, tyre manufacturer's approved rim range, vehicle clearances and dynamic suspension/steering travel.

---

## 🚗 Detailed Factory-Documented Tyre & Wheel Combinations

| Model                       | Variant / Pack    | Factory Tyre | Wheel / Cover |
| --------------------------- | ----------------- | ------------ | ------------- |
| **BE 6**                    | Pack One          | `245/60 R18` | Aero Covers   |
|                             | Pack One Above    | `245/60 R18` | Aero Covers   |
|                             | Pack Two          | `245/55 R19` | Aero Covers   |
|                             | Pack Three Select | `245/55 R19` | Alloys        |
|                             | Pack Three        | `245/55 R19` | Alloys        |
| **XEV 9E**                  | Pack One          | `245/55 R19` | Aero Covers   |
|                             | Pack Two          | `245/55 R19` | Alloys        |
|                             | Pack Three Select | `245/55 R19` | Alloys        |
|                             | Pack Three        | `245/55 R19` | Alloys        |
| **BE 6 SporTEQ**            | Pack One          | `245/60 R18` | Aero Covers   |
|                             | Pack Two          | `245/55 R19` | Aero Covers   |
|                             | Pack Three        | `245/55 R19` | Alloys        |
|                             | Pack Three+       | `245/55 R19` | Alloys        |
|                             | Pack Four         | `245/55 R19` | Alloys        |
| **BE 6 FE**                 | FE2               | `245/55 R19` | Alloys        |
|                             | FE3               | `245/50 R20` | Alloys        |
| **BE 6 FE Freedom Edition** | FE3               | `245/50 R20` | Alloys        |
|                             | FE4               | `245/50 R20` | Alloys        |
| **XEV 9S**                  | Pack One Above    | `235/60 R18` | Aero Covers   |
|                             | Pack Two Above    | `235/60 R18` | Alloys        |
|                             | Pack Three        | `235/60 R18` | Alloys        |
|                             | Pack Three Above  | `235/60 R18` | Alloys        |

### Factory Tyre Size Options

| Model                       | Factory Size Options                                         |
| --------------------------- | ------------------------------------------------------------ |
| **BE 6**                    | Standard `245/60 R18`; Optional `245/55 R19` or `245/50 R20` |
| **XEV 9E**                  | Standard `245/55 R19`; Optional `245/50 R20`                 |
| **BE 6 SporTEQ**            | Standard `245/60 R18`; Optional `245/55 R19`                 |
| **BE 6 FE**                 | Standard `245/55 R19` or `245/50 R20`                        |
| **BE 6 FE Freedom Edition** | Standard `245/50 R20`                                        |
| **XEV 9S**                  | Standard `235/60 R18`                                        |

---

## 📄 19-Inch Factory Baseline

For the 19-inch upsizing calculations in this guide, the reference configuration is:

| Parameter                    | Specification | Notes                                                            |
| :--------------------------- | :------------ | :--------------------------------------------------------------- |
| **Reference Tyre**           | `245/55 R19`  | Factory 19-inch BEV reference                                    |
| **Factory Rim Width**        | `8Jx19`       | Confirm actual wheel specification for the individual vehicle    |
| **Reference Cold Pressure**  | **36 PSI**    | Use the vehicle's tyre placard/manual as the authoritative value |
| **Temporary Spare Wheel**    | `3.5Jx18`     | Space-saver configuration                                        |
| **Temporary Spare Tyre**     | `T135/80 R18` | Temporary emergency-use tyre                                     |
| **Temporary Spare Pressure** | **60 PSI**    | Follow the vehicle documentation                                 |

> **Important:** The 36 PSI value is a factory reference for the applicable vehicle configuration. It is not a universal recommended pressure for every aftermarket tyre size.

---

## 📊 19-Inch Tyre Upsizing: Mathematical Comparison

### Reference

**Factory reference:** `245/55 R19`

Nominal calculated diameter:

$$19 \times 25.4 + (245 \times 0.55 \times 2) = 752.1\text{ mm}$$

The calculations below use nominal tyre dimensions. Actual measured dimensions can vary between tyre manufacturers and models.

| Tyre Size                    | Nominal Section Width | Nominal Diameter | Diameter Change | Radius Change |   Nominal Width Change   |
| :--------------------------- | :-------------------: | :--------------: | :-------------: | :-----------: | :----------------------: |
| **245/55 R19** _(Reference)_ |      **245 mm**       |   **752.1 mm**   |     `0.00%`     |   Baseline    |         Baseline         |
| **255/55 R19**               |      **255 mm**       |   **763.1 mm**   |    `+1.46%`     |  `+5.50 mm`   | `+10 mm` (`+5 mm/side`)  |
| **265/50 R19**               |      **265 mm**       |   **747.6 mm**   |    `-0.60%`     |  `-2.25 mm`   | `+20 mm` (`+10 mm/side`) |
| **275/50 R19**               |      **275 mm**       |   **757.6 mm**   |    `+0.73%`     |  `+2.75 mm`   | `+30 mm` (`+15 mm/side`) |

### What these numbers mean

The width figures are **nominal section-width differences**, not guaranteed changes in actual vehicle clearance.

For example, moving from `245` to `265` does **not necessarily mean exactly 10 mm less clearance on the inner side and 10 mm more poke on the outer side**.

Actual sidewall position depends on:

- Wheel width
- Wheel offset (ET)
- Tyre manufacturer's measuring rim
- Actual tyre dimensions
- Sidewall construction
- Tyre load
- Inflation pressure

---

## ⚠️ Essential Engineering Fitment Framework

Aftermarket tyre fitment should be evaluated using three separate criteria:

### 1. Tyre-to-Rim Compatibility

Verify that the specific tyre manufacturer's approved rim-width range includes the vehicle's wheel width.

For example:

`8Jx19` → verify the specific tyre's approved rim range.

A tyre manufacturer's approved rim-width range confirms compatibility between the **tyre and wheel**.

It does **not** confirm vehicle clearance.

### 2. Rolling Diameter

Compare the nominal diameter with the factory reference.

A small diameter difference generally reduces speedometer/odometer deviation, but there is **no universal ±1.5% engineering limit applicable to every vehicle**.

Diameter tolerance should therefore be treated as a **screening criterion**, not proof of compatibility.

Other systems potentially affected by significant diameter changes include:

- ABS
- ESC/ESP
- Traction control
- TPMS/Tiretronics
- Speedometer calibration
- Driver-assistance systems

### 3. Physical Vehicle Fitment

The complete tyre/wheel assembly must physically clear the vehicle throughout its operating range.

This includes:

- Suspension compression
- Steering lock
- Steering + suspension compression simultaneously
- Vehicle loading
- Tyre deformation under lateral and vertical loads

---

## 🔧 Physical Clearance Parameters

### Inner Clearance

Measure the distance between the tyre's inner sidewall/shoulder and:

- Suspension strut
- Spring assembly
- Control arms
- Steering components
- Other chassis components

### Outer Clearance

Check the tyre against:

- Fender lip
- Wheel arch liner
- Mud flaps
- Bodywork
- Other exterior components

Check clearance with the suspension compressed.

### Full-Lock Clearance

Turn the steering from lock to lock and inspect:

- Inner wheel arch liner
- Suspension components
- Steering components
- Fender/liner interfaces

### Dynamic Clearance

Static clearance alone is insufficient.

A tyre can clear the vehicle while stationary but contact the liner or suspension during:

- Full steering lock
- Suspension compression
- Cornering
- Heavy vehicle loading
- Road impacts

---

## 🏆 19-Inch Candidate Evaluation for Stock 8Jx19 Wheels

```text
Reference (245/55 R19):     |====================| 245 mm
255/55 R19:                 |=====================| 255 mm (+10 mm)
265/50 R19:                 |======================| 265 mm (+20 mm)
275/50 R19:                 |========================| 275 mm (+30 mm)
```

### Option 1: 265/50 R19 — Best Mathematical Candidate

**Nominal dimensions**

- **Diameter:** 747.6 mm
- **Diameter change:** -0.60%
- **Radius change:** -2.25 mm
- **Nominal width:** 265 mm
- **Width increase:** +20 mm
- **Nominal increase per side:** +10 mm

**Advantages**

- Very small nominal diameter difference from 245/55 R19.
- Slightly smaller rolling diameter than factory reference.
- Lower nominal sidewall height:
- 245/55: 134.75 mm
- 265/50: 132.50 mm

- Wider nominal section width.
- Potentially sharper steering response due to reduced sidewall height, depending on the tyre model.

**Important limitation**
265/50 R19 is not confirmed vehicle fitment simply because the diameter is close to factory specification or because the tyre is approved for an 8J rim.

Before purchasing, verify:

- Specific tyre manufacturer's approved rim range
- Actual factory wheel ET
- Inner strut clearance
- Outer fender clearance
- Full-lock clearance
- Full-compression clearance
- Loaded-vehicle clearance

**Verdict**
Best mathematical candidate for investigation, not confirmed fitment.

---

### Option 2: 255/55 R19 — Conservative Candidate

**Nominal dimensions**

- **Diameter:** 763.1 mm
- **Diameter change:** +1.46%
- **Radius change:** +5.50 mm
- **Nominal width:** 255 mm
- **Width increase:** +10 mm
- **Nominal increase per side:** +5 mm

**Advantages**

- Retains the factory 55-series aspect ratio.
- Only modestly wider than the factory 245/55 R19.
- Provides a larger nominal sidewall than 265/50 R19.
- Likely to preserve more of the factory sidewall characteristics than a lower-profile alternative.

**Considerations**

- The nominal diameter increase is greater than the 265/50 R19 option.
- Actual speedometer/rolling-radius effects should be evaluated using the specific tyre's measured/approved dimensions.

**Verdict**
Most conservative width increase of the three candidates.

---

### Option 3: 275/50 R19 — Maximum Width Candidate

**Nominal dimensions**

- **Diameter:** 757.6 mm
- **Diameter change:** +0.73%
- **Radius change:** +2.75 mm
- **Nominal width:** 275 mm
- **Width increase:** +30 mm
- **Nominal increase per side:** +15 mm

**Advantages**

- Largest nominal section width of the three candidates.
- Nominal diameter remains relatively close to the factory reference.
- Potentially provides greater tyre footprint, depending on tyre construction, pressure and vehicle load.

**Considerations**

- A 275 mm tyre requires particularly careful verification on an 8J wheel.
- The important question is not simply whether an 8J rim appears in a generic tyre-size chart. The specific tyre model must be checked against its manufacturer's approved rim range and recommended/measuring rim.
- The additional nominal width also reduces available vehicle clearance compared with the factory 245 mm tyre.

**Verdict**
Highest-clearance-risk candidate; physical verification is essential.

---

## ⚡ Load Index, Speed Rating & EV Considerations

### 1. Load Index

Replacement tyres should meet or exceed the OEM load index specified on the vehicle's tyre placard/documentation.

Do not select a tyre solely based on:

- Width
- Diameter
- Appearance
- Rim compatibility

The tyre must also have adequate load capacity for the vehicle. This is particularly important for BEVs because battery mass contributes significantly to vehicle weight.

### 2. XL / Extra Load Construction

XL construction should not be assumed to be universally mandatory solely because the vehicle is an EV.

The correct requirement is:

- Select a tyre whose load index and construction meet the vehicle manufacturer's requirements for the specific application.
- Where the factory specification calls for an XL tyre, the replacement should maintain the required load capability.

_For example, factory documentation for certain XEV 9e configurations specifies XL tyres._

### 3. Speed Rating

The replacement tyre should meet or exceed the vehicle manufacturer's specified speed rating. A tyre with a suitable physical size but insufficient speed/load rating is not an appropriate replacement.

---

## 💨 Tyre Pressure

The vehicle's tyre placard/manual should remain the primary source for recommended cold inflation pressure.

For example, where the factory specification calls for 36 PSI, that value should not be changed simply because a tyre is wider or narrower.

Do not independently increase or decrease pressure solely from:

- Tyre width
- Aspect ratio
- Overall diameter

For a non-factory tyre size, the specific tyre manufacturer's load/inflation data should also be considered to ensure adequate load capacity.

> **Important:** Do not use a generic internet pressure recommendation as a substitute for:
>
> - Vehicle manufacturer's specified pressure.
> - Tyre manufacturer's load/inflation data.
> - Actual vehicle load requirements.

---

## ⚙️ Wheel Width & Offset Geometry

Changing tyre size does not automatically change the wheel's physical position.

For the same 8Jx19 wheel:

- Increasing tyre width changes the tyre's position relative to the wheel.
- Increasing wheel width can change sidewall geometry.
- Changing wheel offset changes the entire wheel/tyre assembly's position relative to the vehicle.

### Wheel Offset (ET)

Offset is critical when determining:

- Inner suspension clearance
- Outer fender position
- Wheel poke
- Track-width change
- Potential geometry changes

A wider wheel with the same offset does not behave the same way as the factory wheel. Likewise, a tyre mounted on an 8J wheel cannot be assumed to have the same sidewall shape as the same tyre mounted on a 9J wheel.

> **Important:** A wider wheel does not inherently make a tyre safer or better. The correct wheel width depends on the specific tyre manufacturer's approved range and the desired vehicle geometry.

---

## 📐 Wheel Offset Clearance Model

Once the factory wheel specification is known, the geometric effect of a different wheel can be calculated.

For a wheel:

$$\text{Wheel width} = W$$

$$\text{Offset} = ET$$

Approximate wheel positions relative to the hub centreline can be derived from:

$$\text{Inner wheel position} \approx \left(\frac{W}{2}\right) + ET$$

$$\text{Outer wheel position} \approx \left(\frac{W}{2}\right) - ET$$

When comparing two wheels, the change in these positions provides a first-order estimate of:

- Additional inner intrusion
- Additional outer poke

However, this models the wheel, not the complete tyre. Tyre sidewall geometry must still be verified separately.

---

## 🔍 Pre-Purchase Verification Checklist

Before purchasing an aftermarket tyre size, verify all of the following:

- [ ] Factory wheel width, e.g. `8Jx19`
- [ ] Factory wheel offset (`ET`)
- [ ] Factory PCD
- [ ] Factory centre bore
- [ ] Specific tyre manufacturer's approved rim-width range
- [ ] Tyre load index
- [ ] Tyre speed rating
- [ ] XL/Extra Load requirement, if applicable
- [ ] Nominal rolling-diameter difference
- [ ] Inner strut clearance
- [ ] Outer fender clearance
- [ ] Wheel-arch liner clearance
- [ ] Full steering-lock clearance
- [ ] Full suspension-compression clearance
- [ ] Loaded-vehicle clearance
- [ ] Dynamic clearance during steering and suspension movement

---

## 🧪 Recommended Physical Fitment Test

For a non-factory tyre size, the safest approach is to physically test the actual tyre/wheel combination before purchasing a complete set.

At minimum:

1. Install the tyre/wheel on the vehicle.
2. Check static inner and outer clearance.
3. Turn the steering fully left and right.
4. Check the closest points at full steering lock.
5. Compress the suspension as far as practical.
6. Check clearance at full lock + compression.
7. Repeat with the vehicle loaded if practical.
8. Inspect for any contact marks after testing.

A static visual inspection at normal ride height is not sufficient to prove clearance.

---

## 📌 Summary

| Candidate      | Diameter Change | Width Increase | Primary Advantage                               | Main Concern                       | Assessment                  |
| -------------- | --------------- | -------------- | ----------------------------------------------- | ---------------------------------- | --------------------------- |
| **245/55 R19** | `0.00%`         | Baseline       | Factory configuration                           | None when factory-equipped         | Reference                   |
| **255/55 R19** | `+1.46%`        | `+10 mm`       | Conservative width increase / retains 55-series | Larger diameter                    | Conservative candidate      |
| **265/50 R19** | `-0.60%`        | `+20 mm`       | Excellent nominal diameter match                | Physical clearance                 | Best mathematical candidate |
| **275/50 R19** | `+0.73%`        | `+30 mm`       | Maximum nominal width                           | Clearance + tyre/rim compatibility | Highest-risk candidate      |

---

## ⚠️ Final Engineering Disclaimer

The calculations in this guide are nominal geometric calculations, not certification of aftermarket fitment.

A tyre size can be mathematically close to the factory size and still fail vehicle fitment because of:

- Tyre construction
- Actual measured dimensions
- Wheel width
- Wheel offset
- Suspension geometry
- Steering geometry
- Fender/liner geometry
- Dynamic tyre deformation
- Vehicle loading

Therefore:

$$\text{Mathematical compatibility} \neq \text{tyre/rim compatibility} \neq \text{vehicle fitment}$$

The final decision should be based on the specific tyre model, factory wheel specifications, load/speed requirements and physical clearance verification.
