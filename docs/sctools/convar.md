# SC Tools Console Variable

SC Tools uses replicated server ConVars for shared behavior and client ConVars for local-only effects. Server values can be changed from the console or through the spawnmenu settings page with `sc_setservercvar`.

## Server ConVars

| ConVar | Default | Range | Description |
| --- | ---: | --- | --- |
| `sc_auto_flashlight` | `0` | `0`-`7` | Automatically enable flashlights by bitflag. |
| `sc_auto_god_mode` | `0` | `0`-`1` | Protection type used by automatic GodMode. |
| `sc_auto_god_npc` | `0` | `0`-`1` | Protect configured NPCs on configured maps. |
| `sc_auto_god_sadmin` | `0` | `0`-`3` | Protect SuperAdmins by bitflag. |
| `sc_boost_speed_modifier` | `1.0` | `1.0`-`10.0` | Multiplier for crouch and ladder boost speed. |
| `sc_change_sound_pitch` | `0` | `0`-`1` | Adjust sound pitch when game speed changes. |
| `sc_disable_obstacle` | `0` | `0`-`1` | Disable collisions for configured small props. |
| `sc_disable_player_collision` | `0` | `0`-`1` | Disable player-to-player collision. |
| `sc_disconnect_mode` | `0` | `0`-`1` | Re-enable map-triggered `disconnect` behavior. |
| `sc_glow_class` | empty | string | Entity class glow filter. |
| `sc_glow_model` | empty | string | Entity model glow filter. |
| `sc_glow_name` | empty | string | Entity targetname glow filter. |
| `sc_remove_effect` | `0` | `0`-`1` | Effect used when SC Tools removes entities. |

## Client ConVars

| ConVar | Default | Range | Description |
| --- | ---: | --- | --- |
| `env_hudhint_enable` | `1` | `0`-`1` | Show `env_hudhint` notification messages. |
| `game_text_force_glua` | `0` | `0`-`1` | Force `game_text` to use the GLua HUD renderer instead of the native C++ renderer. |
| `sc_bshot_effect` | `0` | `0`-`3` | Bodyshot feedback mode. |
| `sc_dynamic_fire` | `0` | `0`-`1` | Enable local dynamic fire effects. |
| `sc_hshot_effect` | `0` | `0`-`3` | Headshot feedback mode. |
| `snd_bshotvolume` | `1.0` | `0.0`-`1.0` | Bodyshot sound volume. |
| `snd_hshotvolume` | `1.0` | `0.0`-`1.0` | Headshot sound volume. |

## sc_auto_flashlight

Automatically enable flashlights for players.

``` plaintext title="USAGE"
sc_auto_flashlight <bitflag = 0>
```

| Bit | Meaning |
| ---: | --- |
| `1` | Enable the feature. |
| `2` | Apply to all players instead of SuperAdmins only. |
| `4` | Print verbose messages. |

Common values are `0` disabled, `1` SuperAdmins only, `3` all players, `5` SuperAdmins only with messages, and `7` all players with messages.

## sc_auto_god_npc, sc_auto_god_sadmin { #sc_auto_god }

Enable automatic protection.

``` plaintext title="USAGE"
sc_auto_god_npc <0|1>
sc_auto_god_sadmin <bitflag = 0>
```

`sc_auto_god_npc` protects NPCs listed in `auto_god_npc.txt`, but only on maps listed in `auto_god_map.txt`. `sc_auto_god_sadmin` protects players in the `superadmin` usergroup.

`sc_auto_god_sadmin` bitflag values:

| Bit | Meaning |
| ---: | --- |
| `1` | Enable the feature. |
| `2` | Print verbose messages. |

## sc_auto_god_mode

Choose the protection style used by automatic GodMode.

``` plaintext title="USAGE"
sc_auto_god_mode <0|1>
```

| Value | Mode |
| ---: | --- |
| `0` | Buddha mode: damage is allowed, but death is prevented. |
| `1` | God mode: damage is blocked. |

## sc_boost_speed_modifier

Multiplier for boost speed.

``` plaintext title="USAGE"
sc_boost_speed_modifier <1.0-10.0>
```

The value is rounded to one decimal place when changed through `sc_setservercvar`.

## sc_change_sound_pitch

Adjust sound speed and pitch when the game speed changes.

``` plaintext title="USAGE"
sc_change_sound_pitch <0|1>
```

## sc_disable_obstacle

Disable collisions for configured small props.

``` plaintext title="USAGE"
sc_disable_obstacle <0|1>
```

## sc_disable_player_collision

Disable player-to-player collision.

``` plaintext title="USAGE"
sc_disable_player_collision <0|1>
```

## sc_disconnect_mode

Mimic map-triggered `disconnect` behavior.

``` plaintext title="USAGE"
sc_disconnect_mode <0|1>
```

| Server type | `0` | `1` |
| --- | --- | --- |
| Singleplayer listen server | Show a message. | Disconnect. |
| Multiplayer listen server | Show a message. | Host: show a message. Client: disconnect. |
| Dedicated server | Show a message. | Disconnect. |

## sc_glow_class, sc_glow_model, sc_glow_name

Store glow filters for class names, model paths, and targetnames.

``` plaintext title="USAGE"
sc_glow_class <value>
sc_glow_model <value>
sc_glow_name <value>
```

Prefer the `sc_glow_add_*` and `sc_glow_remove_*` commands unless you need to overwrite the raw stored value.

## sc_remove_effect

Choose the effect used when SC Tools removes entities.

``` plaintext title="USAGE"
sc_remove_effect <0|1>
```

| Value | Effect |
| ---: | --- |
| `0` | Toolgun remove effect. |
| `1` | Dissolve when the entity supports it; otherwise fall back to remove. |

## env_hudhint_enable

Show or hide `env_hudhint` notifications locally.

``` plaintext title="USAGE"
env_hudhint_enable <0|1>
```

## game_text_force_glua

Force `game_text` display through SC Tools' GLua HUD renderer.

``` plaintext title="USAGE"
game_text_force_glua <0|1>
```

| Value | Behavior |
| ---: | --- |
| `0` | Prefer Garry's Mod's native C++ `game_text` renderer whenever MapBase-only features are not required. |
| `1` | Force SC Tools' GLua renderer. Useful for comparing renderer behavior in screenshots. |

The GLua renderer's default font size is tuned to be close to the native C++ renderer at 1920x1080. Other resolutions may show small font-size differences.

## sc_bshot_effect, sc_hshot_effect { #sc_shot_effect }

Enable bodyshot and headshot feedback locally.

``` plaintext title="USAGE"
sc_bshot_effect <0-3>
sc_hshot_effect <0-3>
```

| Value | Effect |
| ---: | --- |
| `0` | Disabled. |
| `1` | Sound only. |
| `2` | UI only. |
| `3` | Sound and UI. |

## sc_dynamic_fire

Enable local dynamic fire effects.

``` plaintext title="USAGE"
sc_dynamic_fire <0|1>
```

## snd_bshotvolume, snd_hshotvolume { #snd_shotvolume }

Set local shot feedback volume.

``` plaintext title="USAGE"
snd_bshotvolume <0.0-1.0>
snd_hshotvolume <0.0-1.0>
```

!!! info "Avoid `0.0` for Source sound volumes"

    Source can treat `0.0` as full volume for some sound paths. Disable the feedback ConVar instead when you want no sound.

