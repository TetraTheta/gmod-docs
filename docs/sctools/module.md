# SC Tools Module

SC Tools provides Lua module named `sctools`.

*TODO: add more explanation*

## `sctools`

### GetTraceEntity

``` lua
function sctools.GetTraceEntity(ply: Player) -> Entity
```

### IsSuperAdmin

``` lua
function sctools.IsSuperAdmin(p: Player) -> boolean
```

### ReloadConfig

``` lua 
function sctools.ReloadConfig()
```

### RemoveEntity

``` lua
function sctools.RemoveEntity(ent: Entity)
```

### SendMessage

``` lua
function sctools.SendMessage(msg: string, target: Entity|Player, hudType: integer|nil)
```

### command.GetPlayerByName

``` lua
function sctools.command.GetPlayerByName(name: string) -> Player
```

### command.SuggestPlayer

``` lua
function sctools.command.SuggestPlayer(cmd: string, args: string) -> table
```
