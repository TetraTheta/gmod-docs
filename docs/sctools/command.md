# SC Tools Command

SC Tools provides SuperAdmin-oriented console commands. Unless a command says otherwise, it must be run by a SuperAdmin player or by the server console.

Many player-targeting commands accept a partial player name. If the player name is omitted, the command usually targets the command caller.

## Silent Variants

Several commands have a `_s` suffix, such as `sc_heal_s` or `sc_clean_s`. These perform the same action but suppress the normal chat or HUD message.

| Normal command | Silent command |
| --- | --- |
| `sc_clean` | `sc_clean_s` |
| `sc_drop_weapon` | `sc_drop_weapon_s` |
| `sc_flashlight` | `sc_flashlight_s` |
| `sc_gca` | `sc_gca_s` |
| `sc_god` | `sc_god_s` |
| `sc_heal` | `sc_heal_s` |
| `sc_overheal` | `sc_overheal_s` |
| `sc_remove_weapon` | `sc_remove_weapon_s` |
| `sc_set_god` | `sc_set_god_s` |
| `sc_setspeed` | `sc_setspeed_s` |
| `sc_unset_god` | `sc_unset_god_s` |

## sc_clean

Remove objects from the current map.

``` plaintext title="USAGE"
sc_clean <all|ammo|debris|decals|gibs|powerups|ragdolls|small|weapons>
```

| Target | Removes |
| --- | --- |
| `all` | Every cleanup category listed below. |
| `ammo` | HL2 ammunition entities. |
| `debris` | `prop_physics` entities with the Debris spawnflag. |
| `decals` | Client-side decals. |
| `gibs` | Server-side gib entities. |
| `powerups` | Health kits, health vials, and suit batteries. |
| `ragdolls` | Server-side `prop_ragdoll` and client-side ragdolls. |
| `small` | Props listed in `small_model.txt` or under `small_model_dir.txt`. |
| `weapons` | HL2 weapon entities. |

!!! bug "Known issue"

    Running `sc_clean` repeatedly in a very short time can print duplicate messages.

## sc_drop_weapon

Drop the weapon that the target player is currently holding.

``` plaintext title="USAGE"
sc_drop_weapon [player name]
```

## sc_flashlight

Enable the flashlight for the target player.

``` plaintext title="USAGE"
sc_flashlight [player name]
```

## sc_gca

Refill the ammunition used by the weapon that the target player is currently holding.

``` plaintext title="USAGE"
sc_gca [player name]
```

## sc_glow_add|remove_class|model|name { #sc_glow }

Manage persistent server-side glow filters.

``` plaintext title="USAGE"
sc_glow_add_class <class name>
sc_glow_remove_class <class name>
sc_glow_add_model <model path>
sc_glow_remove_model <model path>
sc_glow_add_name <targetname>
sc_glow_remove_name <targetname>
```

`sc_glow_add_model` and `sc_glow_remove_model` support a `*` wildcard at the end of the path. For example, `models/props/cs_office/trash_can*` matches every trash can model under that prefix.

## sc_god, sc_set|unset_god { #sc_god }

Toggle GodMode for a player, or mark the NPC you are looking at as protected.

``` plaintext title="USAGE"
sc_god [player name]
sc_set_god
sc_unset_god
```

`sc_set_god` and `sc_unset_god` require a valid player caller because the command uses the caller's trace target.

## sc_heal, sc_overheal { #sc_heal }

Heal the target player.

``` plaintext title="USAGE"
sc_heal [player name]
sc_overheal [player name]
```

`sc_heal` restores health. `sc_overheal` also refills the HEV suit battery.

## sc_reload

Reload SC Tools configuration files from `data/sctools/`.

``` plaintext title="USAGE"
sc_reload
```

## sc_remove, sc_remove_all, sc_remove_constraints { #sc_remove }

Remove or detach the entity you are looking at.

``` plaintext title="USAGE"
sc_remove
sc_remove_all
sc_remove_constraints
```

`sc_remove_all` removes constrained entities connected to the traced entity. `sc_remove_constraints` only removes constraints.

These commands require a valid player caller because the command uses the caller's trace target.

## sc_remove_weapon

Remove the weapon that the target player is currently holding.

``` plaintext title="USAGE"
sc_remove_weapon [player name]
```

## sc_setservercvar

Change a whitelisted replicated server ConVar.

``` plaintext title="USAGE"
sc_setservercvar <convar> <value>
```

This command is used by the spawnmenu settings UI. It clamps known numeric values before applying them and rejects ConVars that were not registered by SC Tools or SC Weapons.

## sc_setspeed

Set a player's movement speed preset.

``` plaintext title="USAGE"
sc_setspeed <all|duck|run|slow|walk> <fast|reset> [player name]
```

| Mode | `fast` | `reset` |
| --- | ---: | ---: |
| `duck` | `0.8` | `0.3` |
| `run` | `600` | `400` |
| `slow` | `150` | `100` |
| `walk` | `300` | `200` |

## sc_toggle_freeze

Toggle physics motion for the entity you are looking at.

``` plaintext title="USAGE"
sc_toggle_freeze
```

This command requires a valid player caller because the command uses the caller's trace target.

