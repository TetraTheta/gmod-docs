---
hide:
  - navigation
---
# SC Resistance Turret

<steam-workshop itemid="3218204491"></steam-workshop>

SC Resistance Turret adds a Resistance-friendly floor turret as an NPC spawnlist entry. It uses a custom model and behaves like a deployable sentry that protects its owner from hostile NPCs and NextBots.

## Spawnlist Entry

| Field | Value |
| --- | --- |
| Spawnlist class | `sc_turret` |
| Display name | `SC Turret` |
| Category | `SC Entity` |
| Default health | `255` |
| Model | `models/sc_turret/floor_turret.mdl` |

The entity itself is not directly spawnable as a scripted entity, but it is registered in the NPC spawnlist.

## Behavior

* The turret searches within `2048` units.
* It only targets live NPCs or NextBots that hate the turret owner.
* It checks line of sight against several hitbox and bone aim points.
* It can shoot through breakable map objects when the breakable can be damaged by its bullet.
* It fires every `0.08` seconds while it has a valid target and ammo.
* If it loses a target, it suppresses briefly and then retires.
* If tipped over, it thrashes, fires or dry-fires, then becomes inactive.
* When killed or self-destructed, it breaks apart with a small explosion effect.

## Ownership

The turret records the player who spawned, picked up, dropped, or pasted it. Target selection is based on that owner: hostile NPCs are found through their disposition toward the owner.

If no valid owner is available, the turret cannot find targets.

## Keyvalues

| Keyvalue | Description |
| --- | --- |
| `health` | Overrides the default health. |
| `skin` / `skinnumber` | Sets the turret skin. |
| `model` / `modelname` | Overrides the model path. |
| `startdisabled` | `1` or `true` starts the turret disabled. |

## Spawnflags

| Flag | Hex | Behavior |
| --- | ---: | --- |
| Break trigger only | `0x00000001` | Used when deciding whether a breakable object can be shot through. |
| Auto activate | `0x00000020` | Lets the turret automatically start searching. |
| Start inactive | `0x00000040` | Starts disabled. |
| Fast retire | `0x00000080` | Retires faster after losing a target. |
| Out of ammo | `0x00000100` | Dry-fires instead of shooting. |

## Inputs

| Input | Description |
| --- | --- |
| `Enable` | Enable the turret and start searching if it is upright. |
| `Disable` | Disable the turret and retire if needed. |
| `Toggle` | Toggle enabled state. |
| `DepleteAmmo` | Mark the turret out of ammo. |
| `RestoreAmmo` | Clear the out-of-ammo state. |
| `SelfDestruct` | Start a 4-second self-destruct countdown. |

## Notes

The turret reports itself through NPC-like methods such as `IsNPC()`, `Name()`, and `Nick()` so kill hooks and NPC-related logic can treat it consistently.

