# SC Tools

<steam-workshop itemid="3207465120"></steam-workshop>

> *Random Stuff I've Made*

SC Tools is a grab bag of utilities I made because I needed them. It includes small quality-of-life fixes, map compatibility helpers, cleanup commands, and server-side controls that are especially useful when playing Half-Life 2 or ported maps in Garry's Mod.

Most server-impacting features must be enabled by a SuperAdmin first. After that, safe client-side options can be adjusted by each player from the console or from the spawnmenu.

## What It Provides

* Cleanup commands for ammo, debris, decals, gibs, health items, ragdolls, weapons, and configured small props.
* SuperAdmin tools for healing, refilling current weapon ammo, toggling GodMode, removing entities, freezing props, changing player speed, and managing the active weapon.
* Automatic GodMode/Buddha protection for configured campaign NPCs and SuperAdmins.
* Collision reduction for configured small props and optional player-to-player collision removal.
* Client-side hitsound, killsound, and dynamic fire options.
* Map compatibility entities such as `env_hudhint`, `sc_changelevel`, `sc_breakable`, `prop_interactable`, `npc_lost_soul`, and `npc_shadow_walker`.
* A shared `sctools` Lua module for other scripts in the add-on.

## Spawnmenu Settings

SC Tools adds a settings page at:

``` plaintext
Utilities > SC Tools > Settings
```

The page can change whitelisted replicated server ConVars through `sc_setservercvar`, so non-console users can manage common server settings without typing raw commands. Only SuperAdmins can change server-side settings.

## File-Based Configuration

SC Tools reads configuration files from `data/sctools/`. Default copies are shipped in the add-on and are loaded when the data files do not exist yet.

After changing a config file, run:

``` plaintext
sc_reload
```

See [Config](config.md) for the file formats and default contents.

!!! tip "Use the x86-64 beta branch"

    The Garry's Mod x86-64 branch is strongly recommended. Most SC Tools features work on the main branch, but some compatibility behavior depends on engine features that are more reliable on x86-64.
