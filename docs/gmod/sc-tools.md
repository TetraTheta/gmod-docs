# SC Tools
[Steam Workshop]()

> *Random stuff I've made*

SC Tools are a collection of custom console commands and ConVars I've made.

Most of these commands require SuperAdmin privilege.

## Commands

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
  * `models/gibs/*`
  * `models/humans/*`
  * `models/props/cs_office/trash_can_p1.mdl`
  * `models/props/cs_office/trash_can_p2.mdl`
  * `models/props/cs_office/trash_can_p3.mdl`
  * `models/props/cs_office/trash_can_p4.mdl`
  * `models/props/cs_office/trash_can_p5.mdl`
  * `models/props/cs_office/trash_can_p7.mdl`
  * `models/props/cs_office/trash_can_p8.mdl`
  * `models/props/cs_office/water_bottle.mdl`
  * `models/props_c17/chair02a.mdl`
  * `models/props_junk/garbage_metalcan001a.mdl`
  * `models/props_junk/garbage_metalcan002a.mdl`
  * `models/props_junk/garbage_plasticbottle001a.mdl`
  * `models/props_junk/garbage_plasticbottle003a.mdl`
  * `models/props_junk/metal_paintcan001a.mdl`
  * `models/props_junk/metal_paintcan001b.mdl`
  * `models/props_junk/popcan01a.mdl`
  * `models/props_junk/shoe001a.mdl`
  * `models/props_wasteland/cafeteria_table001a.mdl`
  * `models/props_wasteland/controlroom_chair001a.mdl`
* `weapon`: HL2 weapons

See Also: [`sc_remove_effect`](#sc_remove_effect)

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

### sc_remove

Remove the entity the player is looking at.

This command must be used by a player, and the player must look directly at an entity that is meant to be removed.

Usage: `sc_remove`

### sc_remove_all

Remove the entity the player is looking at, including those that are connected too.

This command must be used by a player, and the player must look directly at an entity that is meant to be removed.

Usage: `sc_remove_all`

### sc_remove_constraints

Remove constraints on the entity the player is looking at.

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

Here are the speed of the player: The value of reset is tested with a clean player state.

* `duck`: `0.3` (reset) | `0.8` (fast - 267%)
* `run`: `400` (reset) | `600` (fast - 150%)
* `slow`: `100` (reset) | `150` (fast - 150%)
* `walk`: `200` (reset) | `300` (fast - 150%)

## ConVar

### sc_auto_god_npc

Automatically make NPC in campaign maps invulnerable.

`sc_auto_god_npc <0|1>`
* `0`: True
* `1`: False

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

### sc_flashlight_auto

Automatically enable flashlights for players.

`sc_flashlight_auto <0|1|2>`
  * `0`: Disable
  * `1`: SuperAdmin Only
  * `2`: All Players

### sc_no_player_collision

Disable player-to-player collision globally.

`sc_no_player_collision <0|1>`
  * `0`: Disable
  * `1`: Enable

### sc_remove_effect

Entity remove effect type. This is shared with other commands.

`sc_remove_effect <0|1>`
* `0`: Remove as if it were removed with the Remove Toolgun
* `1`: Dissolve
