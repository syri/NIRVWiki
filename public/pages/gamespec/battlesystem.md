# Battle System

## Stats
### Health
**Health Points**

Max and Current Health.

Affected by: *Vitality.*

    MaxHealth = Vitality * 5

**Armour**

Applied over health.

Affected by: *Gear stats.*

    Mitigates 80% of damage received.

### Battle Attributes

**Vitality**

Affects health and physical defense.

**Strength**

Affects physical-based battle mechanics.

**Intelligence**

Affects non-physical-based battle mechanics.

**Dexterity**

Affects the chance of dodging incoming attacks.

**Critical Hit**

Affects the chance and power of dealt critical attacks.

**Physical Attack Power**

    PhysicalAttackPower = Strength * (CriticalHit * 2)

**Magical Attack Power**

    MagicalAttackPower = Intelligence * (CriticalHit * 2)

**Physical Defense**

    PhysicalDefense = Strength * Vitality

**Magical Defense**

    MagicalDefense = Intelligence * Vitality

**Heal Power**

    HealPower = Intelligence * (CriticalHit * 1.5)

## Battle System
### Physical Damage

Generalised as anything that does damage between two physical objects making direct contact.

### Magical Damage

Any form of damage that isn't considered physical.

### Weapon Types
* Melee weapons
* Projectile weapons
* TBD
