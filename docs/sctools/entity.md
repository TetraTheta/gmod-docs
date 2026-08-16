# SC Tools Entity

SC Tools provides map compatibility entities for Half-Life 2 maps, MapBase-style maps, Map Labs Template maps, and GLua-only map patches.

## env_hudhint

Garry's Mod does not provide a usable `env_hudhint` equivalent for many HL2 maps. SC Tools forwards its message to the activating player as a local notification.

### Keyvalues

| Keyvalue | Description |
| --- | --- |
| `message` | Plain text or a localization key. Keybind tokens such as `%+zoom%` are replaced on the client. |

Localization keys can be added from client Lua:

``` lua
language.Add("My_Translation_Key", "Press %use% to continue.")
```

### Inputs

| Input | Description |
| --- | --- |
| `ShowHudHint` | Sends the translated message to the activating player. |
| `HideHudHint` | Accepted as a no-op. Garry's Mod notifications cannot be hidden early. |

### Client Option

Players can disable these messages locally:

``` plaintext
env_hudhint_enable 0
```

## sc_changelevel

`sc_changelevel` is a small alternative to map logic that tries to run `map <map name>` through `point_servercommand` or `point_clientcommand`.

### Keyvalues

| Keyvalue | Description |
| --- | --- |
| `map` | Target map name. |

### Inputs

| Input | Description |
| --- | --- |
| `ChangeLevel` | Runs `map <map>` on the server. |

## sc_breakable

`sc_breakable` is a GLua-only approximation of `func_breakable` for maps that cannot be recompiled.

Prefer a real `func_breakable` when you can rebuild the BSP. `sc_breakable` does not create a brush model, read VMF side planes, receive baked lighting, preserve brush decals, support bullet penetration, expose per-face surface data, or make NPC AI treat it like a compiled solid brush.

### Keyvalues

| Keyvalue | Description |
| --- | --- |
| `angles` | Entity angles. |
| `explodedamage` | Blast damage when broken. |
| `explodemagnitude` | Explosion magnitude; also used as damage when `explodedamage` is not set. |
| `exploderadius` | Blast radius. Defaults from damage when not set. |
| `explosion` | Gib direction mode: `0` random, `1` directed, `2` precise. |
| `gibdir` | Direction used by precise gib mode. |
| `gibmodel` | Stored compatibility value. |
| `health` | Breakable health. |
| `material` | Break material sound/effect type. |
| `maxs` | Local collision bounds maximum vector. |
| `mins` | Local collision bounds minimum vector. |
| `minhealthdmg` | Minimum damage required to reduce health. |
| `nodamageforces` | Stored compatibility value. |
| `origin` | Entity origin. |
| `performancemode` | `0` normal effects, `1` no gibs, `2` reduced gibs. |
| `physdamagescale` | Multiplier applied to incoming damage. |
| `pressuredelay` | Delay before pressure break. |
| `spawnflags` | Spawnflag bitfield. |
| `spawnobject` | Item or weapon to spawn after breaking. |
| `startdisabled` | `1` or `true` starts non-solid and disabled. |
| `targetname` | Entity targetname. |

### Spawnflags

| Flag | Value | Behavior |
| --- | ---: | --- |
| Trigger only | `1` | Ignore regular damage and touch pressure. |
| Break on touch | `2` | Break when a player's velocity is high enough. |
| Break on pressure | `4` | Schedule a break when a player stands on it. |
| Break on physics | `512` | Break from crush damage. |
| No physics damage | `1024` | Ignore crush damage. |

### Inputs

| Input | Description |
| --- | --- |
| `AddHealth` | Adds numeric health. |
| `Break` | Breaks immediately. |
| `Disable` | Disables collision and damage handling. |
| `DisableDamageForces` | Sets the no-damage-forces compatibility flag. |
| `DisablePhyscannonPickup` | Accepted as a no-op. |
| `Enable` | Enables collision and damage handling. |
| `EnableDamageForces` | Clears the no-damage-forces compatibility flag. |
| `EnablePhyscannonPickup` | Accepted as a no-op. |
| `RemoveHealth` | Removes numeric health. |
| `SetHealth` | Sets health. |
| `SetMass` | Sets physics object mass when available. |
| `Toggle` | Toggles enabled state. |

### Outputs

| Output | Description |
| --- | --- |
| `OnBreak` | Fired when the entity breaks. |
| `OnHealthChanged` | Fired with current health fraction. |
| `OnTakeDamage` | Fired when damage is accepted. |

## prop_interactable

`prop_interactable` implements a subset of MapBase's `prop_interactable` behavior for map I/O compatibility.

### Keyvalues

