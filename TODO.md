# TODO

## Open Questions

- **Clarify RangedType-to-realm mapping for CoM2**: The current RANGED_TYPE_MAP in index.html is based on the MoM wiki's Ranged Magical Attack Subtypes table. However, some codes are ambiguous:
  - **Code 32** (ice bolt / illusion ball): The wiki lists Djinn (Nature) and Sage/Illusionist heroes (Sorcery) under the same animation group, but with different realm colors. We currently map 32 to Sorcery based on the hero majority. Need to verify whether CoM2 treats Djinn's ranged attack as Sorcery or Nature.
  - **Code 34** (Water Elemental): Not listed in the wiki subtypes table. Mapped to Sorcery based on Water Elemental being a Sorcery creature. Need confirmation.
  - **Code 33** (death bolt): Wiki says Chaos-colored, but used by Death realm creatures (Shadow Demons, Demon Lord, Ghouls). Need to confirm whether CoM2 treats these as Chaos or has a separate Death realm for damage purposes.
  - General question: Does CoM2 use the same realm-color assignments as MoM, or has it changed any?
