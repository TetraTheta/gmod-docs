# SC Tools Command

SC Tools provides useful commands.

Before you use these, you must configure SC Tools by changing [Console Variables](convar.md) to make them work as you want.

For security reasons, unless specified, these commands are only usable by players who are in the SuperAdmin usergroup.

## sc_clean

Remove objects from the current map.

``` plaintext title="USAGE"
sc_clean <all|ammo|debris|decals|gibs|powerups|ragdolls|small|weapons>
```

`sc_clean` cleans these things:

* `ammo`: Ammunition entities.
    * `item_ammo_357`, `item_ammo_357_large`
    * `item_ammo_ar2`, `item_ammo_ar2_altfire`, `item_ammo_ar2_large`
    * `item_ammo_crossbow`
    * `item_ammo_pistol`, `item_ammo_pistol_large`
    * `item_ammo_smg1`, `item_ammo_smg1_grenade`, `item_ammo_smg1_large`
    * `item_box_buckshot`
    * `item_rpg_round`
* `debris`: `prop_physics` entities with 'Debris' spawnflag.
* `decals`: Client-side decals.
* `gibs`: `gib` entities.
* `powerups`: Entities that are related to health and HEV suit batteries.
    * `item_battery`
    * `item_healthkit`, `item_healthvial`
* `ragdolls`: Both server-side ragdolls(`prop_ragdoll`) and client-side ragdolls.
* `small`: ['Small objects'](feature.md#small-objects).
* `weapons`: Weapon entities.
    * `weapon_357`, `weapon_ar2`, `weapon_bugbait`, `weapon_crossbow`, `weapon_crowbar`, `weapon_frag`, `weapon_pistol`, `weapon_rpg`, `weapon_shotgun`, `weapon_slam`, `weapon_smg1`, `weapon_stunstick`

!!! bug "Known Issue"

    If you run the `sc_clean` command rapidly, you'll get duplicated messages.

<h3>See also</h3>

* [Config `small_model.txt`](config.md#small_model)
* [Config `small_model_dir.txt`](config.md#small_model_dir)
* [ConVar `sc_remove_effect`](convar.md#sc_remove_effect)
* [Feature 'Small Objects'](feature.md#small-objects)

## sc_flashlight

Enable flashlights for the given player.

``` plaintext title="USAGE"
sc_flashlight <player name>
```

You must specify player even though you want to enable flashlight yourself.

<h3>See also</h3>

* [ConVar `sc_auto_flashlight`](convar.md#sc_auto_flashlight)

## sc_gca

Refill the ammo of the weapon that the given player is holding.

``` plaintext title="USAGE"
sc_gca [player name]
```

You can omit 'player name' to refill your ammunition.

## sc_god, sc_set_god, sc_unset_god { #sc_god }

`sc_god`: Toggle GodMode for the player.

``` plaintext title="USAGE"
sc_god [player name]
```

The player in GodMode won't take any damage. It is the same as running `god` on the console.

You can omit 'player name' to toggle your GodMode.

***

`sc_set_god`: Enable GodMode for the NPC you're looking at.  
`sc_unset_god`: Disable GodMode for the NPC you're looking at.

``` plaintext title="USAGE"
sc_set_god
sc_unset_god
```

The NPC in GodMode won't take damage in most cases.  
If you find an NPC in GodMode dies, tell me the reproducible steps, and I'll try to fix that situation.

!!! warning "Do not use these commands as console!"

    Because these commands require a valid player to get an entity, you must run them as a player!

<h3>See also</h3>

* [ConVar `sc_auto_god_npc`](convar.md#sc_auto_god)
* [ConVar `sc_auto_god_sadmin`](convar.md#sc_auto_god)
* [Feature 'Auto GodMode'](feature.md#auto-godmode)

## sc_heal, sc_overheal { #sc_heal }

`sc_heal`: Heal player.  
`sc_overheal`: Overheal(1) player.
{ .annotate }

1.    Heal player and refills the HEV suit battery.

``` plaintext title="USAGE"
sc_heal [player name]
sc_overheal [player name]
```

You can omit 'player name' to heal yourself.

## sc_reload

Reload the SC Tools configurations.

``` plaintext title="USAGE"
sc_reload
```

<h3>See also</h3>

* [Config `auto_god_map.txt`](config.md#auto_god_map)
* [Config `auto_god_npc.txt`](config.md#auto_god_npc)
* [Config `npc_disable_input.txt`](config.md#npc_disable_input)
* [Config `small_model.txt`](config.md#small_model)
* [Config `small_model_dir.txt`](config.md#small_model_dir)

## sc_remove, sc_remove_all, sc_remove_constraints { #sc_remove }

`sc_remove`: Remove the entity you are looking at.  
`sc_remove_all`: Remove every entity that is connected to the entity you are looking at.  
`sc_remove_constraints`: Remove constraints from the entity you are looking at.

``` plaintext title="USAGE"
sc_remove
sc_remove_all
sc_remove_constraints
```

When the NPC is removed, it will perform a few actions to stop what it was doing.

!!! warning "Do not use these commands as console!"

    Because these commands require a valid player to get an entity, you must run them as a player!

<h3>See also</h3>

* [Config `npc_disable_input.txt`](config.md#npc_disable_input)
* [ConVar `sc_remove_effect`](convar.md#sc_remove_effect)

## sc_setspeed

Set a player's speed.

``` plaintext title="USAGE"
sc_setspeed <all|duck|run|slow|walk> <fast|reset> [player name]
```

You can omit 'player name' to change your speed.

* duck: speed when the player crouches using ++ctrl++(`+duck`).  
    fast: `0.8`, reset: `0.3`
* run: speed when the player runs using ++shift++(`+speed`).  
    fast: `600`, reset: `400`
* slow: speed when the player walks using ++alt++(`+walk`).  
    fast: `150`, reset: `100`
* walk: speed when the player walks without using any modifier keys.  
    fast: `300`, reset: `200`
