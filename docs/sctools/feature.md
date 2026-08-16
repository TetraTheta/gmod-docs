# SC Tools Feature

## Auto GodMode

SC Tools can automatically protect important NPCs and SuperAdmins.

NPC Auto GodMode only activates when both conditions are true:

* The current map is listed in `auto_god_map.txt`.
* The NPC class is listed in `auto_god_npc.txt`, or it is a special case handled by the add-on.

The actual protection style is controlled by `sc_auto_god_mode`.

## Boost Speed

When a player holds ++shift++ while crouching or using a ladder, SC Tools can multiply the movement speed by `sc_boost_speed_modifier`.

Use this to make cramped campaign maps less tedious without permanently changing normal walk or run speed.

## Change Sound Speed

Some sounds stop or feel wrong when host timescale changes. `sc_change_sound_pitch` adjusts sound pitch to follow the current game speed.

The tradeoff is that faster sounds also become higher pitched.

## Disable Collision

SC Tools can disable collision for configured small props and optionally for player-to-player collision.

Small prop collision is based on `small_model.txt` and `small_model_dir.txt`. This helps campaign servers where scattered tiny physics props block doors, ladders, or narrow paths.

## Dynamic Fire

Players can enable local dynamic fire effects with `sc_dynamic_fire`.

Because this is a client ConVar, each player can choose their own setting.

## Highlight Entities

Glow filters can highlight entities by class, model path, or targetname. This is useful when debugging map logic or finding interactable objects in a large scene.

Use the `sc_glow_add_*` and `sc_glow_remove_*` commands for normal editing.

## Hitsound / Killsound

SC Tools can play local feedback when a player damages an NPC. Bodyshots and headshots are controlled separately with `sc_bshot_effect` and `sc_hshot_effect`.

Sound volume is controlled with `snd_bshotvolume` and `snd_hshotvolume`.

## Map Compatibility Entities

SC Tools ships GLua replacements or compatibility helpers for map entities that are missing or restricted in Garry's Mod:

* `env_hudhint` shows translated HUD hint text as a notification.
* `sc_changelevel` changes maps from map I/O without relying on restricted console command behavior.
* `sc_breakable` provides a lightweight GLua breakable volume for maps that cannot be recompiled.
* `prop_interactable` implements enough MapBase-style behavior for scripted interactions.
* `npc_lost_soul` and `npc_shadow_walker` are GLua implementations of Map Labs Template NPCs with the same names.

See [Entity](entity.md) for supported keyvalues, inputs, and limitations.

## Restore `disconnect`

Garry's Mod blocks map-triggered `disconnect` through `point_clientcommand` or `point_servercommand`. `sc_disconnect_mode` lets SC Tools mimic the intended behavior instead.

## Small Objects

Small props can either have collision disabled or be removed through cleanup commands. The model lists are configurable, so server owners can add map-specific clutter without changing Lua code.
