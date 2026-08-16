# SC Tools Module

SC Tools exposes a Lua module named `sctools`. It is used internally by the add-on and can also be reused by small server scripts that need the same cleanup or command helper behavior.

``` lua
require("sctools")
```

## Tables

### sctools.command

Namespace for command helper functions.

### sctools.protect

Internal protection table used by SC Tools GodMode logic.

!!! warning "Internal table"

    Avoid writing to `sctools.protect` from other add-ons unless you are intentionally integrating with SC Tools protection behavior.

## sctools.GetTraceEntity

Returns the entity a player is looking at.

``` lua
function sctools.GetTraceEntity(ply: Player) -> Entity
```

The trace uses a broad solid/debris mask so command helpers can target props, doors, NPCs, and similar map entities.

## sctools.IsSuperAdmin

Checks whether a valid in-server player is in the `superadmin` usergroup.

``` lua
function sctools.IsSuperAdmin(ply: Player) -> boolean
```

## sctools.ReloadConfig

Reloads all SC Tools data files from `data/sctools/`.

``` lua
function sctools.ReloadConfig()
```

This refreshes:

* `auto_god_map.txt`
* `auto_god_npc.txt`
* `npc_disable_input.txt`
* `small_model.txt`
* `small_model_dir.txt`

## sctools.RemoveConstraints

Removes constraints from an entity.

``` lua
function sctools.RemoveConstraints(ent: Entity)
```

Players and invalid entities are ignored. On the server, this also opens linked areaportals for removed door-style entities where applicable.

## sctools.RemoveEntity

Removes an entity using SC Tools behavior.

``` lua
function sctools.RemoveEntity(ent: Entity)
```

Players and invalid entities are ignored.

The function:

* fires configured NPC disable inputs from `npc_disable_input.txt`,
* opens linked areaportals for door-style entities,
* removes constraints,
* applies the effect selected by `sc_remove_effect`.

When `sc_remove_effect` is set to dissolve, brush-like entities that cannot dissolve safely are broken or removed instead.

## sctools.SendMessage

Sends a message to a player, or prints to the server console when `target` is `NULL`.

``` lua
function sctools.SendMessage(msg: string, target: Entity | Player, hudType: integer | nil)
```

`hudType` defaults to `HUD_PRINTCONSOLE`.

## sctools.command.GetPlayerByName

Finds a connected human player by exact nickname.

``` lua
function sctools.command.GetPlayerByName(name: string) -> Player
```

Quoted names are unwrapped. The function returns `NULL` when no matching player exists.

## sctools.command.SuggestPlayer

Builds autocomplete suggestions for commands that take a player name.

``` lua
function sctools.command.SuggestPlayer(cmd: string, args: string) -> table
```

Suggestions are returned in the form:

``` plaintext
<command> "<player name>"
```