| Keyvalue | Description |
| --- | --- |
| `defaultanim` | Animation to play on spawn. |
| `health` | Optional health value. |
| `insequence` | Animation when pressed. |
| `locked` | Starts locked when `1` or `true`. |
| `lockedsequence` | Animation when used while locked. |
| `lockedsound` | Sound when used while locked. |
| `maxs` / `use_maxs` | Optional local use bounds maximum. |
| `mins` / `use_mins` | Optional local use bounds minimum. |
| `model` / `modelname` | Model path. |
| `modelscale` | Model scale. |
| `outsequence` | Animation after cooldown. |
| `playbackrate` | Animation playback rate. |
| `pressedsound` | Sound when pressed. |
| `setbodygroup` | Initial bodygroup value for bodygroup `0`. |
| `setcooldown` | Cooldown in seconds. `-1` keeps it pressed until locked behavior resets. |
| `skin` / `skinnumber` | Skin index. |
| `solid` | Solid type. `0` is non-solid, `6` attempts static physics. |
| `spawnflags` | Spawnflag bitfield. |
| `startdisabled` | Starts hidden when `1` or `true`. |
| `targetname` | Entity targetname. |

### Spawnflags

| Flag | Value | Behavior |
| --- | ---: | --- |
| Disable collision | `256` | Adds `FSOLID_NOT_SOLID`. |
| Use interacts | `512` | Allows +use interaction. |
| Touch interacts | `1024` | Allows player touch interaction. |
| Ignore commands when locked | `2048` | Blocks use/touch while locked. |
| Radius use | `4096` | Stored compatibility flag for radius interaction. |

### Inputs

| Input | Description |
| --- | --- |
| `AddHealth` / `RemoveHealth` / `SetHealth` | Adjust health and fire `OnHealthChanged`. |
| `BecomeRagdoll` | Attempts ragdoll behavior, otherwise removes the entity. |
| `Break` | Fires `OnBreak` and removes the entity. |
| `Disable` / `Enable` | Alias for `TurnOff` / `TurnOn`. |
| `DisableCollision` / `EnableCollision` | Toggle solidity. |
| `DisableDraw` / `EnableDraw` | Alias for `TurnOff` / `TurnOn`. |
| `DisableRadiusInteract` / `EnableRadiusInteract` | Toggle the radius-use flag. |
| `DisableTouchInteraction` / `EnableTouchInteraction` | Toggle touch interaction. |
| `DisableUseInteraction` / `EnableUseInteraction` | Toggle +use interaction. |
| `FadeAndKill` | Removes the entity. |
| `FireUser1`-`FireUser4` | Fire matching `OnUser` output. |
| `Lock` / `Unlock` | Toggle locked state. |
| `Press` / `Use` | Trigger the normal use flow. |
| `SetAnimation` | Play an animation from the beginning. |
| `SetAnimationNoReset` | Switch to an animation without resetting it. |
| `SetBodyGroup` | Set bodygroup `0`. |
| `SetCycle` | Set animation cycle. |
| `SetDefaultAnimation` | Store a new default animation name. |
| `SetMass` | Set physics object mass when available. |
| `SetModel` | Change to a valid model. |
| `SetModelScale` | Set model scale and optional delay. |
| `SetPlaybackRate` | Set animation playback rate. |
| `StartIgnoringCommandsWhenLocked` | Enable locked command blocking. |
| `StopIgnoringCommandsWhenLocked` | Disable locked command blocking. |
| `TurnOff` / `TurnOn` | Hide or show the entity. |

### Outputs

| Output | Description |
| --- | --- |
| `OnAnimationBegun` | Fired when an animation starts. |
| `OnAnimationDone` | Fired when an animation finishes. |
| `OnBreak` | Fired before removal. |
| `OnHealthChanged` | Fired when health changes. |
| `OnIn` | Fired after the in/locked sequence finishes. |
| `OnLockedUse` | Fired when used while locked. |
| `OnOut` | Fired after the out sequence finishes. |
| `OnPressed` | Fired on successful unlocked use. |
| `OnTakeDamage` | Fired when damaged. |
| `OnUser1`-`OnUser4` | Fired by matching user inputs. |

## npc_lost_soul

`npc_lost_soul` is a GLua implementation of the Map Labs Template NPC with the same name. It exists for the same compatibility reason as `prop_interactable`: maps or patches can rely on the entity without requiring the original Map Labs Template / MapBase fork runtime.

| Property | Value |
| --- | --- |
| Print name | `Lost Soul` |
| Base | `sc_npc` |
| Health | `40` |
| Model | `models/skeleton/skeleton_torso3.mdl` |
| Attack distance | `48` |
| Attack interval | `0.35` |
| Fly speed | `420` |

## npc_shadow_walker

`npc_shadow_walker` is a GLua implementation of the Map Labs Template NPC with the same name. It is intended as a compatibility layer for maps or patches that reference the Map Labs Template entity.

| Property | Value |
| --- | --- |
| Print name | `Shadow Walker` |
| Base | `sc_npc` |
| Health | `75` |
| Model | `models/monster/subject.mdl` |
| Weapon model | `models/props_canal/mattpipe.mdl` |
| Attack distance | `72` |
| Attack interval | `0.9` |
