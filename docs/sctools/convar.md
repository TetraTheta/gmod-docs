# SC Tools Console Variable

## sc_auto_flashlight

Automatically enable flashlights for players when they join.

``` plaintext title="USAGE"
sc_auto_flashlight <0|1|2>
```

* 0: Disable (default)
* 1: SuperAdmin only
* 2: Everyone

<h3>See also</h3>

* [Command `sc_flashlight`](command.md#sc_flashlight)

## sc_auto_god_npc, sc_auto_god_sadmin { #sc_auto_god }

`sc_auto_god_npc`: Enable GodMode for NPCs(1) in campaign maps(2) automatically.  
`sc_auto_god_sadmin`: Enable GodMode for players in the 'superadmin' usergroup automatically.
{ .annotate }

1.    NPCs defined in `auto_god_npc.txt`
2.    Maps defined in `auto_god_map.txt`

``` plaintext title="USAGE"
sc_auto_god_npc <0|1>
sc_auto_god_sadmin <0|1>
```

* 0: Disable automatic GodMode (default)
* 1: Enable automatic GodMode

<h3>See also</h3>

* [Config `auto_god_map.txt`](config.md#auto_god_map)
* [Config `auto_god_npc.txt`](config.md#auto_god_npc)

## sc_boost_speed_modifier

Multiplier for boost speed.

``` plaintext title="USAGE"
sc_boost_speed_modifier <1.0 ~ 10.0>
```

Default value: `1.0`

<h3>See also</h3>

* [Feature 'Boost Speed'](feature.md#boost-speed)

## sc_change_sound_pitch

Adjust speed/pitch of sound based on game's speed.

``` plaintext title="USAGE"
sc_change_sound_pitch <0|1>
```

<h3>See also</h3>

* [Feature 'Change Sound Speed'](feature.md#change-sound-speed)

## sc_disable_obstacle

Disable collision checking for obstacle objects.

``` plaintext title="USAGE"
sc_disable_obstacle <0|1>
```

* 0: Enable collision check (default)
* 1: Disable collision check

<h3>See also</h3>

* [Config `small_model.txt`](config.md#small_model)
* [Config `small_model_dir.txt`](config.md#small_model_dir)
* [Feature 'Small Objects'](feature.md#small-objects)

## sc_disable_player_collision

Disable player-to-player collisions.

``` plaintext title="USAGE"
sc_disable_player_collision <0|1>
```

* 0: Enable collision check (default)
* 1: Disable collision check

<h3>See also</h3>

* [Feature 'Disable Collision'](feature.md#disable-collision)

## sc_disable_red_death

Remove the red overlay from the death screen.

``` plaintext title="USAGE"
sc_disable_red_death <0|1>
```

* 0: Enable the red overlay (default)
* 1: Remove the red overlay

!!! info "This is client ConVar!"

    This console variable won't be affected or affect the server's value.  
    Clients can change this value to fit their taste.

<h3>See also</h3>

* [Feature 'Disable Red Death Overlay'](feature.md#disable-red-death-overlay)

## sc_disconnect_mode

Mimic how the `disconnect` console command works in a Singleplay game.

``` plaintext title="USAGE"
sc_disconnect_mode <0|1>
```

| Server Type         | `sc_disconnect_mode 0` | `sc_disconnect_mode 1`                   |
| :-----------------: | :--------------------: | :--------------------------------------: |
| Singleplay (Listen) | Show message           | Disconnect                               |
| Multiplay (Listen)  | Show message           | Host: Show message<br>Client: Disconnect |
| Dedicated           | Show message           | Disconnect                               |

<h3>See also</h3>

* [Feature 'Restore `disconnect`'](feature.md#restore-disconnect)

## sc_remove_effect

Entity remove effect type.

``` plaintext title="USAGE"
sc_remove_effect <0|1>
```

* 0: Remove effect from Toolgun Remove mode (default)
* 1: Dissolve

!!! info "Not every entity can be dissolved"
    
    Not every entity is dissolvable. If you try to dissolve them, they will not have any dissolve effect and just disappear.  
    In that case, SC Tools applies the remove effect instead, because it should work for every entity.

<h3>See also</h3>

* [Command `sc_clean`](command.md#sc_clean)
* [Command `sc_remove`, `sc_remove_all`](command.md#sc_remove)

## sc_bshot_effect, sc_hshot_effect { #sc_shot_effect }

`sc_bshot_effect`: Enable the bodyshot effect (Sound, UI).  
`sc_hshot_effect`: Enable the headshot effect (Sound, UI).

``` plaintext title="USAGE"
sc_bshot_effect <0 ~ 3>
sc_hshot_effect <0 ~ 3>
```

* 0: Disbale
* 1: Sound only
* 2: UI only
* 3: Both

!!! bug "Known Issue"

    Only sound effect is available. I'll work on the UI part soon™.

## snd_bshotvolume, snd_hshotvolume { #snd_shotvolume }

`snd_bshotvolume`: Volume of the bodyshot sound effect.  
`snd_hshotvolume`: Volume of the headshot sound effect.

``` plaintext title="USAGE"
snd_bshotvolume <0.0 ~ 1.0>
snd_hshotvolume <0.0 ~ 1.0>
```

!!! info "Do not set this value to `0.0`"
    
    If you set this volume as `0.0`, it will be interpreted as `1.0` by the engine.

<h3>See also</h3>

* [ConVar `sc_bshot_effect`](convar.md#sc_shot_effect)
* [ConVar `sc_hshot_effect`](convar.md#sc_shot_effect)
