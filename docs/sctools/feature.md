# SC Tools Feature

## Auto GodMode

* NPC Auto GodMode: In certain maps, certain NPCs will automatically be in GodMode, so they won't take any damage.
* SAdmin Auto GodMode: Players in the SuperAdmin usergroup will be in GodMode automatically.

<h3>See also</h3>

* [Config `auto_god_map.txt`](config.md#auto_god_map)
* [Config `auto_god_npc.txt`](config.md#auto_god_npc)
* [ConVar `sc_auto_god_npc`](convar.md#sc_auto_god)
* [ConVar `sc_auto_god_sadmin`](convar.md#sc_auto_god)

## Boost Speed

When the player presses the ++shift++(`+speed`) key while crouching or taking a ladder, the player's speed will be multiplied by the value of `sc_boost_speed_modifier`.

The default value, which is `1.0`, won't change the speed, but if you set it to `2.0`, the player's speed will be x2 of normal speed.

<h3>See also</h3>

* [ConVar `sc_boost_speed_modifier`](convar.md#sc_boost_speed_modifier)

## Change Sound Speed

In Garry's Mod, if your game's speed is too fast, the sounds stop playing. This can be mitigated by speeding up the sounds too.

But the nature of increasing the speed of the sound will also increase the pitch of the sound. Those sounds will be like twitter.

<h3>See also</h3>

* [ConVar `sc_boost_speed_modifier`](convar.md#sc_boost_speed_modifier)

## Disable Collision

Physics calculation is a heavy operation. If you have tons of small objects with collision enabled, they will call physics calculations a lot and degrade the server's performance.

But if you disable collisions for them, they won't call physics calculations that much, and will make your server more performant.

You can also disable player-to-player collisions ~~to prevent [this situation](https://youtu.be/VqB1uoDTdKM).~~

<h3>See also</h3>

* [ConVar `sc_disable_obstacle`](convar.md#sc_disable_obstacle)
* [ConVar `sc_disable_player_collision`](convar.md#sc_disable_player_collision)
* [Feature 'Small Objects'](feature.md#small-objects)

## Disable Red Death Overlay

When the player dies, he will see a red overlay all over the screen. For some people, this can make their eyes hurt. In that case, if they set `sc_disable_red_death` to `1`, those red overlays will be gone.

<h3>See also</h3>

* [ConVar `sc_disable_red_death`](convar.md#sc_disable_red_death)

## Highlight Entities

If you want to find certain entities with class, targetname, or model, you can do it with `sc_glow` command.

<h3>See also</h3>

* [Command `sc_glow_add|remove_class|model|name`](command.md#sc_glow)

## Hitsound / Killsound

When an NPC is hit by a player, the player will hear a hitsound, or a killsound if the NPC is killed, depending on where the NPC is hit.

This behavior can be toggled by each client with `sc_bshot_effect`/`sc_hshot_effect`, and their volume can be adjustable for each client with `snd_bshotvolume`/`snd_hshotvolume`.

<h3>Sound source</h3>

* [Counter-Strike 2](https://store.steampowered.com/app/730)
* [Half-Life 2 : MMod](https://www.moddb.com/mods/hl2-ep2-enhased-mod)

<h3>See also</h3>

* [ConVar `sc_bshot_effect`](convar.md#sc_shot_effect)
* [ConVar `sc_hshot_effect`](convar.md#sc_shot_effect)
* [ConVar `snd_bshotvolume`](convar.md#snd_shotvolume)
* [ConVar `snd_hshotvolume`](convar.md#snd_shotvolume)

## Restore `disconnect`

Garry's Mod doesn't allow `point_clientcommand` or `point_servercommand` to invoke `disconnect`. SC Tools can intercept that input and manually kick players to mimic what the `disconnect` command does.

<h3>See also</h3>

* [ConVar `sc_disconnect_mode`](convar.md#sc_disconnect_mode)

## Small Objects

Even though they are small, they can disturb your path by blocking you. You can either disable collision checking or remove them to liberate you and your server from those nasty blockings.

<h3>See also</h3>

* [Config `small_model.txt`](config.md#small_model)
* [Config `small_model_dir.txt`](config.md#small_model_dir)
