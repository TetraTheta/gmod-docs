# SC Weapons

These SWEPs are spawnable for normal players unless your server restricts weapon spawning.

## Weapon Summary

| Weapon | Classname | Slot | Primary ammo | Clip | Secondary |
| --- | --- | ---: | --- | ---: | --- |
| Empty Hands | `scw_empty` | 0 | none | 0 | none |
| Fast Crowbar | `scw_fastcrowbar` | 0 | none | 0 | none |
| MP5SD | `scw_mp5sd` | 2 | `SMG1` | 50 | `SMG1_Grenade` |
| Pulse Rifle (MMod) | `scw_mm_ar2` | 2 | `AR2` | 150 | `AR2AltFire` |
| SMG (MMod) | `scw_mm_smg1` | 2 | `SMG1` | 90 | `SMG1_Grenade` |
| Shotgun (MMod) | `scw_mm_shotgun` | 3 | `Buckshot` | 8 | double shot |
| SCAR20 | `scw_scar20` | 3 | `XBowBolt` | 20 | zoom |

## Empty Hands

`scw_empty` mimics the no-weapon state.

It has no view model, no world model, and no attacks. When equipped by a player, it sets the hold type to `normal`.

## Fast Crowbar

`scw_fastcrowbar` is a faster HL2 crowbar.

| Property | Value |
| --- | --- |
| Hold type | `melee` |
| Damage | `sk_plr_dmg_crowbar` or `10` |
| Delay | `0.1` |
| Special case | Headcrabs take `10000` damage. |

## MP5SD

`scw_mp5sd` is a suppressed SMG-style weapon.

| Property | Value |
| --- | --- |
| Hold type | `ar2` |
| Primary ammo | `SMG1` |
| Clip / default clip | `50` / `100` |
| Primary damage | `sk_plr_dmg_smg1 * 2` or `8` |
| Primary delay | `0.05` |
| Primary spread | `Vector(0.015, 0.015, 0)` |
| Secondary ammo | `SMG1_Grenade` |
| Secondary delay | `0.5` |

When reloading, MP5SD can convert spare `Pistol` ammo into `SMG1` ammo if more SMG1 ammo is needed.

## Pulse Rifle (MMod)

`scw_mm_ar2` is an MMod-style pulse rifle.

| Property | Value |
| --- | --- |
| Hold type | `ar2` |
| Primary ammo | `AR2` |
| Clip / default clip | `150` / `150` |
| Primary damage | `sk_plr_dmg_ar2 * 2` or `16` |
| Primary delay | `0.075` |
| Spread | Ramps from `0.001` to `0.05` after sustained fire. |
| Secondary ammo | `AR2AltFire` |
| Secondary behavior | Charges for `0.5` seconds, then fires a combine ball. |

NPCs can use this weapon. NPC primary damage uses `sk_npc_dmg_ar2` when available.

## SMG (MMod)

`scw_mm_smg1` is an MMod-style SMG1.

| Property | Value |
| --- | --- |
| Hold type | `smg` |
| Primary ammo | `SMG1` |
| Clip / default clip | `90` / `90` |
| Primary damage | `sk_plr_dmg_smg1 * 2` or `8` |
| Primary delay | `0.075` |
| Primary spread | `Vector(0.005, 0.005, 0)` |
| Secondary ammo | `SMG1_Grenade` |
| Secondary damage | `sk_plr_dmg_smg1_grenade` or `100` |

NPCs can use this weapon. The viewmodel supports idle, walk, sprint, and low-ready motion states.

## Shotgun (MMod)

`scw_mm_shotgun` is an MMod-style SPAS-12 shotgun.

| Property | Value |
| --- | --- |
| Hold type | `shotgun` |
| Primary ammo | `Buckshot` |
| Clip / default clip | `8` / `8` |
| Primary damage per pellet | `sk_plr_dmg_buckshot * 2` or `16` |
| Primary pellets | `12` |
| Primary spread | `Vector(0.04, 0.04, 0)` |
| Secondary ammo cost | `2` shells |
| Secondary pellets | `24` |

Reloading is shell-by-shell. Firing during reload queues a delayed shot when enough shells are available.

NPCs can use the primary fire. NPC damage uses `sk_npc_dmg_buckshot` when available.

## SCAR20

`scw_scar20` is a CS:GO SCAR20-inspired rifle that uses crossbow bolt ammo.

| Property | Value |
| --- | --- |
| Hold type | `ar2` |
| Primary ammo | `XBowBolt` |
| Clip / default clip | `20` / `100` |
| Primary damage | `sk_plr_dmg_scar20` or `100` |
| Primary delay | `0.25` |
| Primary spread | `Vector(0, 0, 0)` |
| Secondary | Cycles zoom levels. |

When reloading, SCAR20 can convert spare `AR2` ammo into `XBowBolt` ammo if more crossbow ammo is needed.

