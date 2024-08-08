# SC Tools Entity

SC Tools provides some useful entities.

## env_hudhint

In Garry's Mod, `env_hudhint` is missing. This can cause problem when running maps for Half-Life 2 or other maps that uses it.

### Keyvalues

* Hint Text(`message`)  
  This can be a plaintext(`%+zoom% ZOOM VIEW`) or a localization key(like `#Valve_Hint_Zoom`).  
  If it is a localization key, it will be translated to the user's language. After that, translatable keybinds like `%+zoom%` will be translated.  
  Localization key can be manually added with [`language.Add`](https://wiki.facepunch.com/gmod/language.Add).
  ```lua
  language.Add("My_Translation_Key", "My Translation Key which is added by client realm lua code.")
  -- EnvHudHint:SetKeyValue("message", "My_Translation_Key")
  ```

### Inputs

* `ShowHudHint`: Sends translated message as a notification to player who activated it.

## sc_changelevel

There are many ways to change map. But in few maps, maps are changed via invoking `map <map name>` to `point_servercommand` or `point_clientcommand`. Garry's Mod doesn't allow this behavior.

`sc_changelevel` is alternative way to change map with `map <map name>` that bypasses the restriction.

### Keyvalues

* Next Map(`map`)  
  This is next map name. If `ChangeLevel` input is invoked, server will change current map to this map.

### Inputs

* `ChangeLevel`: Change map to the map stored as `map`.
