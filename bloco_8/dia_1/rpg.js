const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon};

  const dragonAttack = (dragon) => {
      const minDmg = 15;
      const {strength} = dragon;
      const dragonDmg = Math.floor((Math.random()* (strength -minDmg)+minDmg));
      return dragonDmg;
  }

  const warriorAttack = (warrior) => {
    const { weaponDmg } = warrior;
    const minDmg = warrior.strength;
    const maxDmg = minDmg * weaponDmg;
    const warriorDmg = Math.floor((Math.random()* (maxDmg -minDmg)+ minDmg));
    return warriorDmg;
  }

  const mageAttack = (mage) => {
      const manaMage = mage.mana;
      const minDmg = mage.intelligence;
      const maxDmg = minDmg * 2;
      const turnStats = {
        manaSpent:0,
        damageDealt: 'Sem mana',
      };

      if(manaMage > 15){
          const mageDamage = Math.floor((Math.random()* (maxDmg -minDmg)+ minDmg));
          turnStats.manaSpent = 15;
          turnStats.damageDealt = mageDamage;
          return turnStats;
      }
      return turnStats;
  }


  const gameActions = {
      warrioTurn: (warriorAttack) => {
          const warriorDamage = warriorAttack();
          warrior.damage =warriorDamage;
          dragon.healthPoints -= warriorDamage;
      },
      
      mageTurn: (mageAttack) => {
          const mageTurnStats = mageAttack();
          const mageDamage = mageTurnStats.damageDealt;
          const {manaSpent} = mageTurnStats;
          mage.damage =mageDamage;
          mage.mana -= manaSpent;
          dragon.healthPoints -= mageDamage; 
      },
      dragonTurn: (dragonAttack) => {
          const dragonDamage = dragonAttack();
          mage.healthPoints -= dragonDamage;
          warrior.healthPoints -= dragonDamage;
          dragon.damage = dragonDamage;
      },
    turnResults: () => battleMembers,
  };

  gameActions.warrioTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.turnResults());
  