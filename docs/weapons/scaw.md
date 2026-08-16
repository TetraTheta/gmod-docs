# SC Admin Weapons

SC Admin Weapons are SuperAdmin-only weapons based on `scaw_base`. They are intended for testing, cleanup, and admin intervention rather than balanced play.

## Weapon Classes

| Weapon | Classname | Base |
| --- | --- | --- |
| Admin MP5 | `scaw_mp5` | `scaw_base` |
| Admin MP5 (Clean) | `scaw_mp5_clean` | `scaw_mp5` |
| Admin MP5SD | `scaw_mp5sd` | `scaw_base` |
| Admin MP5SD (Clean) | `scaw_mp5sd_clean` | `scaw_mp5sd` |
| Admin Pistol | `scaw_pistol` | `scaw_base` |
| Admin Pistol (Clean) | `scaw_pistol_clean` | `scaw_pistol` |

Clean variants suppress bullet hole impact effects.

## Primary Fire

Primary fire shoots a burst of extremely high-damage bullets without consuming ammo.

| Property | Value |
| --- | --- |
| Ammo type | `Pistol` |
| Damage | `99999999999` |
| Delay | `0.05` |
| Force | `1000000` |
| Shot count | `75` |
| Spread | `Vector(0.015, 0.015, 0)` |

The weapon can still require at least one pistol round because it uses `Pistol` as its ammo type.

## Secondary Fire Modes

Press reload to cycle the secondary fire mode. The active mode is shown in the weapon print name.

| Mode | Value | Description |
| --- | ---: | --- |
| Explosion Mode | `1` | Creates an `env_explosion` at the aim point. |
| Airboat Gun Mode | `2` | Fires seven high-force airboat-style bullets. |
| Combine Ball Mode | `3` | Fires a fast combine ball. |
| Crossbow Bolt Mode | `4` | Fires a fast crossbow bolt. |
| Grenade Mode | `5` | Throws a grenade with a short fuse. |

## ConVars

| ConVar | Default | Range | Description |
| --- | ---: | --- | --- |
| `scaw_mp5_default` | `1` | `1`-`5` | Default secondary fire mode for Admin MP5. |
| `scaw_mp5sd_default` | `1` | `1`-`5` | Default secondary fire mode for Admin MP5SD. |
| `scaw_pistol_default` | `1` | `1`-`5` | Default secondary fire mode for Admin Pistol. |
| `scaw_owner_immune_explosion` | `0` | `0`-`1` | Prevents the owner from taking Explosion Mode damage. |

Server owners can change these through `Utilities > SC Weapons > Settings` or:

``` plaintext title="USAGE"
sc_setservercvar <convar> <value>
```

!!! warning "Explosion Mode can hurt the owner"

    Set `scaw_owner_immune_explosion` to `1` if you want admin weapons to be safer during close-range cleanup.
