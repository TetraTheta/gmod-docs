# SC Tools
[Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3207465120)

> *Random Stuff I've Made*

SC Tools are a collection of custom console commands and ConVars I've made.

Most of these commands require SuperAdmin privilege.

## Feature

Here are the feature that SC Tools provides.

### `disconnect` Restoration

In Garry's Mod, `point_servercommand` and `point_clientcommand` that can issue console command can't issue `disconnect` console command.

SC Tools will either show notification or disconnect player depending on `sc_reenable_disconnect` console variable.

See Also: [`sc_reenable_disconnect`](#sc_reenable_disconnect)

### `env_hudhint` Replacement

In Garry's Mod, [`env_hudhint`](https://developer.valvesoftware.com/wiki/Env_hudhint) is not available. SC Tools will show notification to players instead.

### Speed Booster

When you press `SHIFT`(`+speed`) key while crouching or taking ladder, depending on the value of `sc_boost_speed_modifier` ConVar, you'll be faster (or slower)!

## Commands

Here are the commands that SC Tools adds.

### sc_clean

Remove various entities from the current map. The cleanup result will be displayed to the player who runs it.

Usage: `sc_clean <all|ammo|debris|decal|gibs|powerups|ragdoll|small|weapon>`

* `all`: Everything below
* `ammo`: HL2 ammo
* `debris`: Debris
* `decal`: Decals that are not from map itself
* `gibs`: Gibs
* `powerups`: Health kits & Battery
* `ragdoll`: Ragdoll
* `small`: Small objects
  * Models defined in `garrysmod/data/sc_tools/small.txt`
  * Model parent path defined in `garrysmod/data/sc_tools/smalldir.txt`
* `weapon`: HL2 weapons

See Also: [`sc_remove_effect`](#sc_remove_effect), [`sc_reload`](#sc_reload), [small.txt & smalldir.txt](#smalltxt-amp-smalldirtxt)

### sc_flashlight

Enable a flashlight for the player.

You must specify a player.

Usage: `sc_flashlight <player>`

### sc_gca

Refill the ammo of the weapon that the given player is holding.

If the player is omitted, the player who ran the command will be the player.

Usage: `sc_gca [player]`

### sc_god

Keep the given player in god mode. This will be useful in maps that consistently remove god mode from players.

You must specify a player.

Usage: `sc_god <player>`

### sc_heal

Heal the player.

If the player is omitted, the player who ran the command will be the player.

Usage: `sc_heal [player]`

### sc_overheal

Heal the player and charge the player's suit energy too.

If the player is omitted, the player who ran the command will be the player.

Usage: `sc_overheal [player]`

### sc_reload

Reload configuration of SC Tools.

Currently, it will reload `small.txt` and `smalldir.txt` in `garrysmod/data/sc_tools` for `sc_clean small` command.

Usage: `sc_reload`

### sc_remove

Remove the entity the player is looking at.

This command must be used by a player, and the player must look directly at an entity that is meant to be removed.

Usage: `sc_remove`

See Also: [`sc_remove_effect`](#sc_remove_effect)

### sc_remove_all

Remove the entity the player is looking at, including those that are connected too.

This command must be used by a player, and the player must look directly at an entity that is meant to be removed.

Usage: `sc_remove_all`

See Also: [`sc_remove_effect`](#sc_remove_effect)

### sc_remove_constraints

Remove constraints on the entity the player is looking at.

This command must be used by a player, and the player must look directly at an entity that is meant constraints to be removed.

Usage: `sc_remove_constraints`

### sc_set_god

Set the NPC you're looking at to be invulnerable.

This command must be used by a player, and the player must look directly at an NPC that is meant to be invulnerable.

Usage: `sc_set_god`

### sc_unset_god

Set the NPC you're looking at to not be invulnerable.

This command must be used by a player, and the player must look directly at an NPC that is meant to not be invulnerable.

Usage: `sc_unset_god`

### sc_setspeed

Set speed of the player.

If the player is omitted, the player who ran the command will be the player.

Usage: `sc_setspeed <all|duck|run|slow|walk> <fast|reset> [player]`

* `all`: Everything below
* `duck`: Duck speed (`+duck`)
* `run`: Run speed (`+speed`)
* `slow`: Slow walk speed (`+walk`)
* `walk`: Walk speed

Here are the speed of the player: The value of 'reset' is tested with a clean player state.

* `duck`: `0.3` (reset) | `0.8` (fast - 267%)
* `run`: `400` (reset) | `600` (fast - 150%)
* `slow`: `100` (reset) | `150` (fast - 150%)
* `walk`: `200` (reset) | `300` (fast - 150%)

## ConVar

Here are the ConVars that SC Tools adds.

### sc_auto_god_npc

Automatically make NPC in campaign maps invulnerable.

`sc_auto_god_npc <0|1>`
* `0`: Do not make NPC in campaign maps invulnerable automatically
* `1`: Make NPC in campaign maps invulnerable automatically

The map that starts with one of these prefixes will be considered a campaign map.

* `d1_`: Half-Life 2
* `d2_`: Half-Life 2
* `d3_`: Half-Life 2
* `ep1_`: Half-Life 2: Episode One
* `ep2_`: Half-Life 2: Episode Two
* `ks_`: Mistake Of Pythagoras (Mod)
* `dw_`: Dangerous World (Mod)

And these NPCs will be invulnerable on those campaign maps.

* `npc_alyx`
* `npc_barney`
* `npc_eli`
* `npc_kleiner`
* `npc_magnusson`
* `npc_monk`
* `npc_mossman`
* `npc_vortigaunt`
* `npc_citizen` with `models/odessa.mdl` model

### sc_boost_speed_modifier

Multiplier for speed boost when pressing SHIFT(`+speed`) key.  
If you set this value below `1.0`, you'll get slower.

`sc_flashlight_auto <float>` (DEFAULT: `1.0`)

### sc_flashlight_auto

Automatically enable flashlights for players.

`sc_flashlight_auto <0|1|2>` (DEFAULT: `0`)
  * `0`: Disable
  * `1`: Automatically enable flashlight to SuperAdmin Only
  * `2`: Automatically enable flashlight to all Players

### sc_no_obstacle

Disable collision of small obstacles.

`sc_no_obstacle <0|1>` (DEFAULT: `0`)
  * `0`: Enable small obstacle collisions
  * `1`: Disable small obstacle collisions

### sc_no_player_collision

Disable player-to-player collision globally.

`sc_no_player_collision <0|1>` (DEFAULT: `0`)
  * `0`: Enable player-to-player collision
  * `1`: Disable player-to-player collision

### sc_reenable_disconnect

In Garry's Mod, the player cannot be disconnected from the map even if the map issues a `disconnect` command via `point_servercommand` or `point_clientcommand`.  
SC Tools will handle this situation depending on what game mode that the player is in.

`sc_reenable_disconnect <0|1>` (DEFAULT: `0`)
  * `0`:
    * Listen Server(Singleplayer) mode: Show notification message.
    * Listen Server(Multiplayer) mode: Show notification message to all players.
    * Dedicated Server mode: Show notification message to all players.
  * `1`:
    * Listen Server(Singleplayer) mode: Disconnect player.
    * Listen Server(Multiplayer) mode: Show notification message to all players.
    * Dedicated Server mode: Show notification message to all players.

### sc_remove_effect

Entity remove effect type. This is shared with other commands.

Some objects will always use the 'Remove Toolgun' effect, regardless of this ConVar, because they aren't dissolvable.  
Some objects will always break.

`sc_remove_effect <0|1>` (DEFAULT: `0`)
* `0`: Remove Toolgun
* `1`: Dissolve

## Config file

### small.txt & smalldir.txt

These file defines which `prop_dynamic` without 'name' should be removed by its model.

small.txt contains absolute model paths, one per each line.

<details><summary>Default value of 'small.txt'</summary>

* models/combine_apc_destroyed_gib02.mdl
* models/combine_apc_destroyed_gib03.mdl
* models/combine_apc_destroyed_gib04.mdl
* models/combine_apc_destroyed_gib05.mdl
* models/combine_apc_destroyed_gib06.mdl
* models/props/cs_office/trash_can_p1.mdl
* models/props/cs_office/trash_can_p2.mdl
* models/props/cs_office/trash_can_p3.mdl
* models/props/cs_office/trash_can_p4.mdl
* models/props/cs_office/trash_can_p5.mdl
* models/props/cs_office/trash_can_p7.mdl
* models/props/cs_office/trash_can_p8.mdl
* models/props/cs_office/water_bottle.mdl
* models/props_c17/chair02a.mdl
* models/props_c17/chair02a.mdl
* models/props_c17/tools_pliers01a.mdl
* models/props_c17/tools_wrench01a.mdl
* models/props_junk/garbage_metalcan001a.mdl
* models/props_junk/garbage_metalcan002a.mdl
* models/props_junk/garbage_milkcarton001a.mdl
* models/props_junk/garbage_milkcarton002a.mdl
* models/props_junk/garbage_plasticbottle001a.mdl
* models/props_junk/garbage_plasticbottle003a.mdl
* models/props_junk/metal_paintcan001a.mdl
* models/props_junk/metal_paintcan001b.mdl
* models/props_junk/popcan01a.mdl
* models/props_junk/shoe001a.mdl
* models/props_lab/binderblue.mdl
* models/props_lab/binderbluelabel.mdl
* models/props_lab/bindergraylabel01a.mdl
* models/props_lab/bindergraylabel01b.mdl
* models/props_lab/bindergreen.mdl
* models/props_lab/bindergreenlabel.mdl
* models/props_lab/binderredlabel.mdl
* models/props_lab/box01a.mdl
* models/props_lab/jar01a.mdl
* models/props_wasteland/cafeteria_table001a.mdl
* models/props_wasteland/controlroom_chair001a.mdl

</details>

smalldir.txt contains parent path of the models, one per each line.

<details><summary>Default value of 'smalldir.txt'</summary>

* models/gibs/
* models/humans/

</details>
