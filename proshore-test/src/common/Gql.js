import { gql } from "@apollo/client";

//================================================================
// Spells
//================================================================
export const GQL_getSpells = gql`
  query getSpells {
    spells {
      index
      name
      school {
        desc
        index
        name
      }
      level
      classes {
        hit_die
        index
        name
      }
      subclasses {
        class {
          hit_die
          index
          name
        }
        index
        name
      }
      concentration
      ritual
      attack_type
      casting_time
      area_of_effect {
        size
        type
      }
      damage {
        damage_type {
          index
          name
          desc
        }
      }
      desc
      dc {
        desc
        success
        type {
          desc
          full_name
          index
        }
      }
      duration
      heal_at_slot_level {
        healing
        level
      }
      higher_level
      material
      range
      components
    }
  }
`;
